import type { FC } from 'react';

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: FC<CounterDisplayProps> = ({ count }) => {
  return (
    <section className="flex flex-col items-start md:items-center mb-16 px-4">
      <span className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
        Mevcut Değer
      </span>
      <div 
        className="font-headline text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter text-on-surface transition-all duration-300"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {count}
      </div>
      <div className="h-1 w-24 bg-primary-container/20 mt-4 rounded-full"></div>
    </section>
  );
};
