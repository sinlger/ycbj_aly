import React, { useState, useEffect } from 'react';

export default function FreeTipToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // 页面加载后延迟显示
    setShouldRender(true);
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // 3秒后自动消失
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      // 等待动画结束后卸载
      setTimeout(() => setShouldRender(false), 300);
    }, 3500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed top-24 right-4 md:right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg shadow-indigo-500/10 rounded-2xl p-4 pr-12 flex items-center gap-3 min-w-[280px] relative overflow-hidden group">
        
        {/* 装饰背景 */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-transparent rounded-bl-full opacity-50 -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
        
        {/* 图标 */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>
        </div>

        {/* 内容 */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-800">温馨提示</span>
          <span className="text-xs text-slate-500 font-medium">本功能完全免费，请放心使用</span>
        </div>

        {/* 关闭按钮 */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 text-slate-300 hover:text-slate-500 transition-colors rounded-full hover:bg-slate-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        {/* 底部进度条 (可选) */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 animate-[progress_3s_linear_forwards]"></div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
