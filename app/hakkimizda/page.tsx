"use client";

import { Manrope } from "next/font/google";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function HakkimizdaPage() {
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

          {/* MENÜ */}
          <nav className="hidden flex-1 items-center justify-center gap-[29px] lg:flex">
            <Nav href="/">Ana Sayfa</Nav>
            <Nav href="/araclarimiz">Araçlarımız</Nav>
            <Nav href="/kampanyalar">Kampanyalar</Nav>
            <Nav href="/filo-talebi">Filo Talebi</Nav>
            <Nav href="/ek-hizmetler">Ek Hizmetler</Nav>

            <Nav href="/hakkimizda" active>
              Hakkımızda
            </Nav>

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

      {/* SAYFA BAŞLIĞI */}
      <section className="border-b border-[#F0EAE6] bg-[#FBF8F4]">
        <div className="mx-auto max-w-[1180px] px-5 py-[34px] text-center sm:px-6">
          <h1 className="text-[34px] font-extrabold tracking-[-1.4px] text-[#332F2C] md:text-[39px]">
            Hakkımızda
          </h1>

          <p className="mx-auto mt-[8px] max-w-[620px] text-[13px] font-medium leading-[1.7] text-[#817974]">
            Bireysel ve kurumsal araç kiralama ihtiyaçlarına güvenilir,
            hızlı ve kolay çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* ANA İÇERİK */}
      <section className="bg-white py-[36px]">
        <div className="mx-auto max-w-[1050px] px-5 sm:px-6">
          {/* KURUMSAL TANITIM */}
          <div className="grid overflow-hidden rounded-[16px] border border-[#EAE3DE] bg-white md:grid-cols-[1.3fr_.7fr]">
            {/* SOL */}
            <div className="px-[28px] py-[29px] sm:px-[34px]">
              <div className="mb-[14px] h-[3px] w-[38px] rounded-full bg-[#ED1739]" />

              <h2 className="text-[23px] font-extrabold leading-[1.3] tracking-[-.6px] text-[#332F2C]">
                Araç kiralamada güvenilir hizmet anlayışı
              </h2>

              <p className="mt-[15px] text-[14px] font-medium leading-[1.75] text-[#766F6A]">
                Beylikdüzü merkezli olarak günlük, haftalık ve aylık araç
                kiralama hizmetleri sunuyoruz. Bireysel müşterilerimizin yanı
                sıra işletmelerin ve kurumsal müşterilerin dönemsel araç
                ihtiyaçlarına da çözümler sunuyoruz.
              </p>

              <p className="mt-[12px] text-[14px] font-medium leading-[1.75] text-[#766F6A]">
                Hizmet anlayışımızın temelinde açık iletişim, kolay rezervasyon
                ve müşterinin ihtiyacına uygun araç seçimi yer alır. Kiralama
                öncesinden araç teslimine kadar sürecin anlaşılır, düzenli ve
                hızlı ilerlemesini önemsiyoruz.
              </p>

              <p className="mt-[12px] text-[14px] font-medium leading-[1.75] text-[#766F6A]">
                İstanbul&apos;un Avrupa Yakası başta olmak üzere farklı teslim
                ve iade seçenekleriyle araç kiralama sürecini müşterilerimiz
                için daha ulaşılabilir hale getirmeyi amaçlıyoruz.
              </p>
            </div>

            {/* SAĞ */}
            <div className="border-t border-[#EEE8E3] bg-[#FBF8F4] px-[24px] py-[27px] md:border-l md:border-t-0">
              <h3 className="text-[16px] font-extrabold text-[#3D3835]">
                Hizmetlerimiz
              </h3>

              <div className="mt-[16px] space-y-[10px]">
                <Feature
                  icon={<CarIcon />}
                  title="Araç Kiralama"
                  text="Günlük, haftalık ve aylık kiralama seçenekleri"
                />

                <Feature
                  icon={<BuildingIcon />}
                  title="Kurumsal Kiralama"
                  text="İşletmelere yönelik filo kiralama çözümleri"
                />

                <Feature
                  icon={<LocationIcon />}
                  title="Teslimat Seçenekleri"
                  text="Bölge ve uygunluğa göre teslim ve iade hizmeti"
                />

                <Feature
                  icon={<SupportIcon />}
                  title="Müşteri Desteği"
                  text="Kiralama sürecinde ulaşılabilir destek"
                />
              </div>
            </div>
          </div>

          {/* ÇALIŞMA ANLAYIŞIMIZ */}
          <div className="mt-[16px] rounded-[16px] border border-[#EAE3DE] bg-white px-[28px] py-[24px] sm:px-[32px]">
            <div className="grid gap-[24px] md:grid-cols-[.65fr_1.35fr] md:items-center">
              <div>
                <h2 className="text-[19px] font-extrabold tracking-[-.4px] text-[#332F2C]">
                  Çalışma Anlayışımız
                </h2>

                <p className="mt-[7px] text-[13px] font-medium leading-[1.65] text-[#817974]">
                  Kiralama sürecinin her aşamasında açık, düzenli ve
                  ulaşılabilir bir hizmet sunmayı önemsiyoruz.
                </p>
              </div>

              <div className="grid gap-[15px] sm:grid-cols-3">
                <Approach
                  title="Şeffaf Süreç"
                  text="Kiralama koşullarının açık ve anlaşılır şekilde sunulması."
                />

                <Approach
                  title="İhtiyaca Uygun Araç"
                  text="Kullanım amacına ve kiralama süresine uygun araç seçenekleri."
                />

                <Approach
                  title="Hızlı İletişim"
                  text="Rezervasyon ve kiralama sürecinde kolay ulaşılabilirlik."
                />
              </div>
            </div>
          </div>

          {/* ALT CTA */}
          <div className="mt-[16px] flex flex-col items-start justify-between gap-4 rounded-[15px] border border-[#EAE3DE] bg-[#FBF8F4] px-[25px] py-[19px] sm:flex-row sm:items-center">
            <div>
              <h3 className="text-[15px] font-bold text-[#393431]">
                Araç kiralama ihtiyacınız için rezervasyon oluşturun.
              </h3>

              <p className="mt-[5px] text-[12px] font-medium text-[#817974]">
                Teslim noktanızı ve tarihlerinizi belirleyerek uygun araçları
                inceleyebilirsiniz.
              </p>
            </div>

            <a
              href="/#rezervasyon"
              className="group flex h-[44px] shrink-0 items-center gap-[8px] rounded-[8px] bg-[#ED1739] px-[21px] text-[11px] font-bold text-white shadow-[0_7px_17px_rgba(237,23,57,.15)] transition hover:bg-[#CE1431]"
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

/* MENÜ */

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

/* HİZMETLER */

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-[12px] rounded-[10px] border border-[#EEE7E2] bg-white px-[13px] py-[12px]">
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[8px] bg-[#FFF0F2] text-[#ED1739]">
        {icon}
      </div>

      <div>
        <div className="text-[13px] font-bold text-[#403A36]">
          {title}
        </div>

        <div className="mt-[3px] text-[11px] font-medium leading-[1.45] text-[#918984]">
          {text}
        </div>
      </div>
    </div>
  );
}

/* ÇALIŞMA ANLAYIŞI */

function Approach({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-l-[2px] border-[#ED1739] pl-[13px]">
      <h3 className="text-[13px] font-bold text-[#403A36]">
        {title}
      </h3>

      <p className="mt-[5px] text-[11px] font-medium leading-[1.55] text-[#8B837E]">
        {text}
      </p>
    </div>
  );
}

/* ICONS */

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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17h14" />
      <path d="M6 17v2M18 17v2" />
      <path d="M3 12l2-5h14l2 5v5H3v-5Z" />
      <circle cx="7" cy="14" r="1" />
      <circle cx="17" cy="14" r="1" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2v1Z" />
      <path d="M20 14a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1Z" />
      <path d="M17 18c-1 2-3 2-5 2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
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