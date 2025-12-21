import React from 'react';
import ReactCompareImage from 'react-compare-image';

interface ImageComparisonProps {
  leftImage?: string;
  rightImage?: string;
  className?: string;
}

export default function ImageComparison({
  leftImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  rightImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", // Using same image as placeholder, normally this would be the processed version
  className = ""
}: ImageComparisonProps) {
  return (
    <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <ReactCompareImage 
        leftImage={leftImage} 
        rightImage={rightImage}
        sliderLineWidth={2}
        handleSize={40}
        sliderLineColor="#ffffff"
      />
    </div>
  );
}
