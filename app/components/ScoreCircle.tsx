import { useEffect, useState } from "react";

const ScoreCircle = ({ score = 75 }: { score: number }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  // حالة داخلية للتحكم في الأنيميشن
  const [progress, setProgress] = useState(0);

  // كل ما تتغير قيمة score، نحدث progress تدريجياً
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(score / 100);
    }, 100); // تأخير بسيط لبداية الحركة
    return () => clearTimeout(timeout);
  }, [score]);

  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative w-[100px] h-[100px]">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        className="transform -rotate-90"
      >
        {/* دائرة الخلفية */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* التدرج اللوني */}
        <defs>
          <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF97AD" />
            <stop offset="100%" stopColor="#5171FF" />
          </linearGradient>
        </defs>
        {/* دائرة التقدم */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="url(#grad)"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-in-out", // الحركة
          }}
        />
      </svg>

      {/* النص في الوسط */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-semibold text-sm text-white">{`${score}/100`}</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
