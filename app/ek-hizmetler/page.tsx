"use client";

import { Manrope } from "next/font/google";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function EkHizmetlerPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main
      className={`${manrope.className} min-h-screen bg-white text-[#332F2C]`}
    >
      {/* HEADER */}
      <header className="relative z-50 border-b border-[#EEE8E3] border-t-[2px] border-t-[#ED1739] bg-white">
        <div className="mx-auto flex h-[96px] max-w-[1340px] items-center px-5 sm:px-6">

          {/* LOGO */}
          <a href="/" className="flex shrink-0 items-center">
            <div className="relative flex h-[64px] w-[165px] items-center justify-center overflow-hidden rounded-[12px] bg-[#ED1739] shadow-[0_10px_27px_rgba(237,23,57,.18)]">
              <div className="absolute -right-[32px] -top-[58px] h-[125px] w-[125px] rounded-full border border-white/[0.08]" />

              <div className="text-center">
                <div className="text-[26px] font-extrabold leading-none tracking-[-1.9px] text-white">
                  M2CAR
                </div>

                <div className="mt-[7px] text-[6px] font-bold uppercase tracking-[3.2px] text-white/80">
                  Araç Kiralama
                </div>
              </div>
            </div>
          </a>

          {/* MENU */}
          <nav className="hidden flex-1 items-center justify-center gap-[29px] lg:flex">
            <Nav href="/">Ana Sayfa</Nav>
            <Nav href="/araclarimiz">Araçlarımız</Nav>
            <Nav href="/kampanyalar">Kampanyalar</Nav>
            <Nav href="/filo-talebi">Filo Talebi</Nav>

            <Nav href="/ek-hizmetler" active>
              Ek Hizmetler
            </Nav>

            <Nav href="/hakkimizda">Hakkımızda</Nav>
            <Nav href="/iletisim">İletişim</Nav>
          </nav>

          {/* TELEFON */}
          <a
            href="tel:08508888098"
            className="ml-auto hidden items-center gap-[11px] xl:flex"
          >
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
              <PhoneIcon />
            </span>

            <span>
              <span className="block text-[8px] font-bold uppercase tracking-[1.4px] text-[#918883]">
                Rezervasyon Hattı
              </span>

              <span className="mt-[3px] block text-[13px] font-extrabold text-[#3D3835]">
                0850 888 80 98
              </span>
            </span>
          </a>

          {/* MOBİL MENÜ */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menü"
            className="ml-auto flex h-[42px] w-[42px] items-center justify-center rounded-[9px] border border-[#E9E2DD] bg-white text-[#514A46] lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-[#EEE8E3] bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              <MobileNav href="/">Ana Sayfa</MobileNav>
              <MobileNav href="/araclarimiz">Araçlarımız</MobileNav>
              <MobileNav href="/kampanyalar">Kampanyalar</MobileNav>
              <MobileNav href="/filo-talebi">Filo Talebi</MobileNav>
              <MobileNav href="/ek-hizmetler">Ek Hizmetler</MobileNav>
              <MobileNav href="/hakkimizda">Hakkımızda</MobileNav>
              <MobileNav href="/iletisim">İletişim</MobileNav>
            </div>
          </div>
        )}
      </header>

      {/* BAŞLIK */}
      <section className="border-b border-[#F0EAE6] bg-[#FBF8F4]">
        <div className="mx-auto max-w-[1180px] px-5 py-[34px] text-center sm:px-6">
          <h1 className="text-[34px] font-extrabold tracking-[-1.4px] text-[#332F2C] md:text-[39px]">
            Ek Hizmetler
          </h1>

          <p className="mx-auto mt-[7px] max-w-[540px] text-[10.5px] font-medium leading-[1.7] text-[#817974]">
            Kiralama deneyiminizi ihtiyacınıza göre tamamlayacak ek hizmetleri
            inceleyin.
          </p>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="bg-white py-[38px]">
        <div className="mx-auto max-w-[1050px] px-5 sm:px-6">

          <div className="grid gap-[14px] sm:grid-cols-2">

            <ServiceCard
              icon={<DriverIcon />}
              title="Ek Sürücü"
              description="Kiralama süresince aracı birden fazla kişinin kullanabilmesi için ek sürücü seçeneği."
            />

            <ServiceCard
              icon={<ChildIcon />}
              title="Çocuk Koltuğu"
              description="Çocuklu yolculuklarınız için rezervasyonunuza çocuk koltuğu talebi ekleyebilirsiniz."
            />

            <ServiceCard
              icon={<PlaneIcon />}
              title="Havalimanı Teslim / İade"
              description="İstanbul Havalimanı ve Sabiha Gökçen için teslim ve iade seçenekleri hakkında bilgi alın."
            />

            <ServiceCard
              icon={<LocationIcon />}
              title="Adrese Teslim / İade"
              description="Uygunluk durumuna göre belirlenen bölgelerde araç teslim ve iade seçeneklerinden yararlanın."
            />

          </div>

          {/* CTA */}
          <div className="mt-[18px] flex flex-col items-start justify-between gap-4 rounded-[15px] border border-[#EAE3DE] bg-[#FBF8F4] px-[24px] py-[18px] sm:flex-row sm:items-center">

            <div>
              <h2 className="text-[14px] font-bold tracking-[-.3px] text-[#393431]">
                Ek hizmet ihtiyacınız mı var?
              </h2>

              <p className="mt-[4px] text-[9px] font-medium text-[#817974]">
                Rezervasyonunuzla birlikte ihtiyacınız olan hizmeti
                belirtebilirsiniz.
              </p>
            </div>

            <a
              href="/#rezervasyon"
              className="group flex h-[42px] shrink-0 items-center gap-[8px] rounded-[8px] bg-[#ED1739] px-[19px] text-[8.5px] font-bold text-white shadow-[0_7px_17px_rgba(237,23,57,.15)] transition hover:bg-[#CE1431]"
            >
              Rezervasyon Oluştur

              <span className="transition-transform group-hover:translate-x-[3px]">
                <ArrowIcon />
              </span>
            </a>

          </div>
        </div>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #ffffff;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        button {
          font-family: inherit;
        }

        .nav-link {
          position: relative;
          color: #514a46;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: -0.15px;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .nav-link:hover {
          color: #ed1739;
        }

        .nav-link.active {
          color: #332f2c;
          font-weight: 800;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -20px;
          width: 24px;
          height: 2px;
          transform: translateX(-50%);
          border-radius: 100px;
          background: #ed1739;
        }
      `}</style>
    </main>
  );
}

/* MENU */

function Nav({
  children,
  href,
  active = false,
}: {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}) {
  return (
    <a href={href} className={`nav-link ${active ? "active" : ""}`}>
      {children}
    </a>
  );
}

function MobileNav({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="border-b border-[#F1ECE8] pb-3 text-[12px] font-bold text-[#514A46]"
    >
      {children}
    </a>
  );
}

/* HİZMET KARTI */

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group flex min-h-[135px] gap-[17px] rounded-[15px] border border-[#ECE5E0] bg-white p-[21px] transition duration-300 hover:-translate-y-[2px] hover:border-[#F0D4D8] hover:shadow-[0_12px_30px_rgba(73,54,45,.06)]">

      <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0F2] text-[#ED1739]">
        {icon}
      </div>

      <div>
        <h2 className="text-[15px] font-bold tracking-[-.35px] text-[#393431]">
          {title}
        </h2>

        <p className="mt-[7px] max-w-[360px] text-[9.5px] font-medium leading-[1.7] text-[#817974]">
          {description}
        </p>
      </div>

    </article>
  );
}

/* ICONS */

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.6 3.5 9 7.4a1.7 1.7 0 0 1-.3 2.1l-1.3 1.2a15.1 15.1 0 0 0 5.9 5.9l1.2-1.3a1.7 1.7 0 0 1 2.1-.3l3.9 2.4a1.7 1.7 0 0 1 .8 1.8l-.4 2a2 2 0 0 1-2 1.6C9.1 22.8 1.2 14.9 1.2 5.1a2 2 0 0 1 1.6-2l2-.4a1.7 1.7 0 0 1 1.8.8Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function DriverIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20c0-4 2.5-7 6-7s6 3 6 7" />
      <path d="M18 8v6M15 11h6" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="6" r="3" />
      <path d="M8 21v-5a4 4 0 0 1 8 0v5" />
      <path d="M8 14H5M16 14h3" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2 9 15" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}