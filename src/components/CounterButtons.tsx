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
        className="md:col-span-3 h-24 bg-gradient-to-br from-[#4be277] to-[#22c55e] text-[#003915] rounded-xl flex items-center justify-between px-8 group active:scale-95 duration-150 shadow-lg shadow-[#4be277]/10 cursor-pointer"
      >
        <div className="flex flex-col items-start">
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest opacity-80">
            Eylem
          </span>
          <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">
            ARTTIR
          </span>
        </div>
        <span className="material-symbols-outlined text-4xl">add_circle</span>
      </button>

      {/* Decrease Button */}
      <button
        onClick={onDecrement}
        aria-label="Azalt"
        className="h-24 bg-[#93000a] text-[#ffb4ab] rounded-xl flex flex-col items-center justify-center group active:scale-95 duration-150 cursor-pointer"
      >
        <span className="material-symbols-outlined text-3xl mb-1">remove_circle</span>
        <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-tighter">
          AZALT
        </span>
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        aria-label="Sıfırla"
        className="md:col-span-4 h-16 bg-[#23293c] hover:bg-[#33394c] text-[#aeb5c5] rounded-xl flex items-center justify-center gap-3 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <span className="material-symbols-outlined text-xl">restart_alt</span>
        <span className="font-['Inter'] text-xs font-bold uppercase tracking-widest">
          SIFIRLA
        </span>
      </button>
    </section>
  );
};
