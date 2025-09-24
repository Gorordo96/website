"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#education', label: 'Formación' },
  { href: '#courses', label: 'Cursos' },
];

const NavLink = ({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string, onClick?: () => void }) => (
  <a href={href} onClick={onClick} className={cn("text-sm font-medium transition-colors hover:text-primary", className)}>
    {children}
  </a>
);


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-headline font-bold text-lg">Lucas Gorordo</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(item => <NavLink key={item.href} href={item.href}>{item.label}</NavLink>)}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-4">
                <a href="#home" className="mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-headline font-bold text-xl">Lucas Gorordo</span>
                </a>
                {navItems.map(item => (
                  <NavLink 
                    key={item.href} 
                    href={item.href} 
                    className="text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
