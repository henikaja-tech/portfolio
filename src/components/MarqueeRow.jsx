export default function MarqueeRow({ items, direction }) {
  // Le contenu est dupliqué pour permettre une boucle de défilement continue.
  const doubled = [...items, ...items];
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="marquee-mask mb-5 w-full overflow-hidden last:mb-0">
      <div
        className={`flex w-max gap-5 ${animationClass} [animation-play-state:running] hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, i) => (
          <div key={`${item.label}-${i}`} className="flex w-[88px] flex-none flex-col items-center gap-2.5 px-2 py-1.5 transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-surface shadow-[0_6px_16px_-8px_rgba(30,41,86,.2)]">
              {item.badge ? (
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg font-display text-xs font-extrabold text-white"
                  style={{ background: item.badgeColor || 'var(--primary)' }}
                >
                  {item.badgeText || item.label}
                </span>
              ) : (
                <img src={item.icon} alt="" className="h-8 w-8 opacity-95 dark:brightness-125 dark:saturate-125" />
              )}
            </span>
            <span className="text-center text-[11.5px] font-semibold text-text-mut">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
