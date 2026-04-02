import { useCounter } from './hooks/useCounter';
import './App.css';

function App() {
  const { count, increment, decrement, reset, loading, error } = useCounter();

  if (loading) {
    return (
<<<<<<< Updated upstream
      <div className="min-h-screen flex items-center justify-center bg-[#0c1324]">
        <div className="text-[#dce1fb] font-['Inter']">Yükleniyor...</div>
=======
      <div className="min-h-screen bg-[#0c1324] flex items-center justify-center">
        <div className="text-[#dce1fb] font-['Space_Grotesk'] text-xl">Yükleniyor...</div>
>>>>>>> Stashed changes
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c1324] text-[#dce1fb] font-['Inter'] flex flex-col">
<<<<<<< Updated upstream
      {/* Header */}
=======
      {/* TopAppBar */}
>>>>>>> Stashed changes
      <header className="w-full sticky top-0 bg-[#0c1324] flex justify-between items-center px-8 py-6 z-50">
        <div className="text-xl font-bold text-[#4be277] tracking-tighter font-['Space_Grotesk'] uppercase">
          KINETIC
        </div>
        <div className="flex gap-6">
          <button 
<<<<<<< Updated upstream
            aria-label="Geçmiş"
            className="text-[#bccbb9] hover:text-[#4be277] transition-colors duration-200"
=======
            aria-label="Geçmiş" 
            className="text-slate-400 hover:text-[#4be277] transition-colors duration-200"
>>>>>>> Stashed changes
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button 
<<<<<<< Updated upstream
            aria-label="Ayarlar"
            className="text-[#bccbb9] hover:text-[#4be277] transition-colors duration-200"
=======
            aria-label="Ayarlar" 
            className="text-slate-400 hover:text-[#4be277] transition-colors duration-200"
>>>>>>> Stashed changes
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

<<<<<<< Updated upstream
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32">
        {/* Atmospheric Background */}
=======
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32">
        {/* Error Banner */}
        {error && (
          <div className="w-full max-w-2xl mb-8 bg-[#93000a]/20 border-l-4 border-[#ffb4ab] p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#ffb4ab]">error</span>
              <div className="flex flex-col gap-1">
                <span className="font-['Space_Grotesk'] text-[#ffb4ab] text-xl tracking-tight uppercase">
                  Hata
                </span>
                <p className="text-[#bccbb9] leading-relaxed">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Atmospheric Background Element */}
>>>>>>> Stashed changes
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4be277]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 w-full max-w-2xl flex flex-col">
          {/* Counter Section */}
<<<<<<< Updated upstream
          <section className="flex flex-col items-center mb-16 px-4">
=======
          <section className="flex flex-col items-start md:items-center mb-16 px-4">
>>>>>>> Stashed changes
            <span className="font-['Inter'] text-xs tracking-[0.2em] uppercase text-[#bccbb9] mb-4">
              Mevcut Değer
            </span>
            <div className="font-['Space_Grotesk'] text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter text-[#dce1fb] transition-all duration-300">
              {count}
            </div>
            <div className="h-1 w-24 bg-[#22c55e]/20 mt-4 rounded-full"></div>
          </section>

<<<<<<< Updated upstream
          {/* Error Display */}
          {error && (
            <div className="mb-8 p-4 bg-[#93000a]/20 border-l-4 border-[#ffb4ab] rounded-xl">
              <div className="flex items-center gap-2 text-[#ffb4ab]">
                <span className="material-symbols-outlined">error</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Control Panel */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {/* Increase Button */}
=======
          {/* Control Panel */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {/* Increase Button (The Hero Action) */}
>>>>>>> Stashed changes
            <button
              onClick={increment}
              aria-label="Arttır"
              className="md:col-span-3 h-24 bg-gradient-to-br from-[#4be277] to-[#22c55e] text-[#003915] rounded-xl flex items-center justify-between px-8 group active:scale-95 duration-150 shadow-lg shadow-[#4be277]/10"
            >
              <div className="flex flex-col items-start">
<<<<<<< Updated upstream
                <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Eylem
                </span>
                <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">
                  ARTTIR
                </span>
=======
                <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest opacity-80">Eylem</span>
                <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">ARTTIR</span>
>>>>>>> Stashed changes
              </div>
              <span className="material-symbols-outlined text-4xl">add_circle</span>
            </button>

            {/* Decrease Button */}
            <button
              onClick={decrement}
              aria-label="Azalt"
              className="h-24 bg-[#93000a] text-[#ffb4ab] rounded-xl flex flex-col items-center justify-center group active:scale-95 duration-150"
            >
              <span className="material-symbols-outlined text-3xl mb-1">remove_circle</span>
<<<<<<< Updated upstream
              <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-tighter">
                AZALT
              </span>
=======
              <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-tighter">AZALT</span>
>>>>>>> Stashed changes
            </button>

            {/* Reset Button */}
            <button
              onClick={reset}
              aria-label="Sıfırla"
<<<<<<< Updated upstream
              className="md:col-span-4 h-16 bg-[#23293c] hover:bg-[#33394c] text-[#aeb5c5] rounded-xl flex items-center justify-center gap-3 transition-all duration-200 active:scale-98"
            >
              <span className="material-symbols-outlined text-xl">restart_alt</span>
              <span className="font-['Inter'] text-xs font-bold uppercase tracking-widest">
                SIFIRLA
              </span>
            </button>
          </section>

          {/* Metadata */}
=======
              className="md:col-span-4 h-16 bg-[#23293c] hover:bg-[#33394c] text-[#aeb5c5] rounded-xl flex items-center justify-center gap-3 transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">restart_alt</span>
              <span className="font-['Inter'] text-xs font-bold uppercase tracking-widest">SIFIRLA</span>
            </button>
          </section>

          {/* Metadata/Bento Sub-details */}
>>>>>>> Stashed changes
          <section className="grid grid-cols-2 gap-4 mt-12">
            <div className="bg-[#151b2d] p-6 rounded-xl border-l-2 border-[#4be277]/20">
              <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#bccbb9] block mb-2">
                Son Güncelleme
              </span>
<<<<<<< Updated upstream
              <span className="font-['Inter'] text-sm font-medium">
                {new Date().toLocaleDateString('tr-TR')}
              </span>
=======
              <span className="font-['Inter'] text-sm font-medium">{new Date().toLocaleTimeString('tr-TR')}</span>
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-[#0c1324]/60 backdrop-blur-xl shadow-[0_-40px_40px_rgba(34,197,94,0.04)] z-50">
        <a className="flex flex-col items-center justify-center text-[#4be277] bg-[#23293c] rounded-xl px-4 py-2 scale-98 transition-all" href="#">
          <span className="material-symbols-outlined mb-1">plus_one</span>
          <span className="font-['Inter'] text-[10px] font-medium tracking-wide uppercase">Counter</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#bccbb9] px-4 py-2 hover:bg-[#23293c] transition-all duration-150" href="#">
          <span className="material-symbols-outlined mb-1">format_list_bulleted</span>
          <span className="font-['Inter'] text-[10px] font-medium tracking-wide uppercase">Logs</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#bccbb9] px-4 py-2 hover:bg-[#23293c] transition-all duration-150" href="#">
          <span className="material-symbols-outlined mb-1">query_stats</span>
          <span className="font-['Inter'] text-[10px] font-medium tracking-wide uppercase">Analytics</span>
        </a>
      </nav>

      {/* Decorative Elements */}
=======
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
>>>>>>> Stashed changes
      <div className="fixed top-1/4 -right-20 w-64 h-64 bg-[#4be277]/5 rounded-full blur-[80px] -z-10"></div>
      <div className="fixed bottom-1/4 -left-20 w-48 h-48 bg-[#ffb4ab]/5 rounded-full blur-[60px] -z-10"></div>
    </div>
  );
}

export default App;
