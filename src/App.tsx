import { useEffect } from 'react';
import { useCounter } from './hooks/useCounter';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterButtons } from './components/CounterButtons';
import { ErrorBanner } from './components/ErrorBanner';
import './App.css';

function App() {
  const { count, increment, decrement, reset, loading, error, setError } = useCounter();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default for handled keys to avoid page scroll
      if (['ArrowUp', 'ArrowDown', '+', '-', 'r', 'R'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowUp':
        case '+':
          increment();
          break;
        case 'ArrowDown':
        case '-':
          decrement();
          break;
        case 'r':
        case 'R':
          reset();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [increment, decrement, reset]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c1324] flex items-center justify-center">
        <div className="text-[#dce1fb] font-['Space_Grotesk'] text-xl">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c1324] text-[#dce1fb] font-['Inter'] flex flex-col">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 bg-[#0c1324] flex justify-between items-center px-8 py-6 z-50">
        <div className="text-xl font-bold text-[#4be277] tracking-tighter font-['Space_Grotesk'] uppercase">
          KINETIC
        </div>
        <div className="flex gap-6">
          <button 
            aria-label="Geçmiş" 
            className="text-slate-400 hover:text-[#4be277] transition-colors duration-200"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button 
            aria-label="Ayarlar" 
            className="text-slate-400 hover:text-[#4be277] transition-colors duration-200"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32">
        {/* Error Banner */}
        <ErrorBanner message={error} onDismiss={() => setError(null)} />

        {/* Atmospheric Background Element */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4be277]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 w-full max-w-2xl flex flex-col">
          {/* Counter Display */}
          <CounterDisplay count={count} />

          {/* Counter Buttons */}
          <CounterButtons 
            onIncrement={increment}
            onDecrement={decrement}
            onReset={reset}
          />

          {/* Metadata/Bento Sub-details */}
          <section className="grid grid-cols-2 gap-4 mt-12">
            <div className="bg-[#151b2d] p-6 rounded-xl border-l-2 border-[#4be277]/20">
              <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#bccbb9] block mb-2">
                Son Güncelleme
              </span>
              <span className="font-['Inter'] text-sm font-medium">{new Date().toLocaleTimeString('tr-TR')}</span>
            </div>
            <div className="bg-[#151b2d] p-6 rounded-xl border-l-2 border-[#c0c7d6]/20">
              <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#bccbb9] block mb-2">
                Hedef
              </span>
              <span className="font-['Inter'] text-sm font-medium">100</span>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-[#0c1324]/60 backdrop-blur-xl shadow-[0_-40px_40px_rgba(34,197,94,0.04)] z-50">
        {/* Active Tab: Counter */}
        <a className="flex flex-col items-center justify-center text-[#4be277] bg-[#23293c] rounded-xl px-4 py-2 scale-98 transition-all" href="#">
          <span className="material-symbols-outlined mb-1">plus_one</span>
          <span className="font-['Inter'] text-[10px] font-medium tracking-wide uppercase">Sayaç</span>
        </a>
        {/* Inactive Tab: Logs */}
        <a className="flex flex-col items-center justify-center text-slate-500 px-4 py-2 hover:bg-[#23293c] transition-all duration-150" href="#">
          <span className="material-symbols-outlined mb-1">format_list_bulleted</span>
          <span className="font-['Inter'] text-[10px] font-medium tracking-wide uppercase">Kayıtlar</span>
        </a>
        {/* Inactive Tab: Analytics */}
        <a className="flex flex-col items-center justify-center text-slate-500 px-4 py-2 hover:bg-[#23293c] transition-all duration-150" href="#">
          <span className="material-symbols-outlined mb-1">query_stats</span>
          <span className="font-['Inter'] text-[10px] font-medium tracking-wide uppercase">Analiz</span>
        </a>
      </nav>

      {/* Decorative Canvas Elements */}
      <div className="fixed top-1/4 -right-20 w-64 h-64 bg-[#4be277]/5 rounded-full blur-[80px] -z-10"></div>
      <div className="fixed bottom-1/4 -left-20 w-48 h-48 bg-[#ffb4ab]/5 rounded-full blur-[60px] -z-10"></div>
    </div>
  );
}

export default App;
