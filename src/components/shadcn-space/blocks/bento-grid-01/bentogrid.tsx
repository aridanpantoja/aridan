import { Badge } from "@/components/ui/badge";
import FrontendSkillsCarousel from "@/components/shadcn-space/blocks/bento-grid-01/ReminderAnimation";
import AiSkillsBlock from "@/components/shadcn-space/blocks/bento-grid-01/AnimatedUiBlock";
import {
  ClipboardCheck,
  Bug,
  Microscope,
  Layers,
  Figma,
  PenTool,
  Lightbulb,
  Users,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

// ─── Static skill cards ───────────────────────────────────────────────────────

const TestingCard = () => (
  <div className="rounded-xl border border-border h-full flex flex-col">
    <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: ClipboardCheck, label: "Unit Tests" },
          { icon: Layers, label: "Integration" },
          { icon: Microscope, label: "E2E" },
          { icon: Bug, label: "Debugging" },
          { icon: TrendingUp, label: "Coverage" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-1.5 bg-background border border-border rounded-xl p-3"
          >
            <Icon size={22} className="text-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">
              {label}
            </span>
          </div>
        ))}
        {/* célula vazia para completar o grid */}
        <div className="col-span-1" />
      </div>
    </div>
    <div className="flex flex-col gap-0.5 p-8 border-t border-border">
      <h3 className="text-xl font-medium text-foreground">
        Testes & Qualidade
      </h3>
      <p className="text-base font-normal text-muted-foreground">
        Cobertura de testes unitários, de integração e E2E com Jest, Vitest,
        Testing Library e Playwright.
      </p>
    </div>
  </div>
);

const DesignCard = () => (
  <div className="rounded-xl border border-border h-full flex flex-col">
    <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-4">
          {[Figma, PenTool, Layers].map((Icon, i) => (
            <span
              key={i}
              className="flex items-center justify-center bg-background border border-border rounded-full size-14 shadow-sm"
            >
              <Icon size={24} className="text-foreground" />
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {["#0F172A", "#6366F1", "#F8FAFC", "#E2E8F0", "#4F46E5"].map(
            (color) => (
              <span
                key={color}
                className="size-7 rounded-full border border-border shadow-sm"
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            ),
          )}
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-0.5 p-8 border-t border-border">
      <h3 className="text-xl font-medium text-foreground">Design & UI/UX</h3>
      <p className="text-base font-normal text-muted-foreground">
        Prototipagem no Figma, sistemas de design, tokens de cor e colaboração
        direta com times de produto.
      </p>
    </div>
  </div>
);

const SoftSkillsCard = () => (
  <div className="rounded-xl border border-border h-full flex flex-col">
    <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
      <div className="flex flex-col gap-3 w-full max-w-[200px]">
        {[
          { icon: Lightbulb, label: "Resolução de problemas" },
          { icon: Users, label: "Trabalho em equipe" },
          { icon: MessageCircle, label: "Comunicação clara" },
          { icon: TrendingUp, label: "Aprendizado contínuo" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 bg-background border border-border rounded-lg px-4 py-2.5"
          >
            <Icon size={16} className="text-muted-foreground shrink-0" />
            <span className="text-xs font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-0.5 p-8 border-t border-border">
      <h3 className="text-xl font-medium text-foreground">Soft Skills</h3>
      <p className="text-base font-normal text-muted-foreground">
        Comunicação técnica, colaboração ágil, ownership e mentalidade de
        crescimento constante.
      </p>
    </div>
  </div>
);

// ─── Main bento grid ──────────────────────────────────────────────────────────

const Bentogrid = () => {
  return (
    <section>
      <div className="py-11 md:py-20">
        <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="px-3 py-1 h-auto text-sm font-normal"
            >
              Habilidades
            </Badge>
            <h2 className="text-center md:text-5xl text-3xl mx-auto font-medium">
              Uma stack ampla, do pixel ao modelo
            </h2>
            <p className="text-center text-muted-foreground text-base">
              Combino engenharia de software sólida com design de interfaces e
              inteligência artificial para entregar produtos completos.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-5">
            {/* Card 1 — Frontend (col 4) */}
            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border h-full flex flex-col">
                <div className="bg-muted rounded-t-xl py-8 px-9 relative">
                  <FrontendSkillsCarousel />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Frontend & Mobile
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Interfaces modernas com React, Next.js, TypeScript e
                    Tailwind — do web ao mobile com React Native.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 — AI (col 8) */}
            <div className="lg:col-span-8 col-span-12 overflow-hidden">
              <div className="rounded-xl border border-border h-full flex flex-col">
                <div className="bg-muted rounded-t-xl py-7 lg:px-30 px-6 relative flex-1">
                  <AiSkillsBlock />
                </div>
                <div className="flex flex-col gap-0.5 p-8 border-t border-border">
                  <h3 className="text-xl font-medium text-foreground">
                    Inteligência Artificial
                  </h3>
                  <p className="text-base font-normal text-muted-foreground">
                    Integração de LLMs, pipelines RAG, automação com agentes e
                    experimentação com modelos de linguagem aplicados a produtos
                    reais.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 — Testes (col 4) */}
            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <TestingCard />
            </div>

            {/* Card 4 — Design (col 4) */}
            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <DesignCard />
            </div>

            {/* Card 5 — Soft Skills (col 4) */}
            <div className="lg:col-span-4 col-span-12 overflow-hidden">
              <SoftSkillsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
