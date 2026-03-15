import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram, Github } from "lucide-react";

type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Navegação",
    links: [
      { title: "Início", href: "#" },
      { title: "Sobre", href: "#sobre" },
      { title: "Projetos", href: "#projetos" },
      { title: "Habilidades", href: "#habilidades" },
      { title: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Redes sociais",
    links: [
      { title: "LinkedIn", href: "https://linkedin.com/in/aridanpantoja" },
      { title: "GitHub", href: "https://github.com/aridanpantoja" },
      { title: "Instagram", href: "https://instagram.com/aridanpantoja" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            {/* Brand column */}
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <a href="/" aria-label="Início">
                  <Logo />
                </a>

                <p className="text-base font-normal text-muted-foreground max-w-xs">
                  Software engineer apaixonado por criar produtos que unem
                  design cuidadoso, código de qualidade e inteligência
                  artificial.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/aridanpantoja"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/aridanpantoja"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://instagram.com/aridanpantoja"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="col-span-1 lg:block hidden" />

            {/* Nav + Socials columns */}
            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                  <p className="text-base font-medium text-foreground">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <a
                          href={href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Contact column */}
            <div className="col-span-3">
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <p className="text-base font-medium text-foreground">Contato</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="mailto:contato@aridan.dev"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contato@aridan.dev
                    </a>
                  </li>
                  <li>
                    <p className="text-base font-normal text-muted-foreground">
                      Belém, Pará — Brasil
                    </p>
                  </li>
                  <li>
                    <p className="text-base font-normal text-muted-foreground">
                      Disponível para projetos remotos
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator orientation="horizontal" />

          <p className="text-sm font-normal text-muted-foreground text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both pb-4">
            © {new Date().getFullYear()} Aridan Pantoja. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
