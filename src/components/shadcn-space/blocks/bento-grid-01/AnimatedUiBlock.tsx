"use client";
import { motion } from "motion/react";
import {
  BrainCircuit,
  Bot,
  MessageSquareCode,
  Cpu,
  FlaskConical,
  ScanSearch,
  Workflow,
} from "lucide-react";

export default function AiSkillsBlock() {
  return (
    <div className="min-h-[216px] flex items-center justify-center relative">
      {/* Centro — ícone principal de AI */}
      <span className="flex items-center justify-center rounded-full bg-background shadow-lg lg:size-20 size-14">
        <BrainCircuit className="text-foreground lg:size-10 size-7" />
      </span>

      {/* Ícones orbitando — direita */}
      <motion.div
        className="absolute start-[70%] top-0 z-10"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      >
        <span
          aria-label="LLMs / Chatbots"
          className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background border border-border shadow-sm"
        >
          <Bot className="lg:size-8 size-5" />
        </span>
      </motion.div>

      <motion.div
        className="absolute start-[91%] top-[28%] z-10"
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      >
        <span
          aria-label="Prompting / RAG"
          className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background border border-border shadow-sm"
        >
          <MessageSquareCode className="lg:size-6 size-4" />
        </span>
      </motion.div>

      <motion.div
        className="absolute start-[78%] top-[61%] z-10"
        animate={{ y: [-15, 15, -15] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      >
        <span
          aria-label="Modelos / Embeddings"
          className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background border border-border shadow-sm"
        >
          <Cpu className="lg:size-8 size-5" />
        </span>
      </motion.div>

      {/* Ícones orbitando — esquerda */}
      <motion.div
        className="absolute end-[78%] top-0"
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      >
        <span
          aria-label="Automação de workflows"
          className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background border border-border shadow-sm"
        >
          <Workflow className="lg:size-6 size-4" />
        </span>
      </motion.div>

      <motion.div
        className="absolute end-[67%] lg:top-[61%] top-[80%] z-10"
        animate={{ y: [-15, 15, -15] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.2,
        }}
      >
        <span
          aria-label="Experimentação / Fine-tuning"
          className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background border border-border shadow-sm"
        >
          <FlaskConical className="lg:size-8 size-5" />
        </span>
      </motion.div>

      <motion.div
        className="absolute lg:end-[98%] end-[80%] lg:top-0 top-[30%]"
        animate={{ y: [15, -15, 15] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <span
          aria-label="Análise semântica / NLP"
          className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background border border-border shadow-sm"
        >
          <ScanSearch className="lg:size-8 size-5" />
        </span>
      </motion.div>
    </div>
  );
}
