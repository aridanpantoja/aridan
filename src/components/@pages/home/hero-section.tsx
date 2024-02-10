import { Section } from '@/components/section/section'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export function HeroSection() {
  return (
    <Section enableBackground>
      <div className="flex items-center justify-center lg:justify-between">
        <div className="flex max-w-lg flex-col items-center gap-3 py-20 text-center sm:gap-4 lg:items-start lg:py-0 lg:text-start">
          <div className="block h-56 w-56 overflow-hidden rounded-full bg-primary lg:hidden">
            <Image
              src="/images/profile.webp"
              alt="Imagem de perfil de Aridan Pantoja"
              width={512}
              height={512}
              className="w-full"
              priority
            />
          </div>
          <span className="text-lg font-semibold">
            Olá 👋 Meu nome é Aridan
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-accent-foreground sm:text-5xl">
            Front-End Developer
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            Apaixonado por tecnologia, estudante de{' '}
            <strong>Engenharia de Computação</strong> e{' '}
            <strong>Redes de Computadores</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {siteConfig.socials.map((social) => (
              <Button key={social.name} asChild>
                <Link href={social.url} target="__blank">
                  <social.Icon className="mr-1 text-2xl" />
                  {social.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="hidden max-w-lg flex-1 justify-center lg:flex">
          <Image
            src="/images/profile.webp"
            alt="Imagem de perfil de Aridan Pantoja"
            width={512}
            height={512}
            className="w-full"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
