"use client";

import { Manrope } from "next/font/google";
import { FormEvent, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const googleMapsUrl =
  "https://www.google.com/maps/place/M2Car+Ara%C3%A7+Kiralama-Beylikd%C3%BCz%C3%BC/@41.012022,28.6404721,17z/data=!3m1!4b1!4m6!3m5!1s0x14b55f31e872e13d:0x15a054b87736fa7e!8m2!3d41.012022!4d28.643047!16s%2Fg%2F11yfgpwm52";

const whatsappUrl =
  "https://wa.me/905336027805?text=Merhaba%20M2Car%2C%20ara%C3%A7%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function IletisimPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/iletisim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adSoyad: formData.get("adSoyad"),
          telefon: formData.get("telefon"),
          email: formData.get("email"),
          konu: formData.get("konu"),
          mesaj: formData.get("mesaj"),
        }),
      });

      if (!response.ok) {
        throw new Error("Mesaj gönderilemedi.");
      }

      form.reset();
      setSent(true);
    } catch {
      setErrorMessage(
        "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin veya bizi telefonla arayın."
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
          <a
            href="/"
            aria-label="M2CAR Araç Kiralama"
            className="flex shrink-0 items-center"
          >
            <div className="relative flex h-[64px] w-[165px] items-center justify-center overflow-hidden rounded-[12px] bg-[#ED1739] shadow-[0_10px_27px_rgba(237,23,57,.18)]">
              <div className="absolute -right-[32px] -top-[58px] h-[125px] w-[125px] rounded-full border border-white/[0.08]" />

              <div className="relative text-center">
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
            <Nav href="/hakkimizda">Hakkımızda</Nav>
            <Nav href="/iletisim" active>
              İletişim
            </Nav>
          </nav>

          {/* REZERVASYON HATTI */}
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

        {/* MOBİL MENÜ AÇILIR ALAN */}
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
        <div className="mx-auto max-w-[1180px] px-5 py-[32px] text-center sm:px-6">
          <h1 className="text-[34px] font-extrabold tracking-[-1.4px] text-[#332F2C] md:text-[39px]">
            İletişim
          </h1>

          <p className="mx-auto mt-[8px] max-w-[620px] text-[13px] font-medium leading-[1.7] text-[#817974]">
            Rezervasyon, araç kiralama ve diğer talepleriniz için bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* İLETİŞİM ALANI */}
      <section className="bg-white py-[32px]">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-6">
          {/* ÜST BİLGİ KARTLARI */}
          <div className="grid gap-[12px] md:grid-cols-3">
            {/* TELEFON */}
            <a
              href="tel:08508888098"
              className="group flex items-center gap-[14px] rounded-[14px] border border-[#EAE3DE] bg-white p-[18px] transition hover:border-[#F1CDD3] hover:shadow-[0_10px_25px_rgba(73,54,45,.05)]"
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#FFF0F2] text-[#ED1739] transition group-hover:bg-[#ED1739] group-hover:text-white">
                <PhoneIcon />
              </div>

              <div>
                <div className="text-[11px] font-semibold text-[#918984]">
                  Rezervasyon Hattı
                </div>

                <div className="mt-[3px] text-[14px] font-extrabold text-[#3D3835]">
                  0850 888 80 98
                </div>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-[14px] rounded-[14px] border border-[#EAE3DE] bg-white p-[18px] transition hover:border-[#F1CDD3] hover:shadow-[0_10px_25px_rgba(73,54,45,.05)]"
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#FFF0F2] text-[#ED1739] transition group-hover:bg-[#ED1739] group-hover:text-white">
                <WhatsAppIcon />
              </div>

              <div>
                <div className="text-[11px] font-semibold text-[#918984]">
                  WhatsApp
                </div>

                <div className="mt-[3px] text-[14px] font-extrabold text-[#3D3835]">
                  0533 602 78 05
                </div>
              </div>
            </a>

            {/* E-POSTA */}
            <a
              href="mailto:info@m2car.com.tr"
              className="group flex items-center gap-[14px] rounded-[14px] border border-[#EAE3DE] bg-white p-[18px] transition hover:border-[#F1CDD3] hover:shadow-[0_10px_25px_rgba(73,54,45,.05)]"
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#FFF0F2] text-[#ED1739] transition group-hover:bg-[#ED1739] group-hover:text-white">
                <MailIcon />
              </div>

              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-[#918984]">
                  E-posta
                </div>

                <div className="mt-[3px] break-all text-[14px] font-extrabold text-[#3D3835]">
                  info@m2car.com.tr
                </div>
              </div>
            </a>
          </div>

          {/* HARİTA VE MESAJ FORMU */}
          <div className="mt-[14px] grid overflow-hidden rounded-[17px] border border-[#EAE3DE] bg-white md:grid-cols-2">
            {/* SOL - HARİTA */}
            <div className="bg-[#FBF8F4]">
              <div className="border-b border-[#EAE3DE] px-[23px] py-[18px]">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-[18px] font-extrabold text-[#332F2C]">
                      Ofisimiz
                    </h2>

                    <p className="mt-[7px] max-w-[430px] text-[13px] font-medium leading-[1.65] text-[#817974]">
                      BEYCİTY ÇARŞI, Cumhuriyet, Atatürk Blv. No:3 C117,
                      34519 Beylikdüzü / İstanbul
                    </p>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-[10px] inline-flex items-center gap-[6px] text-[12px] font-bold text-[#ED1739] transition hover:text-[#C91430]"
                >
                  Google Haritalar&apos;da Aç
                  <ArrowIcon />
                </a>
              </div>

              {/* GOOGLE MAPS */}
              <div className="h-[360px] w-full bg-[#F5F1EE]">
                <iframe
                  title="M2Car Araç Kiralama Beylikdüzü"
                  src="https://www.google.com/maps?q=M2Car%20Ara%C3%A7%20Kiralama-Beylikd%C3%BCz%C3%BC&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* SAĞ - MESAJ FORMU */}
            <div className="px-[25px] py-[25px] sm:px-[30px]">
              {sent ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
                    <CheckIcon />
                  </div>

                  <h2 className="mt-[18px] text-[21px] font-extrabold text-[#332F2C]">
                    Mesajınız gönderildi.
                  </h2>

                  <p className="mt-[8px] max-w-[390px] text-[13px] font-medium leading-[1.7] text-[#817974]">
                    Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-[19px] text-[12px] font-bold text-[#ED1739]"
                  >
                    Yeni Mesaj Oluştur
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-[19px] font-extrabold tracking-[-.4px] text-[#332F2C]">
                    Bize Mesaj Gönderin
                  </h2>

                  <p className="mt-[6px] text-[12px] font-medium leading-[1.6] text-[#817974]">
                    Talebinizi bırakın, iletişim bilgileriniz üzerinden sizinle
                    iletişime geçelim.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-[19px]">
                    <div className="grid gap-[13px] sm:grid-cols-2">
                      <FormField label="Ad Soyad">
                        <input
                          required
                          type="text"
                          name="adSoyad"
                          placeholder="Ad Soyad"
                          className="form-input"
                        />
                      </FormField>

                      <FormField label="Telefon">
                        <input
                          required
                          type="tel"
                          name="telefon"
                          placeholder="05xx xxx xx xx"
                          className="form-input"
                        />
                      </FormField>

                      <FormField label="E-posta">
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="ornek@email.com"
                          className="form-input"
                        />
                      </FormField>

                      <FormField label="Konu">
                        <select
                          required
                          name="konu"
                          defaultValue=""
                          className="form-input"
                        >
                          <option value="" disabled>
                            Seçiniz
                          </option>

                          <option value="rezervasyon">Rezervasyon</option>
                          <option value="arac-kiralama">Araç Kiralama</option>
                          <option value="kurumsal">Kurumsal Kiralama</option>
                          <option value="filo">Filo Talebi</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </FormField>
                    </div>

                    <div className="mt-[13px]">
                      <FormField label="Mesajınız">
                        <textarea
                          required
                          name="mesaj"
                          rows={5}
                          placeholder="Talebinizi kısaca yazabilirsiniz..."
                          className="form-input min-h-[110px] resize-none py-[12px]"
                        />
                      </FormField>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="mt-[16px] flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[8px] bg-[#ED1739] px-[22px] text-[12px] font-bold text-white shadow-[0_7px_17px_rgba(237,23,57,.16)] transition hover:bg-[#CE1431] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {sending ? "Gönderiliyor..." : "Mesajı Gönder"}
                      {!sending && <ArrowIcon />}
                    </button>

                    {errorMessage && (
                      <p className="mt-[10px] text-center text-[10px] font-bold leading-[1.5] text-[#D71935]">
                        {errorMessage}
                      </p>
                    )}

                    <p className="mt-[10px] text-center text-[10px] font-medium leading-[1.5] text-[#9A928D]">
                      Bilgileriniz yalnızca talebinizle ilgili iletişim
                      kurulması amacıyla kullanılacaktır.
                    </p>
                  </form>
                </>
              )}
            </div>
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
          height: 44px;
          border: 1px solid #e8e1dc;
          border-radius: 8px;
          background: #ffffff;
          padding: 0 13px;
          color: #433d39;
          font-size: 12px;
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

        select.form-input {
          cursor: pointer;
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
      <label className="mb-[6px] block text-[11px] font-bold text-[#625B57]">
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
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.52 2 2.03 6.48 2.03 12c0 1.76.46 3.48 1.33 4.99L2 22l5.14-1.35A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.05.8.81-2.97-.2-.31A8.17 8.17 0 1 1 12.04 20.18Zm4.48-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22a7.42 7.42 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.23-.17-.47-.29Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="26"
      height="26"
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