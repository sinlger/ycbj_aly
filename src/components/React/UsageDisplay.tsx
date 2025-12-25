import React, { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default function UsageDisplay() {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();

        const res = await fetch('/api/usage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ visitorId }),
        });

        const data = await res.json();
        if (data.success) {
          setRemaining(data.remaining_count);
        }
      } catch (error) {
        console.error('Failed to fetch usage:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsage();

    // 监听使用次数更新事件
    const handleUsageUpdated = () => {
      fetchUsage();
    };

    window.addEventListener('usage-updated', handleUsageUpdated);

    return () => {
      window.removeEventListener('usage-updated', handleUsageUpdated);
    };
  }, []);

  if (loading) {
    return (
      <span className="inline-flex items-center bg-white/50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600">
        <span className="w-2 h-2 bg-slate-300 rounded-full mr-2 animate-pulse"></span>
        加载中...
      </span>
    );
  }

  return (
    <span className="hidden sm:inline-flex items-center bg-white/50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600">
      <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${remaining && remaining > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
      今日剩余: {remaining !== null ? remaining : '-'} 次
    </span>
  );
}
