import type { FC } from 'react';

interface CounterButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export const CounterButtons: FC<CounterButtonsProps> = ({
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
      {/* Increase Button (The Hero Action) */}
      <button
        onClick={onIncrement}
        aria-label="Arttır"
        className="md:col-span-3 h-24 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl flex items-center justify-between px-8 group active:scale-95 duration-150 shadow-lg shadow-primary/10"
      >
        <div className="flex flex-col items-start">
          <span className="font-label text-[10px] font-bold uppercase tracking-widest opacity-80">Eylem</span>
          <span className="font-headline text-2xl font-bold tracking-tight">ARTTIR</span>
        </div>
        <span className="material-symbols-outlined text-4xl">add_circle</span>
      </button>

      {/* Decrease Button */}
      <button
        onClick={onDecrement}
        aria-label="Azalt"
        className="h-24 bg-error-container text-error rounded-xl flex flex-col items-center justify-center group active:scale-95 duration-150"
      >
        <span className="material-symbols-outlined text-3xl mb-1">remove_circle</span>
        <span className="font-label text-[10px] font-bold uppercase tracking-tighter">AZALT</span>
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        aria-label="Sıfırla"
        className="md:col-span-4 h-16 bg-surface-container-high hover:bg-surface-bright text-on-secondary-container rounded-xl flex items-center justify-center gap-3 transition-all duration-200 active:scale-98"
      >
        <span className="material-symbols-outlined text-xl">restart_alt</span>
        <span className="font-label text-xs font-bold uppercase tracking-widest">SIFIRLA</span>
      </button>
    </section>
  );
};
