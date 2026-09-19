"use client";

import { Manrope } from "next/font/google";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const locations = [
  "BEYLİKDÜZÜ",
  "ESENYURT",
  "AVCILAR",
  "BÜYÜKÇEKMECE",
  "TÜYAP",
  "İSTANBUL HAVALİMANI",
  "SABİHA GÖKÇEN HAVALİMANI",
];

export default function Home() {
  const [rentalType, setRentalType] = useState<"daily" | "monthly">("daily");
  const [differentReturn, setDifferentReturn] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main
      className={`${manrope.className} min-h-screen overflow-x-hidden bg-[#FBF9F6] text-[#332F2C]`}
    >
      {/* HEADER */}
      <header className="relative z-50 border-t-2 border-[#ED1739] border-b border-[#EEE8E3] bg-white">
        <div className="mx-auto flex h-[82px] max-w-[1340px] items-center px-5 sm:px-6">
          {/* LOGO */}
          <a
            href="/"
            aria-label="M2CAR Araç Kiralama"
            className="flex shrink-0 items-center"
          >
            <div className="relative flex h-[64px] w-[165px] items-center justify-center overflow-hidden rounded-[12px] bg-[#ED1739] shadow-[0_8px_22px_rgba(237,23,57,.16)]">
              <div className="text-center">
                <div className="text-[26px] font-extrabold leading-none tracking-[-1.7px] text-white">
                  M2CAR
                </div>

                <div className="mt-[7px] text-[7px] font-extrabold uppercase tracking-[2.3px] text-white/80">
                  ARAÇ KİRALAMA
                </div>
              </div>
            </div>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-[31px] lg:flex">
            <Nav href="/" active>
              Ana Sayfa
            </Nav>

            <Nav href="/araclarimiz">Araçlarımız</Nav>
            <Nav href="/kampanyalar">Kampanyalar</Nav>
            <Nav href="/filo-talebi">Filo Talebi</Nav>
            <Nav href="/ek-hizmetler">Ek Hizmetler</Nav>
            <Nav href="/hakkimizda">Hakkımızda</Nav>
            <Nav href="/iletisim">İletişim</Nav>
          </nav>

          <a
            href="tel:08508888098"
            className="ml-auto hidden shrink-0 items-center gap-[11px] xl:flex"
          >
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
              <PhoneIcon />
            </span>

            <span>
              <span className="block text-[9px] font-extrabold uppercase tracking-[1.4px] text-[#918883]">
                Rezervasyon Hattı
              </span>

              <span className="mt-[2px] block text-[14px] font-extrabold text-[#332F2C]">
                0850 888 80 98
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="ml-auto flex h-[42px] w-[42px] items-center justify-center rounded-[9px] border border-[#E9E2DD] bg-white lg:hidden"
            aria-label="Menü"
          >
            <MenuIcon />
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-[#EEE8E3] bg-white px-5 py-3 lg:hidden">
            <div className="mx-auto flex max-w-[1340px] flex-col">
              <MobileNav href="/" active>
                Ana Sayfa
              </MobileNav>

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

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FBF9F6]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[250px] -top-[300px] h-[600px] w-[600px] rounded-full bg-white/70 blur-[90px]" />
          <div className="absolute right-[4%] top-[10px] h-[300px] w-[480px] rounded-full bg-[#FBE7E9]/40 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-[1340px] px-5 pb-[31px] pt-[30px] sm:px-6">
          {/* HERO ÜST */}
          <div className="grid min-h-[270px] items-center gap-[30px] lg:grid-cols-[.82fr_1.18fr]">
            {/* SOL */}
            <div className="relative z-20 py-[25px] lg:pl-[15px]">
              <div className="mb-[14px] flex items-center gap-[9px]">
                <span className="h-[2px] w-[28px] rounded-full bg-[#ED1739]" />

                <span className="text-[8px] font-extrabold uppercase tracking-[2px] text-[#D71935]">
                  Araç Kiralama
                </span>
              </div>

              <h1 className="max-w-[560px] text-[42px] font-extrabold leading-[1.03] tracking-[-2.2px] text-[#332F2C] sm:text-[49px] lg:text-[55px]">
                Yola Çıkmanın
                <span className="block text-[#ED1739]">En Kolay Yolu.</span>
              </h1>

              <p className="mt-[14px] max-w-[500px] text-[12px] font-semibold leading-[1.75] text-[#746C67]">
                İhtiyacınıza uygun aracı seçin, rezervasyonunuzu kolayca
                oluşturun ve yolculuğunuzu planlayın.
              </p>
            </div>

            {/* SAĞ - HERO GÖRSELİ */}
            <div className="relative hidden h-[270px] lg:block">
              <div className="absolute inset-0 overflow-hidden rounded-[105px_18px_105px_18px] border border-[#EAE2DC] bg-[#F2ECE7] shadow-[0_18px_45px_rgba(72,52,43,.10)]">
                <img
                  src="/hero-road.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* MOBİL HERO GÖRSELİ */}
            <div className="relative h-[210px] overflow-hidden rounded-[55px_14px_55px_14px] border border-[#EAE2DC] bg-[#F2ECE7] shadow-[0_14px_35px_rgba(72,52,43,.08)] lg:hidden">
              <img
                src="/hero-road.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* REZERVASYON */}
          <div
            id="rezervasyon"
            className="relative z-20 mx-auto mt-[18px] max-w-[1220px]"
          >
            <div className="mb-[10px] flex flex-col gap-3 px-[2px] sm:flex-row sm:items-end sm:justify-between">
              <div className="inline-flex w-fit items-center rounded-[11px] border border-[#E7DED8] bg-white p-[4px] shadow-[0_5px_18px_rgba(73,54,45,.05)]">
                <button
                  type="button"
                  onClick={() => setRentalType("daily")}
                  className={`min-w-[155px] rounded-[8px] px-[22px] py-[11px] text-[11px] font-extrabold transition ${
                    rentalType === "daily"
                      ? "bg-[#ED1739] text-white shadow-[0_5px_14px_rgba(237,23,57,.18)]"
                      : "text-[#514A46] hover:bg-[#FBF7F4]"
                  }`}
                >
                  Günlük Kiralama
                </button>

                <button
                  type="button"
                  onClick={() => setRentalType("monthly")}
                  className={`min-w-[155px] rounded-[8px] px-[22px] py-[11px] text-[11px] font-extrabold transition ${
                    rentalType === "monthly"
                      ? "bg-[#ED1739] text-white shadow-[0_5px_14px_rgba(237,23,57,.18)]"
                      : "text-[#514A46] hover:bg-[#FBF7F4]"
                  }`}
                >
                  Aylık Kiralama
                </button>
              </div>

              <div className="hidden items-center gap-[7px] text-[10px] font-semibold text-[#817974] sm:flex">
                <ShieldIcon />
                Rezervasyonunuzu birkaç adımda oluşturun
              </div>
            </div>

            <div className="overflow-hidden rounded-[15px] border border-[#E9E1DB] bg-white shadow-[0_18px_42px_rgba(73,52,43,.09)]">
              <div className="grid lg:grid-cols-[1.35fr_1.18fr_1.18fr_.82fr]">
                <div className="reservation-field">
                  <label className="reservation-label">Alış Lokasyonu</label>

                  <div className="flex items-center gap-[11px]">
                    <span className="text-[#ED1739]">
                      <LocationIcon />
                    </span>

                    <select
                      defaultValue="BEYLİKDÜZÜ"
                      className="w-full cursor-pointer appearance-none bg-transparent text-[12px] font-extrabold text-[#3D3835] outline-none"
                    >
                      {locations.map((location) => (
                        <option key={location}>{location}</option>
                      ))}
                    </select>

                    <ChevronIcon />
                  </div>
                </div>

                <div className="reservation-field">
                  <label className="reservation-label">
                    Alış Tarihi ve Saati
                  </label>

                  <div className="flex items-center gap-[10px]">
                    <div className="flex min-w-0 flex-1 items-center gap-[7px]">
                      <CalendarSmallIcon />

                      <input
                        type="date"
                        className="min-w-0 w-full bg-transparent text-[11px] font-bold text-[#514A46] outline-none"
                      />
                    </div>

                    <div className="h-[26px] w-px bg-[#EAE3DE]" />

                    <div className="flex w-[82px] items-center gap-[6px]">
                      <ClockIcon />

                      <input
                        type="time"
                        defaultValue="10:00"
                        className="min-w-0 w-full bg-transparent text-[11px] font-bold text-[#514A46] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="reservation-field">
                  <label className="reservation-label">
                    İade Tarihi ve Saati
                  </label>

                  <div className="flex items-center gap-[10px]">
                    <div className="flex min-w-0 flex-1 items-center gap-[7px]">
                      <CalendarSmallIcon />

                      <input
                        type="date"
                        className="min-w-0 w-full bg-transparent text-[11px] font-bold text-[#514A46] outline-none"
                      />
                    </div>

                    <div className="h-[26px] w-px bg-[#EAE3DE]" />

                    <div className="flex w-[82px] items-center gap-[6px]">
                      <ClockIcon />

                      <input
                        type="time"
                        defaultValue="10:00"
                        className="min-w-0 w-full bg-transparent text-[11px] font-bold text-[#514A46] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-[9px]">
                  <a
                    href="/araclarimiz"
                    className="group flex h-[54px] w-full items-center justify-center gap-[8px] rounded-[9px] bg-[#ED1739] px-[13px] text-[11px] font-extrabold text-white shadow-[0_7px_18px_rgba(237,23,57,.17)] transition hover:bg-[#D71935]"
                  >
                    Uygun Araçları Gör
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-[25px] gap-y-[8px] border-t border-[#F0EAE6] px-[18px] py-[10px]">
                <label className="flex cursor-pointer items-center gap-[8px] text-[10px] font-semibold text-[#716965]">
                  <input
                    type="checkbox"
                    checked={differentReturn}
                    onChange={(e) => setDifferentReturn(e.target.checked)}
                    className="h-[14px] w-[14px] accent-[#ED1739]"
                  />
                  Farklı bir noktaya iade etmek istiyorum
                </label>

                <button
                  type="button"
                  onClick={() => setPromoOpen(!promoOpen)}
                  className="text-[10px] font-semibold text-[#716965] hover:text-[#ED1739]"
                >
                  {promoOpen
                    ? "− Promosyon kodunu kapat"
                    : "+ Promosyon kodum var"}
                </button>
              </div>

              {(differentReturn || promoOpen) && (
                <div className="grid gap-[13px] border-t border-[#F0EAE6] bg-[#FCFAF8] px-[18px] py-[13px] md:grid-cols-2">
                  {differentReturn && (
                    <div>
                      <label className="reservation-label">
                        Teslim Lokasyonu
                      </label>

                      <select className="h-[43px] w-full rounded-[8px] border border-[#E4DDD7] bg-white px-[13px] text-[11px] font-semibold text-[#514A46] outline-none">
                        {locations.map((location) => (
                          <option key={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {promoOpen && (
                    <div>
                      <label className="reservation-label">
                        Promosyon Kodu
                      </label>

                      <input
                        type="text"
                        placeholder="Promosyon kodunuzu girin"
                        className="h-[43px] w-full rounded-[8px] border border-[#E4DDD7] bg-white px-[13px] text-[11px] font-semibold text-[#514A46] outline-none"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* AVANTAJLAR */}
          <div className="mx-auto mt-[18px] grid max-w-[930px] grid-cols-2 gap-x-[20px] gap-y-[11px] sm:grid-cols-4">
            <HeroBenefit text="Günlük Kiralama" />
            <HeroBenefit text="Haftalık Kiralama" />
            <HeroBenefit text="Aylık Kiralama" />
            <HeroBenefit text="Havalimanı Teslimatı" />
          </div>
        </div>
      </section>

      {/* KİRALAMA SEÇENEKLERİ */}
      <section className="bg-[#FBF9F6] py-[42px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="mb-[24px] flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Kiralama Seçenekleri</SectionLabel>

              <h2 className="mt-[9px] max-w-[720px] text-[29px] font-extrabold leading-[1.18] tracking-[-1px] text-[#332F2C] md:text-[32px]">
                İhtiyacınıza uygun kiralama{" "}
                <span className="font-medium text-[#817974]">
                  seçeneğini keşfedin.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-[11px] font-semibold leading-[1.7] text-[#817974]">
              Kısa süreli yolculuklardan uzun dönem araç ihtiyacına kadar,
              kullanımınıza uygun seçenekleri inceleyin.
            </p>
          </div>

          <div className="grid gap-[16px] md:grid-cols-3">
            <ServiceCard
              eyebrow="Kısa Süreli"
              title="Günlük Kiralama"
              description="Şehir içi kullanım, tatil veya kısa süreli araç ihtiyaçlarınız için esnek kiralama seçenekleri."
              button="Araçları İncele"
              href="/araclarimiz"
              image="/services/gunluk-kiralama.png"
            />

            <ServiceCard
              eyebrow="Uzun Dönem"
              title="Aylık Kiralama"
              description="Uzun süreli araç ihtiyacınız için kullanımınıza uygun aylık kiralama alternatiflerini inceleyin."
              button="Aylık Kiralamayı İncele"
              href="/araclarimiz"
              image="/services/aylik-kiralama.png"
              featured
            />

            <ServiceCard
              eyebrow="Teslimat"
              title="Havalimanı Teslimatı"
              description="İstanbul Havalimanı ve Sabiha Gökçen için araç teslim ve iade seçeneklerinden yararlanın."
              button="Detayları Gör"
              href="/ek-hizmetler"
              image="/services/havalimani-teslimat.png"
            />
          </div>
        </div>
      </section>

      {/* AYLIK KİRALAMA */}
      <section className="bg-[#FBF9F6] py-[38px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[18px] border border-[#E9E3DE] bg-[#FFFDFC] shadow-[0_14px_38px_rgba(64,47,39,.055)]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-[120px] -top-[170px] h-[380px] w-[380px] rounded-full bg-[#FFF2F3] blur-[100px]" />

              <div className="absolute left-[53%] top-[-330px] hidden h-[650px] w-[650px] rounded-full border border-[#ED1739]/[0.12] lg:block" />

              <div className="absolute left-[63%] top-[175px] hidden h-[11px] w-[11px] rounded-full bg-[#F5A8B3] lg:block" />

              <div className="absolute -bottom-[240px] -right-[190px] h-[440px] w-[440px] rounded-full bg-[#FFF1EE]" />
            </div>

            <div className="relative grid lg:grid-cols-[1fr_330px]">
              <div className="px-[28px] py-[30px] sm:px-[40px] lg:px-[48px] lg:py-[34px]">
                <div className="inline-flex items-center gap-[10px] rounded-full border border-[#F0DFE1] bg-white px-[15px] py-[7px]">
                  <span className="h-[2px] w-[25px] rounded-full bg-[#ED1739]" />

                  <span className="text-[8px] font-extrabold uppercase tracking-[1.8px] text-[#D71935]">
                    Uzun Dönem Kiralama
                  </span>
                </div>

                <h2 className="mt-[16px] max-w-[650px] text-[29px] font-extrabold leading-[1.12] tracking-[-1.25px] text-[#332F2C] sm:text-[32px] lg:text-[35px]">
                  Daha uzun süre kullanın,
                  <span className="block text-[#ED1739]">
                    kiralamanızı kolaylaştırın.
                  </span>
                </h2>

                <p className="mt-[10px] max-w-[570px] text-[11px] font-semibold leading-[1.7] text-[#817974]">
                  Bireysel ve kurumsal araç ihtiyaçlarınız için esnek ve
                  avantajlı aylık kiralama seçeneklerini inceleyin.
                </p>

                <div className="mt-[23px] grid gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
                  <MonthlyItem
                    icon={<PercentIcon />}
                    title="Avantajlı Fiyatlar"
                    text="Uzun dönem için özel avantajlar."
                  />

                  <MonthlyItem
                    icon={<SmallShieldIcon />}
                    title="Kapsamlı Sigorta"
                    text="Güvenli ve sorunsuz kullanım."
                  />

                  <MonthlyItem
                    icon={<GearIcon />}
                    title="Periyodik Bakım"
                    text="Bakım süreçlerini biz yönetelim."
                  />

                  <MonthlyItem
                    icon={<UsersIcon />}
                    title="Bireysel & Kurumsal"
                    text="İhtiyacınıza uygun çözümler."
                    last
                  />
                </div>
              </div>

              <div className="relative border-t border-[#ECE6E1] bg-white/70 px-[27px] py-[29px] lg:border-l lg:border-t-0">
                <div className="flex items-center gap-[11px]">
                  <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0F2] text-[#ED1739]">
                    <ChartIcon />
                  </span>

                  <h3 className="text-[15px] font-extrabold leading-[1.35] tracking-[-.3px] text-[#393431]">
                    İşiniz, hayatınız
                    <span className="block">hep yolda.</span>
                  </h3>
                </div>

                <span className="mt-[13px] block h-[2px] w-[36px] rounded-full bg-[#ED1739]" />

                <div className="mt-[18px] space-y-[12px]">
                  <CheckRow text="Esnek kiralama süreleri" />
                  <CheckRow text="Şeffaf ve net fiyatlandırma" />
                  <CheckRow text="7/24 destek hizmeti" />
                </div>

                <a
                  href="/araclarimiz"
                  className="mt-[21px] flex h-[46px] w-full items-center justify-center gap-[9px] rounded-[9px] bg-[#ED1739] px-[16px] text-[9.5px] font-extrabold text-white shadow-[0_8px_20px_rgba(237,23,57,.16)] transition hover:bg-[#D71935]"
                >
                  Aylık Kiralamayı İncele
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARAÇLAR */}
      <section className="bg-[#FBF9F6] py-[48px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="text-center">
            <SectionLabel center>Araçlarımız</SectionLabel>

            <h2 className="mt-[9px] text-[30px] font-extrabold tracking-[-1px] text-[#332F2C] md:text-[34px]">
              Yolculuğunuza uygun aracı bulun.
            </h2>

            <p className="mx-auto mt-[8px] max-w-[570px] text-[11px] font-semibold leading-[1.7] text-[#817974]">
              Ekonomik sınıftan SUV seçeneklerine kadar farklı kullanım
              ihtiyaçlarına uygun araç gruplarını keşfedin.
            </p>
          </div>

          <div className="mt-[27px] grid gap-[16px] md:grid-cols-3">
            <VehicleCard
              category="Ekonomi"
              model="Renault Clio"
              image="/cars/clio.png"
              transmission="Otomatik"
              fuel="Benzin"
            />

            <VehicleCard
              category="Konfor"
              model="Renault Megane"
              image="/cars/megane.png"
              transmission="Otomatik"
              fuel="Benzin"
            />

            <VehicleCard
              category="SUV"
              model="Peugeot 3008"
              image="/cars/3008.png"
              transmission="Otomatik"
              fuel="Dizel"
            />
          </div>

          <div className="mt-[25px] flex justify-center">
            <a
              href="/araclarimiz"
              className="flex h-[44px] items-center gap-[8px] rounded-[8px] border border-[#DDD5CF] bg-white px-[20px] text-[10px] font-extrabold text-[#514A46] transition hover:border-[#ED1739] hover:text-[#ED1739]"
            >
              Tüm Araçları Gör
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* KOLAY REZERVASYON */}
      <section className="border-t border-[#EEE7E2] bg-[#FBF9F6] py-[44px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="grid gap-[30px] lg:grid-cols-[.8fr_1.4fr] lg:items-center">
            <div>
              <SectionLabel>Kolay Rezervasyon</SectionLabel>

              <h2 className="mt-[10px] max-w-[440px] text-[28px] font-extrabold leading-[1.18] tracking-[-1px] text-[#332F2C]">
                Aracınıza ulaşmak
                <span className="block font-medium text-[#817974]">
                  birkaç adım kadar yakın.
                </span>
              </h2>

              <p className="mt-[10px] max-w-[430px] text-[11px] font-semibold leading-[1.7] text-[#817974]">
                Lokasyonunuzu ve tarihlerinizi belirleyin, size uygun araçları
                görüntüleyin ve rezervasyonunuzu oluşturun.
              </p>

              <a
                href="#rezervasyon"
                className="mt-[17px] inline-flex items-center gap-[7px] text-[10px] font-extrabold text-[#ED1739]"
              >
                Rezervasyona Başla
                <ArrowIcon />
              </a>
            </div>

            <div className="grid gap-[13px] sm:grid-cols-3">
              <ProcessCard
                title="Lokasyonu Seçin"
                text="Aracı teslim almak istediğiniz noktayı belirleyin."
              />

              <ProcessCard
                title="Aracınızı Bulun"
                text="Tarihlerinize uygun araç seçeneklerini inceleyin."
              />

              <ProcessCard
                title="Yola Çıkın"
                text="Rezervasyonunuzu oluşturun ve yolculuğunuzu planlayın."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E7DFD9] bg-[#F8F5F1]">
        <div className="mx-auto max-w-[1340px] px-5 py-[42px] sm:px-6 lg:py-[48px]">
          <div className="grid gap-[36px] sm:grid-cols-2 lg:grid-cols-[1.45fr_.85fr_1fr_1.15fr] lg:gap-[55px]">
            {/* M2CAR */}
            <div>
              <FooterTitle>M2CAR Araç Kiralama</FooterTitle>

              <p className="mt-[20px] max-w-[410px] text-[13px] font-semibold leading-[1.9] text-[#655D58]">
                Beylikdüzü merkezli araç kiralama hizmetlerimizle bireysel ve
                kurumsal ihtiyaçlarınıza uygun çözümler sunuyoruz.
              </p>

              <a
                href="tel:08508888098"
                className="mt-[25px] inline-flex items-center gap-[13px]"
              >
                <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-[9px] font-extrabold uppercase tracking-[1.7px] text-[#918883]">
                    Rezervasyon Hattı
                  </span>

                  <span className="mt-[3px] block text-[17px] font-extrabold tracking-[-.3px] text-[#332F2C]">
                    0850 888 80 98
                  </span>
                </span>
              </a>
            </div>

            {/* KURUMSAL */}
            <div>
              <FooterTitle>Kurumsal</FooterTitle>

              <div className="mt-[20px] flex flex-col gap-[13px]">
                <FooterLink href="/hakkimizda">Hakkımızda</FooterLink>
                <FooterLink href="/araclarimiz">Araçlarımız</FooterLink>
                <FooterLink href="/kampanyalar">Kampanyalar</FooterLink>
                <FooterLink href="/filo-talebi">Filo Talebi</FooterLink>
                <FooterLink href="/iletisim">İletişim</FooterLink>
              </div>
            </div>

            {/* HİZMET BÖLGELERİ */}
            <div>
              <FooterTitle>Hizmet Bölgelerimiz</FooterTitle>

              <div className="mt-[20px] flex flex-col gap-[13px]">
                <FooterText>Beylikdüzü</FooterText>
                <FooterText>Esenyurt</FooterText>
                <FooterText>Avcılar</FooterText>
                <FooterText>Büyükçekmece</FooterText>
                <FooterText>TÜYAP</FooterText>
              </div>
            </div>

            {/* TESLİMAT */}
            <div>
              <FooterTitle>Teslimat & Hizmetler</FooterTitle>

              <div className="mt-[20px] flex flex-col gap-[13px]">
                <FooterText>İstanbul Havalimanı</FooterText>
                <FooterText>Sabiha Gökçen Havalimanı</FooterText>

                <FooterLink href="/ek-hizmetler">
                  Havalimanı Teslimatı
                </FooterLink>

                <FooterLink href="/ek-hizmetler">Ek Hizmetler</FooterLink>

                <a
                  href="https://wa.me/905336027805"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[2px] inline-flex w-fit items-center gap-[9px] text-[12px] font-extrabold text-[#ED1739] transition hover:text-[#D71935]"
                >
                  WhatsApp ile İletişim
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5DDD7] bg-[#F3EFEB]">
          <div className="mx-auto flex max-w-[1340px] flex-col gap-[8px] px-5 py-[16px] sm:px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] font-semibold text-[#817974]">
              © 2026 M2CAR Araç Kiralama. Tüm hakları saklıdır.
            </p>

            <p className="text-[10px] font-semibold text-[#918883]">
              Beylikdüzü / İstanbul
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #fbf9f6;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        button,
        input,
        select {
          font-family: inherit;
        }

        .nav-link {
          position: relative;
          color: #3d3835;
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.3px;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .nav-link:hover {
          color: #ed1739;
        }

        .nav-link.active {
          color: #332f2c;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -25px;
          width: 28px;
          height: 2px;
          transform: translateX(-50%);
          border-radius: 100px;
          background: #ed1739;
        }

        .reservation-field {
          min-height: 76px;
          padding: 15px 18px;
          border-right: 1px solid #eee8e3;
          background: #ffffff;
        }

        .reservation-label {
          display: block;
          margin-bottom: 9px;
          color: #918883;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.05px;
          text-transform: uppercase;
        }

        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.55;
        }

        @media (max-width: 1023px) {
          .reservation-field {
            min-height: 72px;
            border-right: 0;
            border-bottom: 1px solid #eee8e3;
          }
        }
      `}</style>
    </main>
  );
}

/* COMPONENTS */

function Nav({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a href={href} className={`nav-link ${active ? "active" : ""}`}>
      {children}
    </a>
  );
}

function MobileNav({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`border-b border-[#F1ECE8] py-[11px] text-[13px] font-extrabold last:border-0 ${
        active ? "text-[#ED1739]" : "text-[#3D3835]"
      }`}
    >
      {children}
    </a>
  );
}

function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-[9px] ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-[2px] w-[22px] rounded-full bg-[#ED1739]" />

      <span className="text-[8px] font-extrabold uppercase tracking-[2px] text-[#D71935]">
        {children}
      </span>

      {center && (
        <span className="h-[2px] w-[22px] rounded-full bg-[#ED1739]" />
      )}
    </div>
  );
}

function HeroBenefit({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-[8px]">
      <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#F8E2E5] text-[#ED1739]">
        <CheckIcon />
      </span>

      <span className="text-[10px] font-bold text-[#766E69]">{text}</span>
    </div>
  );
}

function ServiceCard({
  eyebrow,
  title,
  description,
  button,
  image,
  href,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  button: string;
  image: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[15px] border transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(73,54,45,.08)] ${
        featured
          ? "border-[#F0D4D8] bg-[#FFF9F9]"
          : "border-[#ECE5E0] bg-white"
      }`}
    >
      <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-[#F6F2EF] lg:h-[240px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
        />

        {featured && (
          <span className="absolute right-[13px] top-[13px] rounded-full bg-[#ED1739] px-[11px] py-[6px] text-[8px] font-extrabold uppercase tracking-[1px] text-white">
            Öne Çıkan
          </span>
        )}
      </div>

      <div className="px-[20px] pb-[18px] pt-[16px]">
        <div className="flex items-center gap-[8px]">
          <span className="h-[2px] w-[21px] bg-[#ED1739]" />

          <span className="text-[8px] font-extrabold uppercase tracking-[1.7px] text-[#D71935]">
            {eyebrow}
          </span>
        </div>

        <h3 className="mt-[8px] text-[18px] font-extrabold tracking-[-.5px] text-[#332F2C]">
          {title}
        </h3>

        <p className="mt-[7px] min-h-[38px] text-[10.5px] font-semibold leading-[1.6] text-[#766F6A]">
          {description}
        </p>

        <a
          href={href}
          className="mt-[13px] flex items-center gap-[7px] text-[9.5px] font-extrabold text-[#ED1739]"
        >
          {button}
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

function MonthlyItem({
  icon,
  title,
  text,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-[10px] pr-[10px] ${
        last ? "" : "xl:border-r xl:border-[#EEE7E2]"
      }`}
    >
      <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0F2] text-[#ED1739]">
        {icon}
      </span>

      <div>
        <div className="text-[10px] font-extrabold text-[#403A36]">
          {title}
        </div>

        <div className="mt-[2px] text-[8.5px] font-semibold leading-[1.45] text-[#8B837E]">
          {text}
        </div>
      </div>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[9px]">
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
        <CheckIcon />
      </span>

      <span className="text-[10px] font-bold text-[#716965]">{text}</span>
    </div>
  );
}

function VehicleCard({
  category,
  model,
  image,
  transmission,
  fuel,
}: {
  category: string;
  model: string;
  image: string;
  transmission: string;
  fuel: string;
}) {
  return (
    <article className="overflow-hidden rounded-[15px] border border-[#ECE5E0] bg-white">
      <div className="flex h-[185px] items-center justify-center bg-[#F8F6F4] px-[16px]">
        <img src={image} alt={model} className="h-full w-full object-contain" />
      </div>

      <div className="p-[19px]">
        <span className="text-[8px] font-extrabold uppercase tracking-[1.6px] text-[#D71935]">
          {category}
        </span>

        <div className="mt-[6px] flex items-end gap-[6px]">
          <h3 className="text-[18px] font-extrabold text-[#37322F]">
            {model}
          </h3>

          <span className="mb-[2px] text-[8px] font-semibold text-[#A19994]">
            veya benzeri
          </span>
        </div>

        <div className="mt-[14px] flex gap-[15px] border-y border-[#EEE8E3] py-[11px]">
          <VehicleSpec text={transmission} />
          <VehicleSpec text={fuel} />
          <VehicleSpec text="5 Kişi" />
        </div>

        <div className="mt-[15px] flex items-center justify-between">
          <a
            href="/araclarimiz"
            className="text-[9px] font-bold text-[#6E6661] hover:text-[#ED1739]"
          >
            Detayları İncele
          </a>

          <a
            href="/araclarimiz"
            className="flex h-[38px] items-center gap-[6px] rounded-[7px] bg-[#ED1739] px-[14px] text-[9px] font-extrabold text-white"
          >
            Hemen Kirala
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

function VehicleSpec({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-[5px] text-[9px] font-bold text-[#807873]">
      <span className="h-[5px] w-[5px] rounded-full bg-[#ED1739]/70" />
      {text}
    </span>
  );
}

function ProcessCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="group relative min-h-[145px] overflow-hidden rounded-[14px] border border-[#E9E1DB] bg-white px-[21px] py-[22px] shadow-[0_8px_24px_rgba(73,54,45,.035)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(73,54,45,.06)]">
      <span className="block h-[2px] w-[30px] rounded-full bg-[#ED1739]" />

      <h3 className="mt-[18px] text-[14px] font-extrabold tracking-[-.3px] text-[#3B3633]">
        {title}
      </h3>

      <p className="mt-[7px] text-[10px] font-semibold leading-[1.65] text-[#837B76]">
        {text}
      </p>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ED1739] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[15px] font-extrabold tracking-[-.3px] text-[#332F2C]">
        {children}
      </h3>

      <span className="mt-[12px] block h-[2px] w-[36px] rounded-full bg-[#ED1739]" />
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="w-fit text-[12px] font-semibold text-[#655D58] transition hover:text-[#ED1739]"
    >
      {children}
    </a>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] font-semibold text-[#655D58]">
      {children}
    </span>
  );
}

/* ICONS */

function PhoneIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
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
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CalendarSmallIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED1739"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED1739"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#918883"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
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
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED1739"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PercentIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M19 5 5 19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function SmallShieldIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 20V10h4v10" />
      <path d="M10 20V4h4v16" />
      <path d="M16 20V7h4v13" />
      <path d="M2 20h20" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}