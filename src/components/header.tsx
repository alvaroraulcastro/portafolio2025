import { ThemeToggleButton } from '@/components/theme-toggle-button';

export function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <a
            href="/"
            className="flex items-center space-x-2"
            aria-label="Inicio - Portafolio"
            title="Inicio - Portafolio"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
            <span className="inline-block font-bold">Portafolio</span> {/* Changed text here */}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav aria-label="Main" className="flex items-center space-x-1">
            <ThemeToggleButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
