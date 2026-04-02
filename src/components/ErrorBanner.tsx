import type { FC } from 'react';

interface ErrorBannerProps {
  message: string | null;
  onDismiss?: () => void;
}

export const ErrorBanner: FC<ErrorBannerProps> = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="w-full max-w-2xl mb-8 bg-[#93000a]/20 border-l-4 border-[#ffb4ab] p-6 rounded-xl backdrop-blur-md">
      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined text-[#ffb4ab]">error</span>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-['Space_Grotesk'] text-[#ffb4ab] text-xl tracking-tight uppercase">
            Hata
          </span>
          <p className="text-[#bccbb9] leading-relaxed">{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            aria-label="Kapat"
            className="text-[#bccbb9] hover:text-[#dce1fb] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>
    </div>
  );
};
