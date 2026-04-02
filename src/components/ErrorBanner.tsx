import type { FC } from 'react';

interface ErrorBannerProps {
  error: string | null;
  onDismiss?: () => void;
}

export const ErrorBanner: FC<ErrorBannerProps> = ({ error, onDismiss }) => {
  if (!error) return null;

  return (
    <div className="w-full max-w-2xl mb-8 bg-error-container/20 border-l-4 border-error p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined text-error">error</span>
        <div className="flex flex-col gap-1 flex-1">
          <span className="font-headline text-error text-xl tracking-tight uppercase">
            Hata
          </span>
          <p className="text-on-surface-variant leading-relaxed">{error}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            aria-label="Kapat"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>
    </div>
  );
};
