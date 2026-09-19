"use client";

import { Manrope } from "next/font/google";
import { FormEvent, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function FiloTalebiPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

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

            <Nav href="/filo-talebi" active>
              Filo Talebi
            </Nav>

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
      <section className="border-b border-[#F0EAE6] bg-[#FBF8F4]">
        <div className="mx-auto max-w-[1180px] px-5 py-[34px] text-center sm:px-6">
          <h1 className="text-[34px] font-extrabold tracking-[-1.4px] text-[#332F2C] md:text-[39px]">
            Filo Talebi
          </h1>

          <p className="mx-auto mt-[7px] max-w-[540px] text-[10.5px] font-medium leading-[1.7] text-[#817974]">
            İşletmenizin araç ihtiyacını bize iletin, talebinize uygun kiralama
            seçenekleri için sizinle iletişime geçelim.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-[38px]">
        <div className="mx-auto max-w-[920px] px-5 sm:px-6">

          <div className="overflow-hidden rounded-[17px] border border-[#EAE3DE] bg-white shadow-[0_14px_40px_rgba(73,54,45,.05)]">

            {/* FORM HEADER */}
            <div className="flex items-center gap-[13px] border-b border-[#EEE8E3] bg-[#FBF8F4] px-[25px] py-[18px]">
              <div className="flex h-[39px] w-[39px] items-center justify-center rounded-[9px] bg-[#FFF0F2] text-[#ED1739]">
                <BuildingIcon />
              </div>

              <div>
                <h2 className="text-[14px] font-bold text-[#393431]">
                  Filo Kiralama Talep Formu
                </h2>

                <p className="mt-[2px] text-[8.5px] font-medium text-[#8B837E]">
                  İhtiyacınızı kısaca belirtmeniz yeterli.
                </p>
              </div>
            </div>

            {sent ? (
              /* BAŞARI MESAJI */
              <div className="flex min-h-[310px] flex-col items-center justify-center px-6 text-center">

                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
                  <CheckIcon />
                </div>

                <h2 className="mt-[17px] text-[20px] font-bold text-[#332F2C]">
                  Talebiniz alındı.
                </h2>

                <p className="mt-[7px] max-w-[390px] text-[10px] font-medium leading-[1.7] text-[#817974]">
                  Filo kiralama talebiniz başarıyla oluşturuldu. İletişim
                  bilgileriniz üzerinden sizinle iletişime geçilecektir.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-[18px] text-[9px] font-bold text-[#ED1739]"
                >
                  Yeni Talep Oluştur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-[25px]">

                <div className="grid gap-[15px] sm:grid-cols-2">

                  <FormField label="Ad Soyad / Yetkili">
                    <input
                      required
                      type="text"
                      placeholder="Ad Soyad"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="Firma Adı">
                    <input
                      type="text"
                      placeholder="Firma adı"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="Telefon">
                    <input
                      required
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="E-posta">
                    <input
                      required
                      type="email"
                      placeholder="ornek@firma.com"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="Araç Adedi">
                    <select required defaultValue="" className="form-input">
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="1-2">1 - 2 Araç</option>
                      <option value="3-5">3 - 5 Araç</option>
                      <option value="6-10">6 - 10 Araç</option>
                      <option value="11+">11+ Araç</option>
                    </select>
                  </FormField>

                  <FormField label="Kiralama Süresi">
                    <select required defaultValue="" className="form-input">
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="1-3">1 - 3 Ay</option>
                      <option value="3-6">3 - 6 Ay</option>
                      <option value="6-12">6 - 12 Ay</option>
                      <option value="12+">12 Ay ve Üzeri</option>
                    </select>
                  </FormField>

                </div>

                <div className="mt-[15px]">
                  <label className="mb-[6px] block text-[8px] font-bold uppercase tracking-[1px] text-[#746C67]">
                    Talep Detayı
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Araç tipi, kullanım süresi veya diğer ihtiyaçlarınızı yazabilirsiniz..."
                    className="form-input min-h-[90px] resize-none py-[12px]"
                  />
                </div>

                <div className="mt-[18px] flex flex-col gap-[13px] border-t border-[#F0EAE6] pt-[18px] sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-[430px] text-[8px] font-medium leading-[1.6] text-[#9A928D]">
                    Gönderdiğiniz bilgiler yalnızca talebinizin
                    değerlendirilmesi ve sizinle iletişim kurulması amacıyla
                    kullanılacaktır.
                  </p>

                  <button
                    type="submit"
                    className="group flex h-[45px] shrink-0 items-center justify-center gap-[8px] rounded-[8px] bg-[#ED1739] px-[23px] text-[9px] font-bold text-white shadow-[0_7px_17px_rgba(237,23,57,.16)] transition hover:bg-[#CE1431]"
                  >
                    Filo Talebi Gönder

                    <span className="transition-transform group-hover:translate-x-[3px]">
                      <ArrowIcon />
                    </span>
                  </button>

                </div>
              </form>
            )}
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

        button,
        input,
        select,
        textarea {
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

        .form-input {
          width: 100%;
          height: 43px;
          border: 1px solid #e8e1dc;
          border-radius: 8px;
          background: #fff;
          padding: 0 12px;
          color: #433d39;
          font-size: 10px;
          font-weight: 600;
          outline: none;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .form-input::placeholder {
          color: #aaa29d;
          font-weight: 500;
        }

        .form-input:focus {
          border-color: #ed1739;
          box-shadow: 0 0 0 3px rgba(237, 23, 57, 0.06);
        }
      `}</style>
    </main>
  );
}

/* COMPONENTS */

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

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-[6px] block text-[8px] font-bold uppercase tracking-[1px] text-[#746C67]">
        {label}
      </label>

      {children}
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

function BuildingIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
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