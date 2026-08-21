import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../motionVariants';

const PILLS = ['Linux Server', 'Cisco & GNS3', 'C#', 'PHP / Laravel', 'Vue.js'];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1140px] px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9">
      <motion.div
        className="mb-9 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="inline-block font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-extrabold">
          Qui{' '}
          <span className="relative text-cyan after:absolute after:-bottom-1.5 after:left-0 after:h-[3px] after:w-full after:rounded-[3px] after:bg-gradient-to-r after:from-cyan after:to-primary">
            suis-je ?
          </span>
        </h2>
      </motion.div>

      <div className="flex flex-col items-center gap-16 py-2 pb-2 md:flex-row">
        <motion.div
          className="relative aspect-[846/631] w-full flex-none overflow-hidden rounded-[20px] border border-border bg-gradient-to-br from-[#101826] to-[#1c3355] shadow-card md:max-w-[440px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src="/images/about-photo.png"
            alt="Henikaja David Andrianirina"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-4 right-4 z-[2] rounded-[14px] bg-surface px-5 py-3.5 text-center shadow-card">
            <div className="font-display text-[22px] font-extrabold text-primary">L2</div>
            <div className="mt-0.5 text-xs text-text-mut">Étudiant ENI Fianarantsoa</div>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 flex-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3 className="mb-4 font-display text-[22px] font-bold">
            Administrateur Réseaux · Développeur <span className="font-semibold text-cyan">Full-Stack</span>
          </h3>

          <p className="mb-5 text-[15.5px] text-text-mut">
            Je suis <strong className="text-text">Henikaja David ANDRIANIRINA</strong>, étudiant en Licence 2
            Réseaux &amp; Systèmes à l'ENI Fianarantsoa, avec un profil{' '}
            <span className="font-semibold text-cyan">Administrateur Réseaux · Développeur Full-Stack</span>. Je
            conçois des infrastructures réseau fiables (câblage, adressage, routage, serveurs Linux) et je développe
            des applications web complètes, du câblage jusqu'à l'interface utilisateur.
          </p>

          <p className="mb-5 text-[15.5px] text-text-mut">
            Une formation de deux mois chez <strong className="text-text">Spray Info</strong> (Fianarantsoa) m'a
            permis de mettre en place des services complets — DNS, DHCP, FTP, Samba, pfSense — sur Ubuntu Server,
            ainsi que l'Active Directory sur Windows Server. J'applique la même rigueur au développement —{' '}
            <strong className="text-text">PHP, Laravel, Vue.js, C#</strong> — en construisant des applications
            pensées pour des usages réels : gestion de location, réservation, suivi de stock.
          </p>

          <p className="mb-5 text-[15.5px] text-text-mut">
            Aujourd'hui je cherche des projets où ces deux compétences se rejoignent : déployer une application{' '}
            <em>et</em> l'infrastructure qui la fait tenir.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
            {PILLS.map((p) => (
              <span
                key={p}
                className="rounded-[10px] bg-text px-[18px] py-2.5 text-[13px] font-semibold text-bg dark:bg-surface-2 dark:border dark:border-border dark:text-text"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3.5 md:justify-start">
            <motion.a
              whileHover={{ y: -2 }}
              href="#contact"
              className="rounded-[9px] bg-cyan px-5 py-3 text-[13.5px] font-bold text-white"
            >
              Me contacter
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#formations"
              className="rounded-[9px] border-[1.5px] border-cyan px-5 py-3 text-[13.5px] font-bold text-cyan transition hover:bg-cyan hover:text-white"
            >
              Mes formations
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
