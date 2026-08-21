import { useEffect, useRef, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ProjectShotSlider({ images, title, shotCount }) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (images.length < 2) return undefined;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % images.length);
    }, 2800);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div
      className="relative h-[210px] overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={title}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <span className="absolute right-3.5 top-3.5 z-[3] flex items-center gap-1.5 rounded-full bg-black/80 px-3.5 py-[7px] text-xs font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,.25)]">
        <ImageIcon size={13} />
        {shotCount} captures
      </span>

      <div className="absolute bottom-2.5 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-1">
        {images.map((src, i) => (
          <button
            key={src}
            aria-label={`Capture ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-[5px] rounded-full transition-all ${
              i === index ? 'w-4 bg-green' : 'w-[5px] bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
