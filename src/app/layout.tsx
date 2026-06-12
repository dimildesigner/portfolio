import "./globals.css";
import { Providers } from "@/components/Providers";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "dimildesigner.portfolio | Front-end Developer & UI Designer",
  description:
    "Portfólio profissional de Edimilson Teixeira (Dimil), desenvolvedor Front-end especializado em React, Next.js e UX/UI Design. Especialista em criar interfaces performáticas e estéticas.",
  keywords: [
    "React.js",
    "Next.js",
    "UI/UX Design",
    "Front-end Development",
    "Desenvolvedor Front-end",
    "Desenvolvedor Front-end Criativo",
    "back-end development",
    "full-stack development",
    "React",
    "Next.js",
    "layout design",
    "Design-to-Code",
    "Design to Code",
    "UI Designer",
    "UX Design",
    "Design de Interface",
    "graphic design",
    "Designer Grafico",
    "motion graphics",
    "Motion Design",
    "e-learning",
    "marketing digital",
    "criação de interfaces performáticas e estéticas",
    "interatividade",
    "Web Development",
    "Desenvolvedor Web",
    "JavaScript",
    "Motion Design",
    "Portfolio de Desenvolvimento Web",
    "Desenvolvedor Front-end",
    "dimildesigner",
    "dimil",
    "Edimilson Teixeira",
    "Edimilson Teixeira Portfolio",
    "dimildesigner.portfolio",
    "Portfólio de Edimilson Teixeira",
    "Portfólio de Edimilson",
    "Portfólio de Dimil",
    "Raffaello Sanzio - A Escola de Atenas",
    "Raffaello Sanzio - The School of Athens",
    "the school of athens",
    "Use Your Illusion I & II - Guns N' Roses",
    "Use Your Illusion I & II cover art",
    "Capas dos álbuns Use Your Illusion I & II - Guns N' Roses",
    "Treinamento Corporativo Gamificado",
    "Gamificação",
    "Gamified Corporate Training",
    "iTunes Search API",
    "API de Busca do iTunes",
    "iTunes API",
    "The Guardian Open Platform API",
    "API de Notícias do The Guardian",
    "The Guardian API",
    "Revista 3D | Interativa",
    "3D Interactive Magazine",
    "3D Magazine", 
  ],
  authors: [{ name: "Edimilson Teixeira (Eddie)" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "dimildesigner.portfolio | Front-end Developer & UX/UI Designer",
    description:
      "Interfaces focadas em UX e performance. Conheça meus projetos e trajetória profissional.",
    url: "https://dimildesigner-portfolio.vercel.app/", 
    siteName: "dimildesigner | Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Edimilson Teixeira (Eddie)",
    jobTitle: "Front-end Developer & UX/UI Designer",
    url: "https://dimildesigner-portfolio.vercel.app/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "UI/UX Design",
      "Front-end Development",
      "Desenvolvedor Front-end",
      "Desenvolvedor Front-end Criativo",
      "back-end development",
      "full-stack development",
      "React",
      "Next.js",
      "layout design",
      "Design-to-Code",
      "Design to Code",
      "UI Designer",
      "UX Design",
      "Design de Interface",
      "graphic design",
      "Designer Grafico",
      "motion graphics",
      "Motion Design",
      "e-learning",
      "marketing digital",
      "criação de interfaces performáticas e estéticas",
      "interatividade",
      "Web Development",
      "Desenvolvedor Web",
      "JavaScript",
      "Motion Design",
      "Portfolio de Desenvolvimento Web",
      "Desenvolvedor Front-end",
      "dimildesigner",
      "dimil",
      "Edimilson Teixeira",
      "Edimilson Teixeira Portfolio",
      "dimildesigner.portfolio",
      "Portfólio de Edimilson Teixeira",
      "Portfólio de Edimilson",
      "Portfólio de Dimil",
      "Raffaello Sanzio - A Escola de Atenas",
      "Raffaello Sanzio - The School of Athens",
      "the school of athens",
      "Use Your Illusion I & II - Guns N' Roses",
      "Use Your Illusion I & II cover art",
      "Capas dos álbuns Use Your Illusion I & II - Guns N' Roses",
      "Treinamento Corporativo Gamificado",
      "Gamificação",
      "Gamified Corporate Training",
      "iTunes Search API",
      "API de Busca do iTunes",
      "iTunes API",
      "The Guardian Open Platform API",
      "API de Notícias do The Guardian",
      "The Guardian API",
      "Revista 3D | Interativa",
      "3D Interactive Magazine",
      "3D Magazine",      
    ],
  };

  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Insira o script aqui dentro da tag <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen">
        <div className="noise-overlay" />
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
