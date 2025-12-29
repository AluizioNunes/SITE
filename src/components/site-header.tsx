"use client";

import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Serviços", href: "#servicos" },
      { label: "Soluções", href: "#plataforma" },
      { label: "Stack", href: "#stack" },
      { label: "Casos", href: "#cases" },
      { label: "Contato", href: "#contato" },
    ],
    [],
  );

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-card-border bg-background/40 backdrop-blur">
      <div className="flex w-full items-center justify-between px-[clamp(1.25rem,4vw,4rem)] py-4">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="uppercase tracking-wide hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Falar com especialista
          </a>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-card-border bg-card px-5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            LOGAR
          </Link>
          <ThemeToggle />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-foreground backdrop-blur md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            <div className="absolute inset-x-0 top-full border-b border-card-border bg-background/80 backdrop-blur">
              <div className="px-[clamp(1.25rem,4vw,4rem)] pb-6 pt-4">
                <div className="grid gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-card-border bg-card px-4 py-3 text-sm font-semibold text-foreground backdrop-blur"
                    >
                      <span className="uppercase tracking-wide">{item.label}</span>
                    </a>
                  ))}
                  <a
                    href="#contato"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background"
                  >
                    Falar com especialista
                  </a>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="flex-1 inline-flex h-11 items-center justify-center rounded-full border border-card-border bg-card px-6 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      LOGAR
                    </Link>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
