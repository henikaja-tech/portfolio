import { useEffect, useState } from 'react';

/**
 * Ré-implémente l'effet machine à écrire de Typed.js avec les mêmes
 * réglages exacts que la version vanilla JS :
 * typeSpeed: 60, backSpeed: 40, backDelay: 2000, startDelay: 500, loop: true.
 */
export function useTypewriter(strings, options = {}) {
  const {
    typeSpeed = 60,
    backSpeed = 40,
    backDelay = 2000,
    startDelay = 500,
    loop = true,
  } = options;

  const [text, setText] = useState('');

  useEffect(() => {
    let stringIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const current = strings[stringIndex];

      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, backDelay);
          return;
        }
        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
          if (!loop && stringIndex === 0) return;
        }
        timeoutId = setTimeout(tick, backSpeed);
      }
    };

    timeoutId = setTimeout(tick, startDelay);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strings]);

  return text;
}
