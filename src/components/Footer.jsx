const SKILLS = [
  'Réseau & Routage (Cisco, RIP/OSPF)',
  'Systèmes & Sécurité (Linux, pfSense)',
  'Développement (PHP, Vue.js, C#)',
  'Bases de données (MySQL)',
];

const CONTACT_LINES = [
  'Email : henikajaandria309@gmail.com',
  'WhatsApp : +261 38 56 501 85',
  'GitHub : henikaja-tech',
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-[50px] pb-[30px]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-6 md:px-8">
        <div className="mb-[34px] grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <h5 className="mb-3.5 font-display font-bold text-primary">Henikaja David Andrianirina</h5>
            <p className="text-[13.5px] text-text-mut">
              Administrateur réseaux &amp; développeur full-stack. Formation en réseaux, systèmes et développement
              logiciel.
            </p>
          </div>
          <div>
            <h5 className="mb-3.5 font-display font-bold text-primary">Compétences</h5>
            <ul className="flex flex-col gap-2.5">
              {SKILLS.map((s) => (
                <li key={s} className="text-[13.5px] text-text-mut">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3.5 font-display font-bold text-primary">Contactez-moi</h5>
            <ul className="flex flex-col gap-2.5">
              {CONTACT_LINES.map((s) => (
                <li key={s} className="text-[13.5px] text-text-mut">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3.5 font-display font-bold text-primary">À propos</h5>
            <p className="text-[13.5px] text-text-mut">
              Étudiant L2 Informatique Générale, passionné d'administration systèmes, de réseaux et de développement
              web.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-[26px] text-center text-[13px] text-text-faint">
          © 2026 Henikaja David Andrianirina — Portfolio Réseaux &amp; Systèmes / Développement
        </div>
      </div>
    </footer>
  );
}
