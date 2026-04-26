import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-white mb-2">Gabriele.</p>
        <p className="text-brand-blue-gray text-xs tracking-[0.2em] uppercase mb-8">
          Comunicação e Marketing
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-light-blue text-sm hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-light-blue text-sm hover:text-white transition-colors"
          >
            TikTok
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-light-blue text-sm hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-brand-medium-navy text-xs">
          &copy; 2026 Gabriele Ayres. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
