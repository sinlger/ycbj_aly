import React, { useState } from 'react';

// 优化后的星级图标，使用 Lucid 风格并适配应用配色
const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} transition-all duration-200 transform ${onClick ? 'cursor-pointer hover:scale-110' : ''}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function ReviewComponent() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleMouseEnter = (index: number) => setHoverRating(index);
  const handleMouseLeave = () => setHoverRating(0);
  const handleClick = (index: number) => setRating(index);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !name) return;

    setStatus('submitting');
    // 模拟提交过程
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
      setRating(0);
      setReview('');
      setName('');
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center py-8 px-4">
      <div className="bg-white/90 backdrop-blur-2xl p-8 md:p-12 rounded-[32px] shadow-2xl shadow-indigo-100/50 max-w-5xl w-full font-sans grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Info & Aggregate */}
        <div className="space-y-8">
            <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold">
                    <i className="fas fa-heart"></i>
                    <span>用户反馈</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">分享你的体验</h2>
                <p className="text-slate-500 text-lg">你的反馈是我们前进的最大动力！帮助我们做得更好。</p>
            </div>

            {/* 综合评分展示区 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-slate-900">4.7</span>
                    <div className="flex text-orange-400">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                        <StarIcon key={i} filled={i < 4} className="w-5 h-5" />
                        ))}
                    </div>
                </div>
                <p className="text-sm text-slate-500">基于 <span className="font-bold text-slate-700">1,334</span> 条真实用户评价</p>
            </div>
            
             <div className="hidden lg:block text-slate-400 text-sm">
                <p>我们会认真阅读每一条反馈，并持续优化产品体验。</p>
             </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 lg:bg-transparent rounded-2xl p-0">
          {/* 交互式评分 */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">给产品打分</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon
                  key={index}
                  filled={index <= (hoverRating || rating)}
                  className={`w-10 h-10 cursor-pointer transition-transform duration-200 ${index <= (hoverRating || rating)
                      ? 'text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)] hover:scale-110'
                      : 'text-slate-200 hover:text-slate-300'
                    }`}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          </div>

          {/* 姓名输入 */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">您的称呼</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm placeholder:text-slate-400"
              placeholder="例如：张先生"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* 评论输入 */}
          <div className="relative">
            <label className="block text-sm font-bold text-slate-700 mb-2">评论 (可选)</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm resize-none placeholder:text-slate-400"
              rows={4}
              placeholder="说说您的使用感受..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              maxLength={500}
            />
            <div className="flex justify-end mt-1">
              <span className={`text-[10px] font-medium ${review.length >= 500 ? 'text-red-500' : 'text-slate-400'}`}>
                {review.length}/500
              </span>
            </div>
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            disabled={status !== 'idle' || !rating || !name}
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-lg flex items-center justify-center space-x-2
              ${status === 'success' ? 'bg-green-500 shadow-green-200' : 'bg-slate-900 hover:bg-slate-800 shadow-slate-200'}
              ${(status !== 'idle' || !rating || !name) && status !== 'success' ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98] cursor-pointer'}
              text-white text-sm`}
          >
            {status === 'submitting' && <i className="fas fa-spinner animate-spin"></i>}
            {status === 'success' && <i className="fas fa-check-circle"></i>}
            <span>
              {status === 'idle' && '提交我的评价'}
              {status === 'submitting' && '正在发送...'}
              {status === 'success' && '提交成功！感谢分享'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
