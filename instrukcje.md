# 📘 Instrukcja Modernizacji Projektu RENO

**Pracownia Konserwatorska - Migracja z React (CRA) do Next.js 15**

---

## 📋 Spis Treści

1. [Analiza obecnego projektu](#1-analiza-obecnego-projektu)
2. [Nowy stack technologiczny](#2-nowy-stack-technologiczny)
3. [Architektura docelowa](#3-architektura-docelowa)
4. [Plan migracji krok po kroku](#4-plan-migracji-krok-po-kroku)
5. [Przewodnik po nowych technologiach](#5-przewodnik-po-nowych-technologiach)
6. [Checklist przed startem](#6-checklist-przed-startem)

---

## 1. Analiza obecnego projektu

### 🔍 Co mamy teraz?

**Projekt:** Strona internetowa dla pracowni konserwatorskiej
**Typ:** Single Page Application (SPA)
**Framework:** Create React App (CRA) - **przestarzały w 2025**
**Wersja:** React 18.2.0

#### Funkcjonalności:
- ✅ 9 sekcji materiałowych (Drewno, Gips, Malarstwo, itp.)
- ✅ FAQ system z JSON files
- ⚠️ AI Chat z OpenAI (niedziałający - stary SDK)
- ⚠️ Brak SEO (Google nie widzi treści)
- ⚠️ Brak TypeScript
- ⚠️ Placeholder obrazy
- ⚠️ SASS (można lepiej z Tailwind)

#### Struktura plików:
```
reno/
├── src/
│   ├── components/      # 12 komponentów
│   ├── section/         # 9 sekcji materiałów
│   ├── content/         # 9 plików z treścią
│   └── styles/          # SASS files
├── public/
│   └── jsonFile/        # FAQ data
└── package.json         # Zależności z 2023
```

### 🚨 Główne problemy:

1. **SEO = 0/10** - Google nie indeksuje SPA
2. **Performance** - cały React ładuje się przed wyświetleniem
3. **Przestarzałe biblioteki** - luki bezpieczeństwa
4. **Brak typowania** - trudniejsze utrzymanie
5. **OpenAI deprecated** - używa nieistniejącego `davinci-codex`

---

## 2. Nowy stack technologiczny

### 🎯 Dlaczego NIE React Native / Flutter?

| Technologia | Kiedy używać | Twój przypadek |
|-------------|--------------|----------------|
| **React Native** | Aplikacja mobilna (iOS/Android) | ❌ NIE - masz stronę WWW |
| **Flutter** | Aplikacja mobilna z Dart | ❌ NIE - masz stronę WWW |
| **Next.js** | Strona internetowa z SEO | ✅ TAK - perfekcyjne dopasowanie |

**Decyzja:** Next.js 15 + React 19 (web-first approach)

> 💡 **Responsywny Next.js** działa świetnie na telefonach! Jeśli w przyszłości zechcesz dedykowaną aplikację mobilną - możesz dodać React Native używając tego samego API.

---

### 🛠️ Stack docelowy

```
┌─────────────────────────────────────┐
│         FRONTEND LAYER              │
├─────────────────────────────────────┤
│ Next.js 15 (App Router)             │
│ ├── React 19 (Server Components)    │
│ ├── TypeScript 5.6+                 │
│ └── Tailwind CSS 4.0                │
├─────────────────────────────────────┤
│         STATE MANAGEMENT            │
├─────────────────────────────────────┤
│ Zustand (lightweight store)         │
├─────────────────────────────────────┤
│         UI COMPONENTS               │
├─────────────────────────────────────┤
│ shadcn/ui (Radix UI + Tailwind)     │
│ ├── Button, Card, Input             │
│ ├── Accordion (dla FAQ)             │
│ └── Dialog, Sheet                   │
├─────────────────────────────────────┤
│         AI INTEGRATION              │
├─────────────────────────────────────┤
│ OpenAI SDK 4.x                      │
│ Vercel AI SDK (streaming)           │
│ RAG Pattern (baza wiedzy)           │
├─────────────────────────────────────┤
│         BACKEND LAYER               │
├─────────────────────────────────────┤
│ Next.js API Routes                  │
│ ├── /api/chat (OpenAI)              │
│ └── /api/contact (email)            │
├─────────────────────────────────────┤
│         DATA LAYER                  │
├─────────────────────────────────────┤
│ JSON files (FAQ)                    │
│ TypeScript interfaces               │
│ Zod validation (optional)           │
├─────────────────────────────────────┤
│         IMAGE OPTIMIZATION          │
├─────────────────────────────────────┤
│ Next.js Image component             │
│ Sharp (już w projekcie)             │
├─────────────────────────────────────┤
│         TESTING                     │
├─────────────────────────────────────┤
│ Vitest (unit tests)                 │
│ Playwright (E2E)                    │
├─────────────────────────────────────┤
│         DEPLOYMENT                  │
├─────────────────────────────────────┤
│ Vercel (preferred) / Netlify        │
│ GitHub Actions (CI/CD)              │
└─────────────────────────────────────┘
```

---

## 3. Architektura docelowa

### 📁 Nowa struktura projektu

```
reno-next/
│
├── 📁 app/                           # Next.js App Router (❤️ CORE)
│   │
│   ├── 📄 layout.tsx                 # Root layout (meta tags, fonts)
│   ├── 📄 page.tsx                   # Strona główna "/"
│   ├── 📄 globals.css                # Global Tailwind styles
│   │
│   ├── 📁 (main)/                    # Route group (shared layout)
│   │   ├── 📄 layout.tsx             # Header + Footer
│   │   ├── 📄 page.tsx               # Landing page
│   │   │
│   │   └── 📁 [material]/            # 🔥 Dynamic route
│   │       ├── 📄 page.tsx           # /drewno, /gips, etc.
│   │       └── 📄 loading.tsx        # Loading state
│   │
│   ├── 📁 galeria/                   # Statyczna strona
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 kontakt/
│   │   └── 📄 page.tsx
│   │
│   └── 📁 api/                       # 🔧 Backend API
│       ├── 📁 chat/
│       │   └── 📄 route.ts           # POST /api/chat
│       └── 📁 contact/
│           └── 📄 route.ts           # POST /api/contact
│
├── 📁 components/                    # React Components
│   │
│   ├── 📁 ui/                        # shadcn/ui components
│   │   ├── 📄 button.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 input.tsx
│   │   ├── 📄 accordion.tsx
│   │   └── 📄 dialog.tsx
│   │
│   ├── 📁 layout/                    # Layout components
│   │   ├── 📄 Header.tsx
│   │   ├── 📄 Footer.tsx
│   │   └── 📄 Navigation.tsx
│   │
│   ├── 📁 sections/                  # Sekcje materiałowe
│   │   ├── 📄 MaterialHero.tsx
│   │   ├── 📄 MaterialFAQ.tsx
│   │   └── 📄 MaterialInfo.tsx
│   │
│   └── 📁 chat/                      # AI Chat
│       ├── 📄 AIChat.tsx             # Main chat component
│       ├── 📄 ChatMessage.tsx
│       └── 📄 ChatInput.tsx
│
├── 📁 lib/                           # Utilities & Config
│   ├── 📄 types.ts                   # TypeScript types
│   ├── 📄 utils.ts                   # Helper functions
│   ├── 📄 openai.ts                  # OpenAI config
│   ├── 📄 data.ts                    # Data fetching functions
│   └── 📄 constants.ts               # App constants
│
├── 📁 data/                          # Data files
│   └── 📁 materials/
│       ├── 📄 drewno.json
│       ├── 📄 gips.json
│       ├── 📄 malarstwo.json
│       ├── 📄 papier.json
│       ├── 📄 plastik.json
│       ├── 📄 porcelana.json
│       ├── 📄 skora.json
│       ├── 📄 szklo.json
│       └── 📄 wosk.json
│
├── 📁 public/                        # Static assets
│   ├── 📁 images/
│   │   ├── 📁 materials/             # Zdjęcia materiałów
│   │   ├── 📁 gallery/               # Galeria realizacji
│   │   └── 📄 logo.svg
│   └── 📄 favicon.ico
│
├── 📁 store/                         # Zustand state management
│   ├── 📄 chatStore.ts               # Chat state
│   └── 📄 uiStore.ts                 # UI state (modals, etc.)
│
├── 📁 hooks/                         # Custom React hooks
│   ├── 📄 useChat.ts
│   └── 📄 useMaterial.ts
│
├── 📁 styles/                        # Additional styles (jeśli potrzebne)
│   └── 📄 fonts.css
│
├── 📁 tests/                         # Tests
│   ├── 📁 unit/
│   └── 📁 e2e/
│
├── 📄 .env.local                     # Environment variables (gitignored)
├── 📄 .env.example                   # Example env file
├── 📄 next.config.js                 # Next.js config
├── 📄 tailwind.config.ts             # Tailwind config
├── 📄 tsconfig.json                  # TypeScript config
├── 📄 package.json
└── 📄 README.md
```

### 🔑 Kluczowe koncepcje

#### 1. **Dynamic Routes: `[material]`**

```typescript
// app/(main)/[material]/page.tsx

// Next.js automatycznie tworzy routy:
// /drewno
// /gips
// /malarstwo
// ... itd.

export async function generateStaticParams() {
  return [
    { material: 'drewno' },
    { material: 'gips' },
    { material: 'malarstwo' },
    // ... reszta materiałów
  ];
}

export default async function MaterialPage({
  params
}: {
  params: { material: string }
}) {
  const materialData = await getMaterialData(params.material);

  return (
    <div>
      <MaterialHero data={materialData} />
      <MaterialInfo data={materialData} />
      <MaterialFAQ faqs={materialData.faqs} />
      <AIChat materialType={params.material} />
    </div>
  );
}
```

**Korzyści:**
- ✅ Jedna strona obsługuje wszystkie materiały
- ✅ Łatwo dodać nowy materiał (tylko JSON)
- ✅ SEO-friendly URLs
- ✅ Static generation (super szybkie)

---

#### 2. **Server vs Client Components**

```typescript
// ✅ SERVER COMPONENT (default)
// - Renderuje się na serwerze
// - Może fetchować dane
// - Zero JavaScript w przeglądarce
async function MaterialInfo({ material }: { material: string }) {
  const data = await fetch(`/api/materials/${material}`);
  return <div>{data.description}</div>;
}

// ✅ CLIENT COMPONENT
// - Interaktywny (useState, useEffect)
// - Event handlers (onClick, onChange)
// - Wysyłany do przeglądarki
'use client';

import { useState } from 'react';

function AIChat() {
  const [message, setMessage] = useState('');

  return (
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
}
```

**Zasada:** Domyślnie wszystko SERVER, dodaj `'use client'` tylko gdy potrzebujesz interaktywności.

---

#### 3. **API Routes (Backend w Next.js)**

```typescript
// app/api/chat/route.ts

import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { message, materialType } = await request.json();

  // Wczytaj bazę wiedzy
  const knowledge = await loadMaterialKnowledge(materialType);

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [
      {
        role: 'system',
        content: `Jesteś ekspertem w konserwacji ${materialType}.
                  Baza wiedzy: ${JSON.stringify(knowledge)}`
      },
      {
        role: 'user',
        content: message
      }
    ],
  });

  return NextResponse.json({
    response: response.choices[0].message.content
  });
}
```

**Korzyści:**
- 🔒 API key bezpieczny (tylko na serwerze)
- ⚡ Szybkie odpowiedzi
- 🎯 Full-stack w jednym projekcie

---

## 4. Plan migracji krok po kroku

### 🗓️ Harmonogram (15-20 dni roboczych)

---

### **FAZA 1: Przygotowanie środowiska** (1-2 dni)

#### Dzień 1: Setup projektu

**Krok 1.1: Stwórz nowy projekt Next.js**

```bash
# Przejdź do folderu nadrzędnego
cd M:\

# Utwórz nowy projekt (wybierz opcje w kreatorze)
npx create-next-app@latest reno-next

# Opcje do wyboru w kreatorze:
# ✅ TypeScript: Yes
# ✅ ESLint: Yes
# ✅ Tailwind CSS: Yes
# ✅ `src/` directory: No (używamy app/ bezpośrednio)
# ✅ App Router: Yes
# ✅ Customize default import alias: No

cd reno-next
```

**Krok 1.2: Zainstaluj dodatkowe zależności**

```bash
# AI & Chat
npm install openai ai

# State Management
npm install zustand

# UI Components foundation
npm install @radix-ui/react-accordion @radix-ui/react-dialog
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react  # ikony

# Forms (jeśli będzie formularz kontaktowy)
npm install react-hook-form @hookform/resolvers zod

# Email (opcjonalnie)
npm install resend

# Dev dependencies
npm install -D @types/node
```

**Krok 1.3: Zainstaluj shadcn/ui**

```bash
# Inicjalizacja shadcn/ui
npx shadcn-ui@latest init

# Wybierz opcje:
# Style: Default
# Base color: Slate
# CSS variables: Yes

# Dodaj podstawowe komponenty
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add textarea
```

**Krok 1.4: Konfiguracja environment variables**

```bash
# Utwórz plik .env.local (NIE commituj do git!)
touch .env.local
```

```env
# .env.local
OPENAI_API_KEY=sk-proj-...  # Twój klucz OpenAI
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

```env
# .env.example (ten commituj)
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Krok 1.5: Uruchom projekt**

```bash
npm run dev
```

Otwórz http://localhost:3000 - powinieneś zobaczyć startową stronę Next.js!

---

#### Dzień 2: Struktura katalogów

**Krok 2.1: Stwórz strukturę folderów**

```bash
# W głównym katalogu projektu
mkdir -p components/ui
mkdir -p components/layout
mkdir -p components/sections
mkdir -p components/chat
mkdir -p lib
mkdir -p data/materials
mkdir -p store
mkdir -p hooks
mkdir -p public/images/materials
mkdir -p public/images/gallery
```

**Krok 2.2: Stwórz podstawowe pliki**

```bash
# TypeScript types
touch lib/types.ts

# Utilities
touch lib/utils.ts
touch lib/constants.ts

# Data functions
touch lib/data.ts

# Stores
touch store/chatStore.ts

# Custom hooks
touch hooks/useChat.ts
```

**Krok 2.3: Konfiguracja Tailwind (opcjonalnie rozszerz)**

Edytuj `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kolory pracowni konserwatorskiej
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        // Dodaj własne kolory
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

---

### **FAZA 2: Migracja danych** (1 dzień)

#### Dzień 3: Transformacja JSON i typy

**Krok 3.1: Skopiuj pliki JSON**

```bash
# Skopiuj z obecnego projektu
cp M:/reno/public/jsonFile/*.json M:/reno-next/data/materials/

# Zmień nazwy na małe litery (opcjonalnie)
cd M:/reno-next/data/materials/
mv Drewno.json drewno.json
mv Gips.json gips.json
# ... itd. dla wszystkich
```

**Krok 3.2: Zdefiniuj TypeScript types**

Edytuj `lib/types.ts`:

```typescript
// lib/types.ts

// Typy materiałów
export type MaterialType =
  | 'drewno'
  | 'gips'
  | 'malarstwo'
  | 'papier'
  | 'plastik'
  | 'porcelana'
  | 'skora'
  | 'szklo'
  | 'wosk';

// FAQ item
export interface FAQ {
  question: string;
  answer: string;
}

// Dane materiału
export interface MaterialData {
  id: MaterialType;
  title: string;
  description: string;
  imageUrl: string;
  commonItems: string[];      // "Często pracujemy z:"
  commonProblems: string[];   // "Najczęstsze problemy:"
  faqs: FAQ[];
}

// Chat message
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Metadata dla SEO
export interface MaterialMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}
```

**Krok 3.3: Stwórz funkcje do wczytywania danych**

Edytuj `lib/data.ts`:

```typescript
// lib/data.ts

import { MaterialType, MaterialData, FAQ } from './types';
import fs from 'fs';
import path from 'path';

// Mapa materiałów (można przenieść do constants.ts)
const MATERIAL_INFO: Record<MaterialType, Omit<MaterialData, 'faqs'>> = {
  drewno: {
    id: 'drewno',
    title: 'Drewno',
    description: 'Czy masz zabytkowy przedmiot z drewna, który potrzebuje renowacji? Nasza mała pracownia konserwatorska może przywrócić mu dawne piękno i wartość.',
    imageUrl: '/images/materials/drewno.jpg',
    commonItems: [
      'rzeźbami drewnianymi',
      'meblami zabytkowymi',
      'ramami obrazów',
      'elementami architektury wnętrz',
      'dekoracjami i zdobieniami',
    ],
    commonProblems: [
      'Zabrudzenia i odbarwienia powierzchni',
      'Uszkodzenia mechaniczne, jak pęknięcia, złamania czy ubytki',
      'Atak szkodników, takich jak korniki czy pleśń',
      'Zniszczenia spowodowane wilgocią czy temperaturą',
      'Stare i niewłaściwe naprawy',
    ],
  },
  gips: {
    id: 'gips',
    title: 'Gips',
    description: 'Renowacja i konserwacja przedmiotów gipsowych, rzeźb i dekoracji architektonicznych.',
    imageUrl: '/images/materials/gips.jpg',
    commonItems: [
      'rzeźbami gipsowymi',
      'sztukaterią',
      'ornamentami architektonicznymi',
      'odlewami artystycznymi',
    ],
    commonProblems: [
      'Pęknięcia i ubytki',
      'Zabrudzenia powierzchni',
      'Odpadająca farba lub złocenia',
      'Uszkodzenia mechaniczne',
    ],
  },
  // ... reszta materiałów (skopiuj z obecnych Section.js)
};

/**
 * Pobiera dane materiału (Server Component)
 */
export async function getMaterialData(material: MaterialType): Promise<MaterialData> {
  const info = MATERIAL_INFO[material];

  if (!info) {
    throw new Error(`Material "${material}" not found`);
  }

  // Wczytaj FAQ z JSON
  const faqPath = path.join(process.cwd(), 'data', 'materials', `${material}.json`);
  const faqContent = await fs.promises.readFile(faqPath, 'utf-8');
  const faqs: FAQ[] = JSON.parse(faqContent);

  return {
    ...info,
    faqs,
  };
}

/**
 * Zwraca listę wszystkich materiałów
 */
export function getAllMaterialTypes(): MaterialType[] {
  return Object.keys(MATERIAL_INFO) as MaterialType[];
}

/**
 * Walidacja czy material type jest poprawny
 */
export function isValidMaterialType(material: string): material is MaterialType {
  return material in MATERIAL_INFO;
}
```

**Krok 3.4: Stwórz constants**

Edytuj `lib/constants.ts`:

```typescript
// lib/constants.ts

export const SITE_CONFIG = {
  name: 'RENO - Pracownia Konserwatorska',
  description: 'Profesjonalna renowacja i konserwacja przedmiotów zabytkowych',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reno.pl',
  email: 'kontakt@reno.pl',
  phone: '+48 123 456 789',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Strona główna', href: '/' },
  { label: 'Usługi', href: '/#uslugi' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const MATERIAL_LABELS: Record<string, string> = {
  drewno: 'Drewno',
  gips: 'Gips',
  malarstwo: 'Malarstwo',
  papier: 'Papier',
  plastik: 'Plastyk',
  porcelana: 'Porcelana',
  skora: 'Skóra',
  szklo: 'Szkło',
  wosk: 'Wosk',
} as const;
```

---

### **FAZA 3: Migracja komponentów UI** (3-4 dni)

#### Dzień 4-5: Layout components

**Krok 4.1: Root Layout**

Edytuj `app/layout.tsx`:

```typescript
// app/layout.tsx

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['renowacja', 'konserwacja', 'zabytki', 'drewno', 'malarstwo'],
  authors: [{ name: 'RENO' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Krok 4.2: Header Component**

Stwórz `components/layout/Header.tsx`:

```typescript
// components/layout/Header.tsx

import Link from 'next/link';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-primary-700">
            {SITE_CONFIG.name.split('-')[0].trim()}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/kontakt"
          className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
        >
          Skontaktuj się
        </Link>
      </div>
    </header>
  );
}
```

**Krok 4.3: Footer Component**

Stwórz `components/layout/Footer.tsx`:

```typescript
// components/layout/Footer.tsx

import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* O nas */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-gray-600">
              Profesjonalna renowacja i konserwacja przedmiotów zabytkowych.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: {SITE_CONFIG.email}</li>
              <li>Tel: {SITE_CONFIG.phone}</li>
            </ul>
          </div>

          {/* Linki */}
          <div>
            <h3 className="font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/drewno">Renowacja drewna</a></li>
              <li><a href="/malarstwo">Renowacja obrazów</a></li>
              <li><a href="/porcelana">Renowacja porcelany</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
```

**Krok 4.4: Main Layout (z Header/Footer)**

Stwórz `app/(main)/layout.tsx`:

```typescript
// app/(main)/layout.tsx

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

---

#### Dzień 6-7: Section components

**Krok 5.1: Material Hero Section**

Stwórz `components/sections/MaterialHero.tsx`:

```typescript
// components/sections/MaterialHero.tsx

import Image from 'next/image';
import { MaterialData } from '@/lib/types';

interface MaterialHeroProps {
  data: MaterialData;
}

export function MaterialHero({ data }: MaterialHeroProps) {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src={data.imageUrl}
        alt={data.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Renowacja {data.title}
          </h1>
          <p className="text-lg md:text-xl">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Krok 5.2: Material Info Section**

Stwórz `components/sections/MaterialInfo.tsx`:

```typescript
// components/sections/MaterialInfo.tsx

import { MaterialData } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface MaterialInfoProps {
  data: MaterialData;
}

export function MaterialInfo({ data }: MaterialInfoProps) {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Często pracujemy z */}
        <Card>
          <CardHeader>
            <CardTitle>Często pracujemy z:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.commonItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Najczęstsze problemy */}
        <Card>
          <CardHeader>
            <CardTitle>Najczęstsze problemy:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.commonProblems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  {problem}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
```

**Krok 5.3: Material FAQ Section**

Stwórz `components/sections/MaterialFAQ.tsx`:

```typescript
// components/sections/MaterialFAQ.tsx

import { FAQ } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface MaterialFAQProps {
  faqs: FAQ[];
  title?: string;
}

export function MaterialFAQ({ faqs, title = 'Często zadawane pytania' }: MaterialFAQProps) {
  return (
    <section className="container py-16 bg-gray-50">
      <h2 className="font-serif text-3xl font-bold text-center mb-12">
        {title}
      </h2>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

---

### **FAZA 4: AI Chat Integration** (2-3 dni)

#### Dzień 8-9: OpenAI API Setup

**Krok 6.1: API Route**

Stwórz `app/api/chat/route.ts`:

```typescript
// app/api/chat/route.ts

import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { getMaterialData } from '@/lib/data';
import { MaterialType } from '@/lib/types';

// Inicjalizacja OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Edge Runtime dla szybszych odpowiedzi
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, materialType } = await req.json();

    // Walidacja
    if (!materialType || !messages) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Wczytaj bazę wiedzy dla materiału
    const materialData = await getMaterialData(materialType as MaterialType);

    // System prompt z RAG
    const systemPrompt = `
      Jesteś ekspertem w konserwacji i renowacji ${materialData.title}.

      BAZA WIEDZY (FAQ):
      ${JSON.stringify(materialData.faqs, null, 2)}

      ZASADY:
      1. Odpowiadaj WYŁĄCZNIE na podstawie bazy wiedzy powyżej
      2. Jeśli nie znajdziesz odpowiedzi w bazie, powiedz: "Przepraszam, nie mam informacji na ten temat w mojej bazie wiedzy. Skontaktuj się bezpośrednio z naszą pracownią."
      3. Bądź konkretny i pomocny
      4. Używaj polskiego języka
      5. Możesz cytować FAQ jeśli to pomocne
    `;

    // Wywołanie OpenAI z streaming
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview', // lub 'gpt-4o' / 'gpt-3.5-turbo'
      stream: true,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Stream response
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**Krok 6.2: Chat Store (Zustand)**

Edytuj `store/chatStore.ts`:

```typescript
// store/chatStore.ts

import { create } from 'zustand';
import { ChatMessage } from '@/lib/types';

interface ChatStore {
  messages: ChatMessage[];
  isLoading: boolean;
  addMessage: (message: ChatMessage) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isLoading: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setLoading: (loading) =>
    set({ isLoading: loading }),

  clearMessages: () =>
    set({ messages: [] }),
}));
```

**Krok 6.3: Chat Component**

Stwórz `components/chat/AIChat.tsx`:

```typescript
// components/chat/AIChat.tsx

'use client';

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MaterialType } from '@/lib/types';
import { Send, Loader2 } from 'lucide-react';

interface AIChatProps {
  materialType: MaterialType;
}

export function AIChat({ materialType }: AIChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: '/api/chat',
      body: {
        materialType,
      },
    });

  return (
    <section className="container py-16">
      <Card className="max-w-3xl mx-auto">
        <div className="p-6">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Zapytaj eksperta o renowację {materialType}
          </h2>

          {/* Messages */}
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Zadaj pytanie dotyczące renowacji {materialType}
              </p>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      m.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Np. Jak naprawić pęknięcia w drewnie?"
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
}
```

---

### **FAZA 5: Dynamic Pages** (1-2 dni)

#### Dzień 10-11: Material Pages

**Krok 7.1: Dynamic Route Page**

Stwórz `app/(main)/[material]/page.tsx`:

```typescript
// app/(main)/[material]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMaterialData, getAllMaterialTypes, isValidMaterialType } from '@/lib/data';
import { MaterialType } from '@/lib/types';
import { MaterialHero } from '@/components/sections/MaterialHero';
import { MaterialInfo } from '@/components/sections/MaterialInfo';
import { MaterialFAQ } from '@/components/sections/MaterialFAQ';
import { AIChat } from '@/components/chat/AIChat';

// Generate static params dla wszystkich materiałów
export async function generateStaticParams() {
  const materials = getAllMaterialTypes();

  return materials.map((material) => ({
    material,
  }));
}

// Generate metadata dla SEO
export async function generateMetadata({
  params
}: {
  params: { material: string }
}): Promise<Metadata> {
  if (!isValidMaterialType(params.material)) {
    return {};
  }

  const data = await getMaterialData(params.material);

  return {
    title: `Renowacja ${data.title}`,
    description: data.description,
    openGraph: {
      images: [data.imageUrl],
    },
  };
}

// Main page component
export default async function MaterialPage({
  params
}: {
  params: { material: string }
}) {
  // Walidacja parametru
  if (!isValidMaterialType(params.material)) {
    notFound();
  }

  // Fetch data (cached by Next.js)
  const materialData = await getMaterialData(params.material);

  return (
    <div>
      <MaterialHero data={materialData} />
      <MaterialInfo data={materialData} />
      <MaterialFAQ faqs={materialData.faqs} />
      <AIChat materialType={params.material} />
    </div>
  );
}
```

**Krok 7.2: Loading State**

Stwórz `app/(main)/[material]/loading.tsx`:

```typescript
// app/(main)/[material]/loading.tsx

import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-[500px] w-full" />
      <div className="container">
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  );
}
```

**Krok 7.3: Not Found Page**

Stwórz `app/(main)/[material]/not-found.tsx`:

```typescript
// app/(main)/[material]/not-found.tsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="font-serif text-4xl font-bold mb-4">
        Materiał nie został znaleziony
      </h1>
      <p className="text-gray-600 mb-8">
        Przepraszamy, ten typ materiału nie istnieje w naszej ofercie.
      </p>
      <Button asChild>
        <Link href="/">Wróć do strony głównej</Link>
      </Button>
    </div>
  );
}
```

---

### **FAZA 6: Strona główna i inne** (2-3 dni)

#### Dzień 12-13: Landing Page

**Krok 8.1: Home Page**

Edytuj `app/(main)/page.tsx`:

```typescript
// app/(main)/page.tsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllMaterialTypes } from '@/lib/data';
import { MATERIAL_LABELS } from '@/lib/constants';

export default function HomePage() {
  const materials = getAllMaterialTypes();

  return (
    <div>
      {/* Hero Section */}
      <section className="container py-24 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          Profesjonalna Renowacja <br />i Konserwacja Zabytków
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Od ponad X lat przywracamy życie cennym przedmiotom z drewna,
          porcelany, malarstwa i innych materiałów.
        </p>
        <Button size="lg" asChild>
          <Link href="/kontakt">Umów konsultację</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Nasze usługi
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {materials.map((material) => (
              <Link key={material} href={`/${material}`}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle>{MATERIAL_LABELS[material]}</CardTitle>
                    <CardDescription>
                      Profesjonalna renowacja i konserwacja
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 text-center">
        <h2 className="font-serif text-3xl font-bold mb-6">
          Potrzebujesz pomocy z renowacją?
        </h2>
        <p className="text-gray-600 mb-8">
          Skontaktuj się z nami, aby omówić szczegóły projektu
        </p>
        <Button size="lg" asChild>
          <Link href="/kontakt">Skontaktuj się</Link>
        </Button>
      </section>
    </div>
  );
}
```

**Krok 8.2: Contact Page** (opcjonalnie)

Stwórz `app/(main)/kontakt/page.tsx`:

```typescript
// app/(main)/kontakt/page.tsx

import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl font-bold mb-8">Kontakt</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Dane kontaktowe</h2>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong><br />
              {SITE_CONFIG.email}
            </p>
            <p>
              <strong>Telefon:</strong><br />
              {SITE_CONFIG.phone}
            </p>
          </div>
        </div>

        <div>
          {/* Tutaj może być formularz kontaktowy */}
          <h2 className="text-2xl font-bold mb-4">Napisz do nas</h2>
          <p className="text-gray-600">
            Formularz kontaktowy w przygotowaniu...
          </p>
        </div>
      </div>
    </div>
  );
}
```

---

### **FAZA 7: Testing & Optimization** (2-3 dni)

#### Dzień 14-15: Testy i optymalizacja

**Krok 9.1: Dodaj obrazy**

```bash
# Zastąp placeholder obrazy prawdziwymi
# Umieść w: public/images/materials/

# Upewnij się, że masz:
drewno.jpg
gips.jpg
malarstwo.jpg
papier.jpg
plastik.jpg
porcelana.jpg
skora.jpg
szklo.jpg
wosk.jpg
```

**Krok 9.2: Performance check**

```bash
# Zbuduj production build
npm run build

# Sprawdź rozmiar bundle'a
# Powinien być <500KB dla JS

# Uruchom production server
npm start
```

**Krok 9.3: Lighthouse Audit**

1. Otwórz Chrome DevTools (F12)
2. Zakładka "Lighthouse"
3. Uruchom audit dla:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Cel: 90+ w każdej kategorii**

**Krok 9.4: Testy manualne**

Checklist:
- [ ] Wszystkie 9 stron materiałów ładują się poprawnie
- [ ] FAQ accordion działa
- [ ] AI Chat wysyła/odbiera wiadomości
- [ ] Nawigacja działa
- [ ] Responsywność na mobile
- [ ] SEO meta tags wyświetlają się (View Source)

---

### **FAZA 8: Deployment** (1 dzień)

#### Dzień 16: Deploy na Vercel

**Krok 10.1: Push do GitHub**

```bash
# Inicjalizuj git (jeśli nie masz)
cd M:/reno-next
git init
git add .
git commit -m "Initial commit - Next.js migration"

# Utwórz repo na GitHub
# https://github.com/new

# Push
git remote add origin https://github.com/YOUR_USERNAME/reno-next.git
git branch -M main
git push -u origin main
```

**Krok 10.2: Deploy na Vercel**

1. Wejdź na https://vercel.com
2. Kliknij "Add New Project"
3. Importuj repo z GitHub
4. Dodaj Environment Variables:
   ```
   OPENAI_API_KEY=sk-proj-...
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```
5. Kliknij "Deploy"

**Deployment zajmie ~2 minuty**

**Krok 10.3: Domena (opcjonalnie)**

1. W Vercel Settings → Domains
2. Dodaj własną domenę (np. reno.pl)
3. Skonfiguruj DNS zgodnie z instrukcjami

---

## 5. Przewodnik po nowych technologiach

### 🎓 Next.js App Router

**Routing:**
```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
└── [slug]/
    └── page.tsx          → /any-slug
```

**Server vs Client Components:**
```typescript
// ✅ Server (default) - żadnych 'use client'
async function ServerComp() {
  const data = await fetch(...);
  return <div>{data}</div>;
}

// ✅ Client - dodaj 'use client'
'use client';
import { useState } from 'react';

function ClientComp() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### 🎨 Tailwind CSS

**Utility classes:**
```jsx
<div className="p-4 bg-white rounded-lg shadow-md">
  p-4         = padding: 1rem
  bg-white    = background-color: white
  rounded-lg  = border-radius: 0.5rem
  shadow-md   = box-shadow: medium
</div>
```

**Responsive:**
```jsx
<div className="text-sm md:text-lg lg:text-xl">
  sm:  640px+
  md:  768px+
  lg:  1024px+
  xl:  1280px+
</div>
```

**Hover/Focus:**
```jsx
<button className="bg-blue-500 hover:bg-blue-700">
  Click
</button>
```

---

### 📦 shadcn/ui

**Komponenty kopiowane do projektu (pełna kontrola!):**

```bash
# Dodaj komponent
npx shadcn-ui@latest add button

# Używaj
import { Button } from '@/components/ui/button';

<Button variant="outline" size="lg">Click</Button>
```

---

### 🤖 OpenAI + RAG

**RAG Pattern:**
```typescript
const systemPrompt = `
  Baza wiedzy: ${JSON.stringify(knowledge)}

  Odpowiadaj TYLKO na podstawie bazy wiedzy.
`;

const response = await openai.chat.completions.create({
  messages: [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userQuestion },
  ],
});
```

**Dlaczego RAG?**
- ✅ Odpowiedzi z twoich danych (nie halucynacje)
- ✅ Możliwość cytowania źródeł
- ✅ Kontrola nad odpowiedziami

---

### 🐻 Zustand

**Prosty state management:**
```typescript
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Używaj
function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return <button onClick={increment}>{count}</button>;
}
```

---

## 6. Checklist przed startem

### ✅ Wymagania

- [ ] Node.js 18+ zainstalowany
- [ ] Edytor kodu (VS Code recommended)
- [ ] Klucz OpenAI API (https://platform.openai.com/api-keys)
- [ ] Konto GitHub
- [ ] Konto Vercel (opcjonalnie)

### ✅ Umiejętności (nice to have)

- [ ] Podstawy React
- [ ] Podstawy TypeScript (nauczysz się po drodze!)
- [ ] Podstawy Git
- [ ] Terminal/Command Line

### ✅ Zasoby

- [ ] Prawdziwe zdjęcia materiałów (9 sztuk)
- [ ] Logo pracowni
- [ ] Dane kontaktowe
- [ ] Przykładowe realizacje (do galerii)

---

## 📚 Przydatne linki

### Dokumentacja:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- OpenAI API: https://platform.openai.com/docs
- Vercel AI SDK: https://sdk.vercel.ai

### Tutoriale:
- Next.js 15 tutorial: https://www.youtube.com/watch?v=wm5gMKuwSYk
- Tailwind crash course: https://www.youtube.com/watch?v=UBOj6rqRUME

---

## 🆘 Troubleshooting

### Problem: `npm install` fails
```bash
# Wyczyść cache i spróbuj ponownie
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problem: OpenAI API error
```bash
# Sprawdź klucz API
echo $OPENAI_API_KEY  # Linux/Mac
echo %OPENAI_API_KEY% # Windows

# Upewnij się, że jest w .env.local
cat .env.local
```

### Problem: TypeScript errors
```bash
# Restart TypeScript server w VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### Problem: Tailwind styles not working
```bash
# Sprawdź tailwind.config.ts - content paths
# Restart dev server
npm run dev
```

---

## 🎯 Kolejne kroki po migracji

### Krótkoterminowe (1-2 tygodnie):
1. ✅ Dodaj prawdziwe obrazy
2. ✅ Zaimplementuj formularz kontaktowy (React Hook Form + Resend)
3. ✅ Dodaj galerię realizacji (before/after slider)
4. ✅ Analytics (Vercel Analytics lub GA4)

### Średnioterminowe (1-2 miesiące):
1. ✅ System CMS (Sanity.io) dla treści
2. ✅ Blog z artykułami (MDX)
3. ✅ Multi-language (next-intl) - EN/DE
4. ✅ Booking system (Cal.com integration)

### Długoterminowe (3+ miesiące):
1. ✅ Aplikacja mobilna (React Native z tym samym API)
2. ✅ Panel administracyjny
3. ✅ System zarządzania zleceniami
4. ✅ Integracja z płatnościami

---

## 📊 Porównanie: Przed vs Po

| Aspekt | Stary projekt (CRA) | Nowy projekt (Next.js) |
|--------|---------------------|------------------------|
| **SEO** | 0/10 (brak SSR) | 10/10 (SSR/SSG) |
| **Performance** | 60-70/100 | 90-100/100 |
| **Type Safety** | Brak (JS) | Pełne (TS) |
| **Bundle Size** | ~300KB | ~150KB |
| **Loading Time** | 3-4s | <1s |
| **AI Chat** | Nie działa | Działa + RAG |
| **Hosting** | Wymaga serwera | Vercel (darmowy) |
| **Deploy Time** | 10-15 min | 2 min |
| **Utrzymanie** | Trudne | Łatwe |

---

## 💰 Szacowane koszty

### Development:
- Twój czas: **15-20 dni** (jeśli robisz sam)
- Freelancer: **5000-8000 PLN** (jeśli zlecasz)

### Miesięczne koszty:
- **Vercel Hobby:** 0 PLN (wystarczy dla małej strony)
- **OpenAI API:** 20-50 PLN (zależy od ruchu)
- **Domena:** ~50 PLN/rok
- **Razem:** ~20-50 PLN/miesiąc

---

## ✨ Podsumowanie

**Co zyskujesz:**
- ⚡ 3x szybsze ładowanie
- 🔍 Pełne SEO (Google Cię znajdzie!)
- 🤖 Działający AI Chat z RAG
- 📱 Responsywność na wszystkich urządzeniach
- 🔒 Bezpieczeństwo (TypeScript + walidacja)
- 🚀 Łatwy deployment (30 sekund)
- 💰 Niskie koszty (prawie darmowy hosting)

**Gotowy do startu?**
Rozpocznij od Fazy 1, Krok 1.1 i działaj krok po kroku! 🚀

---

**Powodzenia! 💪**

Jeśli masz pytania podczas migracji - pisz śmiało!
