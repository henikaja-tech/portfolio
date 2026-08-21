import * as Lucide from 'lucide-react';

function HeaderIcon({ card }) {
  if (card.headerType === 'text') {
    return (
      <span
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] font-display text-[13px] font-extrabold text-white"
        style={{ background: card.headerBg, boxShadow: `0 4px 10px -2px ${card.headerBg}80` }}
      >
        {card.headerText}
      </span>
    );
  }
  if (card.headerType === 'icon-filled') {
    return (
      <span
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px]"
        style={{ background: card.headerBg, boxShadow: `0 4px 10px -2px ${card.headerBg}80` }}
      >
        <img src={card.headerIcon} alt="" className="h-[18px] w-[18px]" />
      </span>
    );
  }
  if (card.headerType === 'lucide') {
    const Icon = Lucide[card.lucideIcon];
    return (
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
        <Icon size={26} color={card.lucideColor} />
      </span>
    );
  }
  // icon-flat
  return (
    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
      <img src={card.headerIcon} alt="" className="h-[34px] w-auto" />
    </span>
  );
}

function Tag({ tag, theme }) {
  const Icon = tag.lucideIcon ? Lucide[tag.lucideIcon] : null;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-2xl border px-3 py-[5px] text-xs font-medium transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_-4px_rgba(30,41,86,.28)]"
      style={{ background: theme.bg, borderColor: theme.border, color: theme.text }}
    >
      {tag.icon && <img src={tag.icon} alt="" className="h-[15px] w-[15px] flex-shrink-0" />}
      {Icon && <Icon size={15} className="flex-shrink-0" />}
      {tag.label}
    </span>
  );
}

export default function DomainCard({ card, isDark }) {
  const theme = isDark ? card.theme.dark : card.theme.light;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#f1f5f9] bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,.04)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,.15)] dark:border-[#263049] dark:bg-[#141b2d] dark:shadow-[0_10px_34px_-10px_rgba(0,0,0,.55)]">
      <div className="flex items-center gap-3 border-b border-[#f1f5f9] px-3.5 py-4 dark:border-[#263049]">
        <HeaderIcon card={card} />
        <h5 className="text-sm font-semibold leading-tight text-[#0f172a] dark:text-[#f1f5f9]">{card.title}</h5>
      </div>
      <div className="flex flex-grow flex-wrap content-start gap-x-2 gap-y-1.5 px-3.5 py-4">
        {card.tags.map((t) => (
          <Tag key={t.label} tag={t} theme={theme} />
        ))}
      </div>
    </div>
  );
}
