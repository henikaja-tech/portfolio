import { useCallback, useEffect, useState } from 'react';

/**
 * Gère le thème clair/sombre en togglant la classe "dark" sur <html>,
 * exactement comme le faisait le bouton themeBtn dans la version vanilla JS.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);

  return { isDark, toggleTheme };
}
