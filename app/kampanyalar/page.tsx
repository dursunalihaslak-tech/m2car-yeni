"use client";

import { Manrope } from "next/font/google";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function KampanyalarPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main
      className={`${manrope.className} min-h-screen bg-white text-[#332F2C]`}
    >
      {/* HEADER */}
      <header className="relative z-50 border-b border-[#EEE8E3] border-t-[2px] border-t-[#ED1739] bg-white">
        <div className="mx-auto flex h-[96px] max-w-[1340px] items-center px-5 sm:px-6">

          {/* LOGO - SADECE BURADA VAR */}
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

            <Nav href="/kampanyalar" active>
              Kampanyalar
            </Nav>

            <Nav href="/filo-talebi">Filo Talebi</Nav>
            <Nav href="/ek-hizmetler">Ek Hizmetler</Nav>
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
      <section className="relative overflow-hidden border-b border-[#F0EAE6] bg-[#FBF8F4]">
        <div className="pointer-events-none absolute -right-[180px] -top-[320px] h-[600px] w-[600px] rounded-full border border-[#ED1739]/[0.05]" />

        <div className="relative mx-auto max-w-[1340px] px-5 py-[36px] sm:px-6">
          <div className="text-center">
            <h1 className="text-[34px] font-extrabold tracking-[-1.4px] text-[#332F2C] md:text-[39px]">
              Kampanyalar
            </h1>

            <p className="mx-auto mt-[7px] max-w-[500px] text-[10.5px] font-medium leading-[1.7] text-[#817974]">
              Kiralama ihtiyacınıza uygun fırsat ve avantajları inceleyin.
            </p>
          </div>
        </div>
      </section>

      {/* KAMPANYALAR */}
      <section className="bg-white py-[40px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6">

          <div className="grid gap-[15px] md:grid-cols-3">

            <CampaignCard
              label="Haftalık"
              title="Haftalık Kiralama"
              description="Bir hafta ve üzeri araç ihtiyaçlarınız için uygun kiralama seçeneklerini inceleyin."
              icon={<CalendarIcon />}
            />

            <CampaignCard
              label="Uzun Dönem"
              title="Aylık Kiralama"
              description="Daha uzun süreli araç ihtiyaçlarınız için aylık kiralama alternatiflerini değerlendirin."
              icon={<CarIcon />}
              featured
            />

            <CampaignCard
              label="Fırsatlar"
              title="Dönemsel Kampanyalar"
              description="Yeni kampanya ve kiralama fırsatlarını bu sayfadan takip edebilirsiniz."
              icon={<TagIcon />}
            />

          </div>

          {/* REZERVASYON */}
          <div className="mt-[20px] flex flex-col items-start justify-between gap-4 rounded-[15px] border border-[#EAE3DE] bg-[#FBF8F4] px-[25px] py-[19px] sm:flex-row sm:items-center">

            <div>
              <h2 className="text-[15px] font-bold tracking-[-.3px] text-[#393431]">
                Size uygun kiralama seçeneğini bulun.
              </h2>

              <p className="mt-[4px] text-[9.5px] font-medium text-[#817974]">
                Lokasyon ve tarihlerinizi seçerek uygun araçları görüntüleyin.
              </p>
            </div>

            <a
              href="/#rezervasyon"
              className="group flex h-[43px] shrink-0 items-center gap-[8px] rounded-[8px] bg-[#ED1739] px-[19px] text-[8.5px] font-bold text-white shadow-[0_7px_17px_rgba(237,23,57,.15)] transition hover:bg-[#CE1431]"
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

        html {
          scroll-behavior: smooth;
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

/* =========================
   MENU
========================= */

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
    <a
      href={href}
      className={`nav-link ${active ? "active" : ""}`}
    >
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
      className="border-b border-[#F1ECE8] pb-3 text-[12px] font-bold text-[#514A46] transition hover:text-[#ED1739]"
    >
      {children}
    </a>
  );
}

/* =========================
   KAMPANYA KARTI
========================= */

function CampaignCard({
  label,
  title,
  description,
  icon,
  featured = false,
}: {
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative rounded-[15px] border p-[23px] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_35px_rgba(73,54,45,.07)] ${
        featured
          ? "border-[#F0D4D8] bg-[#FFF8F8]"
          : "border-[#ECE5E0] bg-white"
      }`}
    >
      {featured && (
        <div className="absolute left-0 top-0 h-[3px] w-full rounded-t-[15px] bg-[#ED1739]" />
      )}

      <div className="flex items-start justify-between">
        <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-[#FFF0F2] text-[#ED1739]">
          {icon}
        </div>

        <span className="rounded-full bg-[#FBF0F1] px-[9px] py-[5px] text-[6.5px] font-bold uppercase tracking-[1.1px] text-[#D71935]">
          {label}
        </span>
      </div>

      <h2 className="mt-[17px] text-[17px] font-bold tracking-[-.45px] text-[#393431]">
        {title}
      </h2>

      <p className="mt-[7px] min-h-[45px] text-[9.5px] font-medium leading-[1.7] text-[#807873]">
        {description}
      </p>

      <a
        href="/#rezervasyon"
        className="mt-[15px] inline-flex items-center gap-[6px] text-[8.5px] font-bold text-[#D71935]"
      >
        İncele
        <ArrowIcon />
      </a>
    </article>
  );
}

/* =========================
   ICONS
========================= */

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
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

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 11 1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <path d="M3 11h18v7H3z" />
      <circle cx="7" cy="15" r="1" />
      <circle cx="17" cy="15" r="1" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13 11 22l-9-9V4h9l9 9Z" />
      <circle cx="7" cy="9" r="1.5" />
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