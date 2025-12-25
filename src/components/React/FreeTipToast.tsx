import React, { useState, useEffect } from 'react';

export default function FreeTipToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [message, setMessage] = useState({ title: "温馨提示", content: "本功能完全免费，请放心使用", type: "info" });

  useEffect(() => {
    // 页面加载后延迟显示默认提示
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

    // 监听全局 Toast 事件
    const handleToast = (e: CustomEvent) => {
      const { title, content, type = "info" } = e.detail;
      setMessage({ title, content, type });
      setShouldRender(true);
      setIsVisible(true);

      // 自动消失
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 300);
      }, 3500);
    };

    window.addEventListener('show-toast', handleToast as EventListener);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('show-toast', handleToast as EventListener);
    };
  }, []);

  if (!shouldRender) return null;

  const isError = message.type === 'error';

  return (
    <div 
      className={`fixed top-24 right-4 md:right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className={`backdrop-blur-md border shadow-lg rounded-2xl p-4 pr-12 flex items-center gap-3 min-w-[280px] relative overflow-hidden group ${
        isError ? 'bg-red-50/90 border-red-100 shadow-red-500/10' : 'bg-white/80 border-indigo-100 shadow-indigo-500/10'
      }`}>
        
        {/* 装饰背景 */}
        <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-50 -mr-4 -mt-4 transition-transform group-hover:scale-110 ${
          isError ? 'bg-gradient-to-br from-red-100 to-transparent' : 'bg-gradient-to-br from-indigo-100 to-transparent'
        }`}></div>
        
        {/* 图标 */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md ${
          isError ? 'bg-gradient-to-tr from-red-500 to-orange-500' : 'bg-gradient-to-tr from-indigo-500 to-purple-500'
        }`}>
          {isError ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* 内容 */}
        <div className="flex flex-col">
          <span className={`text-sm font-bold ${isError ? 'text-red-800' : 'text-slate-800'}`}>{message.title}</span>
          <span className={`text-xs font-medium ${isError ? 'text-red-500' : 'text-slate-500'}`}>{message.content}</span>
        </div>

        {/* 关闭按钮 */}
        <button 
          onClick={() => setIsVisible(false)}
          className={`absolute top-2 right-2 p-1 transition-colors rounded-full ${
            isError ? 'text-red-300 hover:text-red-500 hover:bg-red-100' : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        {/* 底部进度条 (可选) */}
        <div className={`absolute bottom-0 left-0 h-1 animate-[progress_3s_linear_forwards] ${
          isError ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
        }`}></div>
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
