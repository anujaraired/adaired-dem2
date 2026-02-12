'use client';
import Navbar from '@/app/(website)/common/Header';
import Footer from '@/app/(website)/common/Footer';
import LenisPrevent from '@core/utils/lenis-prevent';
import CookieConsentComponent from '@/app/(website)/components/_cookies-consent';
import Header from '@/app/(website)/common/Header/Header';
import { useEffect, useState } from 'react';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* <Navbar /> */}
      <div
        className={`fixed left-0 z-40 w-full transform transition-all duration-500 ease-out ${
          scrolled ? 'translate-y-0 scale-100' : 'translate-y-4 scale-[0.98]'
        }`}
      >
        <Header />
      </div>

      <main id="main" className="flex-1">
        {children}
      </main>
      <LenisPrevent />
      <CookieConsentComponent />
      <Footer />
    </div>
  );
}
