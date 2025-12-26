import Navbar from '@/app/(website)/common/Header';
import Footer from '@/app/(website)/common/Footer';
import LenisPrevent from '@core/utils/lenis-prevent';
import CookieConsentComponent from '@/app/(website)/components/_cookies-consent';
import Header from '@/app/(website)/common/Header/Header';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* <Navbar /> */}
      <Header/>
      <main id="main" className="flex-1">
        {children}
      </main>
      <LenisPrevent />
      <CookieConsentComponent/>
      <Footer />
    </div>
  );
}
