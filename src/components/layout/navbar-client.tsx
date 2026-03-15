"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, useInView } from "motion/react";
import Logo from "@/assets/logo/logo";

// ─── Social links ────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aridanpantoja",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/aridanpantoja",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/aridanpantoja",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
] as const;

// ─── Types ───────────────────────────────────────────────────────────────────
type NavItem = {
  name: string;
  href: string;
};

type NavbarClientProps = {
  navData: NavItem[];
};

// ─── NavLink (sidebar) ───────────────────────────────────────────────────────
const NavLink: React.FC<{ item: NavItem }> = ({ item }) => (
  <li className="flex items-center group w-fit cursor-pointer">
    <div className="h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-6 group-hover:mr-4" />
    <a
      href={item.href}
      className="text-2xl font-medium transition-colors text-muted-foreground group-hover:text-primary"
    >
      {item.name}
    </a>
  </li>
);

// ─── Main component ──────────────────────────────────────────────────────────
export const NavbarClient: React.FC<NavbarClientProps> = ({ navData }) => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.1 });

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="z-50 w-full bg-transparent h-20 fixed top-0 flex items-center"
    >
      <nav className="max-w-7xl mx-auto sm:px-16 px-4 w-full">
        <div
          className={cn(
            "flex items-center justify-between duration-300 transition-all",
            sticky
              ? "shadow-lg bg-background rounded-full p-3"
              : "shadow-none px-0",
          )}
        >
          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Início"
            className={cn(
              "transition-all duration-300",
              // When not sticky, the navbar sits over dark hero images — invert
              // the logo so it appears white. When sticky the bg-background is
              // light/dark-aware so we let the logo's own dark: classes handle it.
              !sticky && "invert dark:invert-0",
            )}
          >
            <Logo />
          </Link>

          {/* ── Right actions ────────────────────────────────────────────── */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Social icon buttons */}
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "hidden sm:flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300",
                  sticky
                    ? "text-foreground border-border hover:bg-muted"
                    : "text-white border-white/60 hover:bg-white/10",
                )}
              >
                {social.icon}
              </a>
            ))}

            {/* Menu button */}
            <Button
              size="lg"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={cn(
                "flex items-center gap-3 px-5 py-2.5 rounded-full cursor-pointer border text-sm font-medium h-auto transition-all duration-300",
                sticky
                  ? "text-foreground bg-background hover:bg-muted border-border"
                  : "text-black bg-white hover:bg-white/80 border-white",
              )}
              aria-label="Abrir menu"
            >
              <Menu size={16} />
              Menu
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Sidebar sheet ──────────────────────────────────────────────────── */}
      <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="bg-background p-6 overflow-auto border-none flex flex-col gap-10"
        >
          {/* Close button */}
          <SheetHeader>
            <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
            <SheetClose className="absolute top-4 right-4 rounded-full dark:bg-white bg-black dark:text-black text-white p-2 cursor-pointer">
              <X size={24} />
            </SheetClose>
          </SheetHeader>

          {/* Pages */}
          <nav>
            <ul className="flex flex-col gap-4">
              {navData?.map((item, index) => (
                <SheetClose key={index} className="w-fit">
                  <NavLink item={item} />
                </SheetClose>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-normal text-muted-foreground uppercase tracking-widest">
              Contato
            </p>
            <a
              href="mailto:contato@aridan.dev"
              className="text-base font-medium hover:text-primary transition-colors"
            >
              contato@aridan.dev
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-normal text-muted-foreground uppercase tracking-widest">
              Redes sociais
            </p>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors w-fit group"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
};
