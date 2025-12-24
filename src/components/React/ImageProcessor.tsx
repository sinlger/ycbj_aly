import React, { useState, useCallback, useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';

// 图标组件
const IconSelect = ({ active }: { active: boolean }) => (
  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${active ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'}`}>
    {active && <div className="w-2 h-2 bg-white rounded-full"></div>}
  </div>
);

export default function ImageProcessor() {
  // 状态管理
  const [step, setStep] = useState(1); // 1: Upload, 2: Configure, 3: Processing, 4: Result
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [config, setConfig] = useState({
    type: 'common', // common: 通用分割, hd: 高清分割
    returnForm: null // whiteBK, mask, crop
  });

  // 第一步：处理上传
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (f) => {
        setOriginalImage(f.target?.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  // 第三步：提交至后端
  const handleSubmit = async () => {
    if (!selectedFile) return;
    setStep(3);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      if (config.returnForm) {
        formData.append('returnForm', config.returnForm);
      }
      
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
         if (data.maskUrl) {
             setProcessedImage(data.maskUrl);
             // 使用后端返回的原图代理地址，确保不直接暴露 OSS
             if (data.url) setOriginalImage(data.url);
             setStep(4);
         } else {
             alert('处理成功但未返回结果图片，请稍后重试');
             setStep(2);
         }
      } else {
         alert('处理失败: ' + (data.error || '未知错误'));
         setStep(2);
      }
    } catch (e) {
       console.error(e);
       alert('网络请求失败');
       setStep(2);
    }
  };

  return (
    <div className="w-full font-sans text-slate-900">
      <div className="mx-auto">

        {/* 主交互区 - 卡片风格优化 */}
        <div className="bg-white rounded-[32px] shadow-2xl shadow-indigo-100/50 overflow-hidden border border-slate-100/50 relative">
          
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

          {/* 步骤 1: 上传图片 */}
          {step === 1 && (
            <div className="p-8 md:p-16 text-center">
              <label className="group relative block w-full aspect-[2/1] max-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-indigo-100 hover:border-indigo-400 bg-slate-50/50 hover:bg-indigo-50/10 transition-all duration-300 rounded-[24px] cursor-pointer overflow-hidden">
                <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg shadow-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                        <path d="M12 12v9"></path>
                        <path d="m16 16-4-4-4 4"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">点击或拖拽上传图片</h3>
                    <p className="text-slate-400 text-sm">支持 PNG, JPG, WEBP (最大 10MB)</p>
                </div>
                
                {/* 悬停时的光效 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/0 via-indigo-50/0 to-indigo-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </label>
            </div>
          )}

          {/* 步骤 2 & 3: 配置与展示 */}
          {(step === 2 || step === 3) && (
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* 左侧预览 */}
              <div className="lg:w-2/3 p-6 md:p-8 bg-slate-50/50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="relative w-full h-full flex items-center justify-center">
                   {originalImage && (
                       <img src={originalImage} alt="Original" className="max-w-full max-h-[450px] object-contain rounded-2xl shadow-lg border border-white" />
                   )}
                   
                   {/* 处理中的遮罩 */}
                   {step === 3 && (
                     <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10">
                        <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                        <p className="font-bold text-indigo-900 tracking-widest animate-pulse">AI 正在处理中...</p>
                     </div>
                   )}
                </div>
              </div>

              {/* 右侧配置面板 */}
              <div className="lg:w-1/3 p-6 md:p-8 flex flex-col">
                <div className="flex-1 space-y-8">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">分割模式</h4>
                        <div className="space-y-3">
                            <div onClick={() => setConfig({...config, type:'common'})} className={`group p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${config.type === 'common' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50'}`}>
                            <div>
                                <p className={`font-bold transition-colors ${config.type === 'common' ? 'text-indigo-900' : 'text-slate-700'}`}>通用分割</p>
                                <p className="text-xs text-slate-500 mt-0.5">适合人物、商品、动植物</p>
                            </div>
                            <IconSelect active={config.type === 'common'} />
                            </div>
                            
                            <div onClick={() => setConfig({...config, type:'hd'})} className={`group p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${config.type === 'hd' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50'}`}>
                            <div>
                                <p className={`font-bold transition-colors ${config.type === 'hd' ? 'text-indigo-900' : 'text-slate-700'}`}>高清精细</p>
                                <p className="text-xs text-slate-500 mt-0.5">发丝级细节，支持大图</p>
                            </div>
                            <IconSelect active={config.type === 'hd'} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">输出格式</h4>
                        <div className="relative">
                            <select 
                                value={config.returnForm}
                                onChange={(e) => setConfig({...config, returnForm: e.target.value})}
                                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                            >
                                <option value={null}>去除背景 (PNG)</option>
                                <option value="whiteBK">纯白背景 (JPG)</option>
                                <option value="mask">仅蒙版 (Mask)</option>
                                <option value="crop">剪裁 (PNG)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
                    <button 
                        onClick={handleSubmit}
                        disabled={step === 3}
                        className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                        <span>开始智能抠图</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                    </button>
                    <button onClick={() => setStep(1)} className="w-full py-3 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors">
                        重新上传图片
                    </button>
                </div>
              </div>
            </div>
          )}

          {/* 步骤 4: 结果对比 */}
          {step === 4 && (
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900">处理完成</h3>
                    <p className="text-slate-500 text-sm">拖动滑块对比效果</p>
                </div>
                <div className="flex space-x-3 w-full md:w-auto">
                  <button onClick={() => setStep(2)} className="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                    调整参数
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    <span>下载高清大图</span>
                  </button>
                </div>
              </div>

              {/* 滑动对比组件 */}
              <div 
                className="relative w-full rounded-2xl overflow-hidden border border-slate-100 shadow-inner"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #e2e8f0 25%, transparent 25%), 
                    linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #e2e8f0 75%), 
                    linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  backgroundColor: 'white'
                }}
              >
                <ReactCompareImage 
                  leftImage={originalImage || ''} 
                  rightImage={processedImage || ''} 
                  leftImageLabel="原图"
                  rightImageLabel="结果"
                  sliderLineWidth={2}
                  handleSize={40}
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}