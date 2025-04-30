import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from '@/components/ui/toaster'; // Ensure Toaster is imported if used by components

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Álvaro Castro - Desarrollador Full Stack',
  description: 'Portafolio de Álvaro Castro, Desarrollador Full Stack con experiencia en JavaScript, React, Node.js, PHP, AWS y más. Explora mis proyectos y habilidades.',
  keywords: ['Desarrollador Full Stack', 'Full Stack Developer', 'Desarrollo Web', 'Web Development', 'JavaScript', 'React', 'Node.js', 'PHP', 'AWS', 'Portfolio', 'Portafolio', 'Álvaro Castro', 'Programador Web'],
  icons: {
    icon: '/gear.svg', // Reference the new gear icon
    // You might want to add other icon types like apple-touch-icon here as well
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
