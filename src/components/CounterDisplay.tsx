import type { FC } from 'react';

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: FC<CounterDisplayProps> = ({ count }) => {
  return (
    <section className="flex flex-col items-start md:items-center mb-16 px-4">
      <span className="font-label text-xs tracking-[0.2em] uppercase text-[#bccbb9] mb-4">
        Mevcut Değer
      </span>
      <div 
        className="font-['Space_Grotesk'] text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter text-[#dce1fb] transition-all duration-300"
        data-testid="counter-display"
      >
        {count}
      </div>
      <div className="h-1 w-24 bg-[#22c55e]/20 mt-4 rounded-full"></div>
    </section>
  );
};
