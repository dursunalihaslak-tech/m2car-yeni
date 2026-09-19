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
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      adSoyad: formData.get("adSoyad"),
      firma: formData.get("firma"),
      telefon: formData.get("telefon"),
      email: formData.get("email"),
      aracAdedi: formData.get("aracAdedi"),
      kiralamaSuresi: formData.get("kiralamaSuresi"),
      talepDetayi: formData.get("talepDetayi"),
    };

    try {
      const response = await fetch("/api/filo-talebi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Talebiniz gönderilirken bir hata oluştu."
        );
      }

      form.reset();
      setSent(true);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Talebiniz gönderilirken bir hata oluştu."
      );
    } finally {
      setSending(false);
    }
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
              <span className="block text-[9px] font-bold uppercase tracking-[1.4px] text-[#817974]">
                Rezervasyon Hattı
              </span>

              <span className="mt-[3px] block text-[14px] font-extrabold text-[#3D3835]">
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
        <div className="mx-auto max-w-[1180px] px-5 py-[38px] text-center sm:px-6">

          <h1 className="text-[36px] font-extrabold tracking-[-1.4px] text-[#302C29] md:text-[41px]">
            Filo Talebi
          </h1>

          <p className="mx-auto mt-[9px] max-w-[560px] text-[11px] font-semibold leading-[1.75] text-[#756D68]">
            İşletmenizin araç ihtiyacını bize iletin, talebinize uygun kiralama
            seçenekleri için sizinle iletişime geçelim.
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-[42px]">
        <div className="mx-auto max-w-[920px] px-5 sm:px-6">

          <div className="overflow-hidden rounded-[17px] border border-[#E6DED9] bg-white shadow-[0_14px_40px_rgba(73,54,45,.06)]">

            {/* FORM HEADER */}
            <div className="flex items-center gap-[13px] border-b border-[#EEE8E3] bg-[#FBF8F4] px-[25px] py-[20px]">

              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[#FFF0F2] text-[#ED1739]">
                <BuildingIcon />
              </div>

              <div>
                <h2 className="text-[15px] font-extrabold text-[#35312E]">
                  Filo Kiralama Talep Formu
                </h2>

                <p className="mt-[3px] text-[9.5px] font-semibold text-[#7D746F]">
                  İhtiyacınızı kısaca belirtmeniz yeterli.
                </p>
              </div>

            </div>

            {sent ? (

              /* BAŞARI MESAJI */
              <div className="flex min-h-[310px] flex-col items-center justify-center px-6 text-center">

                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
                  <CheckIcon />
                </div>

                <h2 className="mt-[18px] text-[21px] font-extrabold text-[#332F2C]">
                  Talebiniz alındı.
                </h2>

                <p className="mt-[8px] max-w-[410px] text-[10.5px] font-semibold leading-[1.7] text-[#756D68]">
                  Filo kiralama talebiniz başarıyla oluşturuldu. İletişim
                  bilgileriniz üzerinden sizinle iletişime geçilecektir.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setErrorMessage("");
                  }}
                  className="mt-[19px] text-[10px] font-extrabold text-[#ED1739] transition hover:text-[#C91431]"
                >
                  Yeni Talep Oluştur
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="p-[25px]">

                <div className="grid gap-[17px] sm:grid-cols-2">

                  <FormField label="Ad Soyad / Yetkili">
                    <input
                      required
                      name="adSoyad"
                      type="text"
                      placeholder="Ad Soyad"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="Firma Adı">
                    <input
                      name="firma"
                      type="text"
                      placeholder="Firma adı"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="Telefon">
                    <input
                      required
                      name="telefon"
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="E-posta">
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="ornek@firma.com"
                      className="form-input"
                    />
                  </FormField>

                  <FormField label="Araç Adedi">
                    <select
                      required
                      name="aracAdedi"
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>

                      <option value="1-2">
                        1 - 2 Araç
                      </option>

                      <option value="3-5">
                        3 - 5 Araç
                      </option>

                      <option value="6-10">
                        6 - 10 Araç
                      </option>

                      <option value="11+">
                        11+ Araç
                      </option>
                    </select>
                  </FormField>

                  <FormField label="Kiralama Süresi">
                    <select
                      required
                      name="kiralamaSuresi"
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>

                      <option value="1-3">
                        1 - 3 Ay
                      </option>

                      <option value="3-6">
                        3 - 6 Ay
                      </option>

                      <option value="6-12">
                        6 - 12 Ay
                      </option>

                      <option value="12+">
                        12 Ay ve Üzeri
                      </option>
                    </select>
                  </FormField>

                </div>

                {/* TALEP DETAYI */}
                <div className="mt-[17px]">

                  <label className="mb-[7px] block text-[8.5px] font-extrabold uppercase tracking-[1px] text-[#625A55]">
                    Talep Detayı
                  </label>

                  <textarea
                    name="talepDetayi"
                    rows={4}
                    placeholder="Araç tipi, kullanım süresi veya diğer ihtiyaçlarınızı yazabilirsiniz..."
                    className="form-input textarea-input min-h-[100px] resize-none py-[12px]"
                  />

                </div>

                {/* HATA */}
                {errorMessage && (
                  <div className="mt-[15px] rounded-[8px] border border-[#FFD5DC] bg-[#FFF4F6] px-[13px] py-[11px] text-[9.5px] font-bold text-[#C81735]">
                    {errorMessage}
                  </div>
                )}

                {/* ALT ALAN */}
                <div className="mt-[20px] flex flex-col gap-[15px] border-t border-[#F0EAE6] pt-[20px] sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-[430px] text-[8.5px] font-semibold leading-[1.7] text-[#89807B]">
                    Gönderdiğiniz bilgiler yalnızca talebinizin
                    değerlendirilmesi ve sizinle iletişim kurulması amacıyla
                    kullanılacaktır.
                  </p>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex h-[47px] shrink-0 items-center justify-center gap-[9px] rounded-[8px] bg-[#ED1739] px-[25px] text-[9.5px] font-extrabold text-white shadow-[0_7px_17px_rgba(237,23,57,.18)] transition hover:bg-[#CE1431] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending
                      ? "Gönderiliyor..."
                      : "Filo Talebi Gönder"}

                    {!sending && (
                      <span className="transition-transform group-hover:translate-x-[3px]">
                        <ArrowIcon />
                      </span>
                    )}
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
          color: #4b4541;
          font-size: 12px;
          font-weight: 800;
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
          height: 45px;
          border: 1px solid #e2dad5;
          border-radius: 8px;
          background: #ffffff;
          padding: 0 13px;
          color: #3c3734;
          font-size: 10.5px;
          font-weight: 700;
          outline: none;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .form-input:hover {
          border-color: #d5cbc5;
        }

        .form-input::placeholder {
          color: #9b928d;
          font-weight: 600;
        }

        .form-input:focus {
          border-color: #ed1739;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(237, 23, 57, 0.07);
        }

        select.form-input {
          cursor: pointer;
        }

        textarea.form-input {
          height: auto;
          line-height: 1.6;
          font-weight: 600;
        }

        textarea.form-input::placeholder {
          line-height: 1.6;
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
      className="border-b border-[#F1ECE8] pb-3 text-[12px] font-extrabold text-[#514A46]"
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
      <label className="mb-[7px] block text-[8.5px] font-extrabold uppercase tracking-[1px] text-[#625A55]">
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
      strokeWidth="1.8"
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
      strokeWidth="2.2"
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