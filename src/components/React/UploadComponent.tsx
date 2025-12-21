import React, { useState } from 'react';

export default function UploadComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-xl shadow-lg bg-white max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">AI 智能抠图</h2>
      
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">选择图片上传</label>
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">点击上传</span> 或拖拽图片到此处</p>
              <p className="text-xs text-gray-500">PNG, JPG, JPEG (最大 10MB)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
        {file && <p className="mt-2 text-sm text-green-600 text-center">已选择: {file.name}</p>}
      </div>

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            AI 处理中...
          </span>
        ) : '开始处理'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6 animate-fade-in">
          <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100 flex items-center justify-between">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              处理成功！
            </span>
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">ID: {result.requestId}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>原始图片
              </p>
              <div className="relative group overflow-hidden rounded-lg border border-gray-200 shadow-sm aspect-square bg-gray-50 flex items-center justify-center">
                <img 
                  src={result.url} 
                  alt="Original" 
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI 抠图结果
              </p>
              {result.maskUrl ? (
                <div className="relative group overflow-hidden rounded-lg border border-gray-200 shadow-sm aspect-square bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5+3d2U0AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAIGh0Uk5DAKdPcI9K0X7N5uD6zR0I2P3i8Xw06vzz8e/s5uPj497Q9YkAAAAhSURBVAjXY2CgJmBiYGBgYWBgAmIGBnCMygwM5GAiCCAAAP1AAgEwS8qJAAAAAElFTkSuQmCC')] flex items-center justify-center">
                  <img 
                    src={result.maskUrl} 
                    alt="Segmented" 
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <a 
                    href={result.maskUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-gray-800 text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    下载
                  </a>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border rounded-lg h-full aspect-square bg-gray-50 text-gray-400 text-sm p-4">
                  <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  <span>未生成抠图</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
