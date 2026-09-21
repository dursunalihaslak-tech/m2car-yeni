"use client";

import { Manrope } from "next/font/google";
import { useMemo, useState } from "react";

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

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  category: string;
  fuel: string;
  transmission: string;
  passengers: string;
  images: string[];

  onlinePrice: number;
  officePrice: number;

  monthlyOnlinePrice: number;
  monthlyOfficePrice: number;

  minAge: number;
  licenseYears: number;
  dailyKm: number;
  deposit: number;
};

const vehicles: Vehicle[] = [
  {
    id: 1,
    brand: "RENAULT",
    model: "Clio",
    category: "Ekonomi",
    fuel: "Benzin",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/clio.png", "/cars/clio-2.png"],
    onlinePrice: 2049,
    officePrice: 2350,
    monthlyOnlinePrice: 44900,
    monthlyOfficePrice: 47900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 2,
    brand: "RENAULT",
    model: "Megane",
    category: "Konfor",
    fuel: "Benzin",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/megane.png", "/cars/megane-2.png"],
    onlinePrice: 2549,
    officePrice: 2850,
    monthlyOnlinePrice: 54900,
    monthlyOfficePrice: 58900,
    minAge: 23,
    licenseYears: 2,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 3,
    brand: "RENAULT",
    model: "Taliant",
    category: "Ekonomi",
    fuel: "Benzin",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/taliant.png", "/cars/taliant-2.png"],
    onlinePrice: 2149,
    officePrice: 2450,
    monthlyOnlinePrice: 46900,
    monthlyOfficePrice: 49900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 4,
    brand: "FIAT",
    model: "Fiorino",
    category: "Ticari",
    fuel: "Benzin / LPG",
    transmission: "Manuel",
    passengers: "5 Kişi",
    images: ["/cars/fiorino-lpg.png", "/cars/fiorino-lpg-2.png"],
    onlinePrice: 1999,
    officePrice: 2300,
    monthlyOnlinePrice: 42900,
    monthlyOfficePrice: 45900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 5,
    brand: "FIAT",
    model: "Fiorino",
    category: "Ticari",
    fuel: "Dizel",
    transmission: "Manuel",
    passengers: "5 Kişi",
    images: ["/cars/fiorino-dizel.png"],
    onlinePrice: 2199,
    officePrice: 2500,
    monthlyOnlinePrice: 46900,
    monthlyOfficePrice: 49900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 6,
    brand: "DACIA",
    model: "Sandero",
    category: "Ekonomi",
    fuel: "Benzin",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/sandero.png", "/cars/sandero-2.png"],
    onlinePrice: 2249,
    officePrice: 2550,
    monthlyOnlinePrice: 47900,
    monthlyOfficePrice: 50900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 7,
    brand: "PEUGEOT",
    model: "3008",
    category: "SUV",
    fuel: "Dizel",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/3008.png", "/cars/3008-2.png"],
    onlinePrice: 3299,
    officePrice: 3650,
    monthlyOnlinePrice: 69900,
    monthlyOfficePrice: 74900,
    minAge: 23,
    licenseYears: 2,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 8,
    brand: "HYUNDAI",
    model: "i20",
    category: "Ekonomi",
    fuel: "Benzin",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/i20.png"],
    onlinePrice: 2149,
    officePrice: 2450,
    monthlyOnlinePrice: 45900,
    monthlyOfficePrice: 48900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 9,
    brand: "FIAT",
    model: "Egea",
    category: "Ekonomi",
    fuel: "Benzin",
    transmission: "Manuel",
    passengers: "5 Kişi",
    images: ["/cars/egea-benzin.png"],
    onlinePrice: 1949,
    officePrice: 2250,
    monthlyOnlinePrice: 41900,
    monthlyOfficePrice: 44900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 10,
    brand: "FIAT",
    model: "Egea",
    category: "Ekonomi",
    fuel: "Dizel",
    transmission: "Otomatik",
    passengers: "5 Kişi",
    images: ["/cars/egea-dizel-otomatik.png"],
    onlinePrice: 2349,
    officePrice: 2650,
    monthlyOnlinePrice: 49900,
    monthlyOfficePrice: 53900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
  {
    id: 11,
    brand: "FIAT",
    model: "Egea",
    category: "Ekonomi",
    fuel: "Dizel",
    transmission: "Manuel",
    passengers: "5 Kişi",
    images: ["/cars/egea-dizel-manuel.png"],
    onlinePrice: 2149,
    officePrice: 2450,
    monthlyOnlinePrice: 45900,
    monthlyOfficePrice: 48900,
    minAge: 21,
    licenseYears: 1,
    dailyKm: 300,
    deposit: 7000,
  },
];

function formatMoney(value: number) {
  return `${new Intl.NumberFormat("tr-TR").format(value)} TL`;
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getInitialDates() {
  const today = new Date();
  const returnDay = new Date(today);
  returnDay.setDate(today.getDate() + 3);

  return {
    pickup: formatDate(today),
    returnDate: formatDate(returnDay),
  };
}

function addMonthsToDate(dateString: string, months: number) {
  if (!dateString) return "";

  const date = new Date(`${dateString}T12:00:00`);
  const originalDay = date.getDate();

  date.setDate(1);
  date.setMonth(date.getMonth() + months);

  const lastDayOfTargetMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  date.setDate(Math.min(originalDay, lastDayOfTargetMonth));

  return formatDate(date);
}

export default function AraclarimizPage() {
  const initialDates = getInitialDates();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [rentalType, setRentalType] = useState<"daily" | "monthly">("daily");

  const [pickupLocation, setPickupLocation] = useState("BEYLİKDÜZÜ");
  const [pickupDate, setPickupDate] = useState(initialDates.pickup);
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState(initialDates.returnDate);
  const [returnTime, setReturnTime] = useState("10:00");

  const [monthlyCount, setMonthlyCount] = useState(1);

  const [differentReturn, setDifferentReturn] = useState(false);
  const [returnLocation, setReturnLocation] = useState("BEYLİKDÜZÜ");
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("Tümü");
  const [transmissionFilter, setTransmissionFilter] = useState("Tümü");
  const [fuelFilter, setFuelFilter] = useState("Tümü");

  const [searchMessage, setSearchMessage] = useState("");

  const rentalDays = useMemo(() => {
    if (!pickupDate || !returnDate) return 1;

    const pickup = new Date(`${pickupDate}T${pickupTime}`);
    const returning = new Date(`${returnDate}T${returnTime}`);

    const difference = returning.getTime() - pickup.getTime();

    if (difference <= 0) return 1;

    const oneDay = 1000 * 60 * 60 * 24;

    return Math.max(1, Math.ceil(difference / oneDay));
  }, [pickupDate, pickupTime, returnDate, returnTime]);

  function handleRentalTypeChange(type: "daily" | "monthly") {
    setRentalType(type);
    setSearchMessage("");

    if (type === "monthly") {
      setMonthlyCount(1);
      setReturnDate(addMonthsToDate(pickupDate, 1));
      setReturnTime(pickupTime);
    } else {
      const selected = new Date(`${pickupDate}T12:00:00`);
      const newReturnDate = new Date(selected);
      newReturnDate.setDate(selected.getDate() + 3);

      setReturnDate(formatDate(newReturnDate));
      setReturnTime(pickupTime);
    }
  }

  function handlePickupDateChange(value: string) {
    setPickupDate(value);
    setSearchMessage("");

    if (!value) return;

    if (rentalType === "monthly") {
      setReturnDate(addMonthsToDate(value, monthlyCount));
      return;
    }

    // Günlük kiralamada kullanıcı alış/iade tarihlerini serbestçe seçer.
    // Mevcut iade tarihi yeni alış tarihinden sonraysa iade tarihini koru.
    if (returnDate) {
      const selected = new Date(`${value}T12:00:00`);
      const currentReturn = new Date(`${returnDate}T12:00:00`);

      if (currentReturn > selected) {
        return;
      }
    }

    const selected = new Date(`${value}T12:00:00`);
    const newReturnDate = new Date(selected);
    newReturnDate.setDate(selected.getDate() + 3);
    setReturnDate(formatDate(newReturnDate));
  }

  function handleMonthlyCountChange(value: number) {
    setMonthlyCount(value);
    setReturnDate(addMonthsToDate(pickupDate, value));
    setReturnTime(pickupTime);
    setSearchMessage("");
  }

  function handleSearch() {
    if (!pickupDate || !returnDate) {
      setSearchMessage("Lütfen alış ve iade tarihlerini seçin.");
      return;
    }

    const pickup = new Date(`${pickupDate}T${pickupTime}`);
    const returning = new Date(`${returnDate}T${returnTime}`);

    if (returning <= pickup) {
      setSearchMessage("İade tarihi alış tarihinden sonra olmalıdır.");
      return;
    }

    if (rentalType === "monthly") {
      setSearchMessage(
        `${monthlyCount} aylık kiralama için özel fiyatlar gösteriliyor.`
      );
    } else {
      setSearchMessage(
        `${rentalDays} günlük kiralama için toplam fiyatlar gösteriliyor.`
      );
    }

    setTimeout(() => {
      document
        .getElementById("arac-listesi")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const categoryMatch =
        categoryFilter === "Tümü" || vehicle.category === categoryFilter;

      const transmissionMatch =
        transmissionFilter === "Tümü" ||
        vehicle.transmission === transmissionFilter;

      const fuelMatch =
        fuelFilter === "Tümü" ||
        vehicle.fuel.toLowerCase().includes(fuelFilter.toLowerCase());

      return categoryMatch && transmissionMatch && fuelMatch;
    });
  }, [categoryFilter, transmissionFilter, fuelFilter]);

  return (
    <main
      className={`${manrope.className} min-h-screen overflow-x-hidden bg-[#FBF9F6] text-[#312D2B]`}
    >
      {/* HEADER */}
      <header className="relative z-50 border-t-[2px] border-[#ED1739] border-b border-[#EEE8E3] bg-white">
        <div className="mx-auto flex h-[96px] max-w-[1340px] items-center px-5 sm:px-6">
          <a
            href="/"
            aria-label="M2CAR Araç Kiralama"
            className="flex shrink-0 items-center"
          >
            <div className="relative flex h-[64px] w-[165px] items-center justify-center overflow-hidden rounded-[12px] bg-[#ED1739] shadow-[0_10px_27px_rgba(237,23,57,.19)]">
              <div className="absolute -right-[32px] -top-[58px] h-[125px] w-[125px] rounded-full border border-white/[0.08]" />

              <div className="relative text-center">
                <div className="text-[26px] font-extrabold leading-none tracking-[-1.9px] text-white">
                  M2CAR
                </div>

                <div className="mt-[7px] pl-[3px] text-[6px] font-bold uppercase tracking-[3.3px] text-white/80">
                  Araç Kiralama
                </div>
              </div>
            </div>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-[29px] lg:flex">
            <Nav href="/">Ana Sayfa</Nav>
            <Nav href="/araclarimiz" active>
              Araçlarımız
            </Nav>
            <Nav href="/kampanyalar">Kampanyalar</Nav>
            <Nav href="/filo-talebi">Filo Talebi</Nav>
            <Nav href="/ek-hizmetler">Ek Hizmetler</Nav>
            <Nav href="/hakkimizda">Hakkımızda</Nav>
            <Nav href="/iletisim">İletişim</Nav>
          </nav>

          <div className="ml-auto hidden shrink-0 xl:block">
            <a
              href="tel:08508888098"
              className="group flex items-center gap-[12px]"
            >
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
                <PhoneIcon />
              </span>

              <span>
                <span className="block text-[8.5px] font-bold uppercase tracking-[1.5px] text-[#918883]">
                  Rezervasyon Hattı
                </span>

                <span className="mt-[3px] block text-[13px] font-extrabold text-[#3D3835]">
                  0850 888 80 98
                </span>
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menü"
            className="ml-auto flex h-[42px] w-[42px] items-center justify-center rounded-[9px] border border-[#E9E2DD] bg-white text-[#4D4642] lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-[#EEE8E3] bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              <MobileNav href="/">Ana Sayfa</MobileNav>
              <MobileNav href="/araclarimiz" active>
                Araçlarımız
              </MobileNav>
              <MobileNav href="/kampanyalar">Kampanyalar</MobileNav>
              <MobileNav href="/filo-talebi">Filo Talebi</MobileNav>
              <MobileNav href="/ek-hizmetler">Ek Hizmetler</MobileNav>
              <MobileNav href="/hakkimizda">Hakkımızda</MobileNav>
              <MobileNav href="/iletisim">İletişim</MobileNav>

              <a
                href="tel:08508888098"
                className="mt-2 flex h-[47px] items-center justify-center rounded-[8px] bg-[#ED1739] text-[11px] font-bold text-white"
              >
                0850 888 80 98
              </a>
            </div>
          </div>
        )}
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-[#EEE8E3] bg-[#FBF9F6]">
        <div className="pointer-events-none absolute -right-[180px] -top-[310px] h-[650px] w-[650px] rounded-full border border-[#ED1739]/[0.05]" />

        <div className="relative mx-auto max-w-[1340px] px-5 pb-[33px] pt-[38px] sm:px-6">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Araç Filomuz</SectionLabel>

              <h1 className="mt-[10px] text-[36px] font-extrabold leading-[1.12] tracking-[-1.6px] text-[#332F2C] md:text-[43px]">
                Yolculuğunuza uygun
                <span className="text-[#ED1739]"> aracı bulun.</span>
              </h1>

              <p className="mt-[11px] max-w-[610px] text-[12.5px] font-semibold leading-[1.8] text-[#746C67]">
                Ekonomik sınıftan SUV seçeneklerine kadar farklı kullanım
                ihtiyaçlarına uygun araçlarımızı inceleyin.
              </p>
            </div>

            <div className="hidden items-center gap-[10px] lg:mr-[28px] lg:translate-y-[5px] lg:flex">
              <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
                <CheckIcon />
              </span>

              <div>
                <div className="text-[11px] font-extrabold text-[#4E4844]">
                  11 araç seçeneği
                </div>

                <div className="mt-[2px] text-[9px] font-semibold text-[#8F8681]">
                  Günlük · Haftalık · Aylık
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REZERVASYON */}
      <section className="bg-[#FBF9F6] pt-[25px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="mb-[11px] flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-[10px] border border-[#E9E2DD] bg-white p-[4px]">
              <button
                type="button"
                onClick={() => handleRentalTypeChange("daily")}
                className={`rounded-[8px] px-[24px] py-[11px] text-[12px] font-extrabold transition ${
                  rentalType === "daily"
                    ? "bg-[#ED1739] text-white"
                    : "text-[#625A55]"
                }`}
              >
                Günlük Kiralama
              </button>

              <button
                type="button"
                onClick={() => handleRentalTypeChange("monthly")}
                className={`rounded-[8px] px-[24px] py-[11px] text-[12px] font-extrabold transition ${
                  rentalType === "monthly"
                    ? "bg-[#ED1739] text-white"
                    : "text-[#625A55]"
                }`}
              >
                Aylık Kiralama
              </button>
            </div>

            <span className="hidden text-[10px] font-bold text-[#817974] sm:block">
              {rentalType === "daily"
                ? "Tarihlerinizi belirleyin, toplam kiralama ücretini görün."
                : "Uzun dönem kiralamaya özel avantajlı fiyatlardan yararlanın."}
            </span>
          </div>

          {rentalType === "monthly" && (
            <div className="mb-[12px] flex flex-col justify-between gap-3 rounded-[13px] border border-[#F3D9DE] bg-[#FFF5F6] px-[16px] py-[13px] sm:flex-row sm:items-center">
              <div>
                <span className="block text-[8px] font-extrabold uppercase tracking-[1.3px] text-[#D71935]">
                  Aylık Özel Fiyat
                </span>

                <span className="mt-[3px] block text-[10px] font-semibold text-[#625A55]">
                  Uzun dönem kiralamada günlük tarifeye göre avantajlı fiyat
                  uygulanır.
                </span>
              </div>

              <div className="flex items-center gap-[8px]">
                <span className="text-[9px] font-extrabold text-[#514A46]">
                  Kiralama Süresi
                </span>

                <select
                  value={monthlyCount}
                  onChange={(e) =>
                    handleMonthlyCountChange(Number(e.target.value))
                  }
                  className="h-[38px] rounded-[8px] border border-[#E8CDD2] bg-white px-[12px] text-[10px] font-extrabold text-[#403A36] outline-none"
                >
                  <option value={1}>1 Ay</option>
                  <option value={2}>2 Ay</option>
                  <option value={3}>3 Ay</option>
                  <option value={4}>4 Ay</option>
                  <option value={5}>5 Ay</option>
                  <option value={6}>6 Ay</option>
                  <option value={12}>12 Ay</option>
                </select>
              </div>
            </div>
          )}

          <div className="overflow-hidden rounded-[16px] border border-[#E9E1DB] bg-white shadow-[0_15px_40px_rgba(73,52,43,.06)]">
            <div className="grid lg:grid-cols-[1fr_1fr_1fr_auto]">
              <ReservationField label="Alış Lokasyonu">
                <div className="flex items-center gap-[10px]">
                  <span className="text-[#ED1739]">
                    <LocationIcon />
                  </span>

                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full appearance-none bg-transparent text-[14px] font-extrabold text-[#332F2C] outline-none"
                  >
                    {locations.map((location) => (
                      <option key={location}>{location}</option>
                    ))}
                  </select>

                  <ChevronIcon />
                </div>
              </ReservationField>

              <ReservationField label="Alış Tarihi ve Saati">
                <div className="flex items-center gap-[12px]">
                  <div className="flex min-w-0 flex-1 items-center gap-[8px]">
                    <CalendarIcon />

                    <input
                      type="date"
                      value={pickupDate}
                      min={formatDate(new Date())}
                      onChange={(e) =>
                        handlePickupDateChange(e.target.value)
                      }
                      className="date-time-input min-w-0 w-full bg-transparent text-[15px] font-extrabold text-[#332F2C] outline-none sm:text-[16px]"
                    />
                  </div>

                  <div className="h-[28px] w-px bg-[#EAE3DE]" />

                  <div className="flex w-[110px] shrink-0 items-center gap-[7px]">
                    <ClockIcon />

                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => {
                        setPickupTime(e.target.value);

                        if (rentalType === "monthly") {
                          setReturnTime(e.target.value);
                        }

                        setSearchMessage("");
                      }}
                      className="date-time-input min-w-0 w-full bg-transparent text-[14px] font-extrabold text-[#332F2C] outline-none sm:text-[15px]"
                    />
                  </div>
                </div>
              </ReservationField>

              <ReservationField label="İade Tarihi ve Saati">
                <div className="flex items-center gap-[12px]">
                  <div className="flex min-w-0 flex-1 items-center gap-[8px]">
                    <CalendarIcon />

                    <input
                      type="date"
                      value={returnDate}
                      min={pickupDate || formatDate(new Date())}
                      onChange={(e) => {
                        setReturnDate(e.target.value);
                        setSearchMessage("");
                      }}
                      className="date-time-input min-w-0 w-full bg-transparent text-[15px] font-extrabold text-[#332F2C] outline-none sm:text-[16px]"
                    />
                  </div>

                  <div className="h-[28px] w-px bg-[#EAE3DE]" />

                  <div className="flex w-[110px] shrink-0 items-center gap-[7px]">
                    <ClockIcon />

                    <input
                      type="time"
                      value={returnTime}
                      onChange={(e) => {
                        setReturnTime(e.target.value);
                        setSearchMessage("");
                      }}
                      className="date-time-input min-w-0 w-full bg-transparent text-[14px] font-extrabold text-[#332F2C] outline-none sm:text-[15px]"
                    />
                  </div>
                </div>
              </ReservationField>

              <div className="flex items-center border-t border-[#EEE8E3] p-[12px] lg:border-l lg:border-t-0">
                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex h-[54px] w-full min-w-[124px] items-center justify-center gap-[8px] rounded-[10px] bg-[#ED1739] px-[22px] text-[12.5px] font-extrabold uppercase tracking-[.8px] text-white shadow-[0_10px_24px_rgba(237,23,57,.22)] transition hover:bg-[#CE1431] lg:w-auto"
                >
                  <SearchIcon />
                  Ara
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-[28px] gap-y-[10px] border-t border-[#EEE8E3] px-[18px] py-[13px]">
              <label className="flex cursor-pointer items-center gap-[8px] text-[10px] font-semibold text-[#625A55]">
                <input
                  type="checkbox"
                  checked={differentReturn}
                  onChange={(e) => setDifferentReturn(e.target.checked)}
                  className="h-[15px] w-[15px] accent-[#ED1739]"
                />
                Farklı bir noktaya iade etmek istiyorum
              </label>

              <button
                type="button"
                onClick={() => setPromoOpen(!promoOpen)}
                className="text-[10px] font-semibold text-[#625A55] hover:text-[#ED1739]"
              >
                {promoOpen
                  ? "− Promosyon kodunu kapat"
                  : "+ Promosyon kodum var"}
              </button>

              {searchMessage && (
                <span className="ml-auto text-[9.5px] font-extrabold text-[#D71935]">
                  {searchMessage}
                </span>
              )}
            </div>

            {(differentReturn || promoOpen) && (
              <div className="grid gap-[13px] border-t border-[#EEE8E3] bg-[#FCFAF8] px-[18px] py-[15px] md:grid-cols-2">
                {differentReturn && (
                  <div>
                    <label className="field-label">Teslim Lokasyonu</label>

                    <select
                      value={returnLocation}
                      onChange={(e) => setReturnLocation(e.target.value)}
                      className="h-[46px] w-full rounded-[8px] border border-[#E5DDD7] bg-white px-[12px] text-[11px] font-bold text-[#514A46] outline-none"
                    >
                      {locations.map((location) => (
                        <option key={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                )}

                {promoOpen && (
                  <div>
                    <label className="field-label">Promosyon Kodu</label>

                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promosyon kodunuzu girin"
                      className="h-[46px] w-full rounded-[8px] border border-[#E5DDD7] bg-white px-[12px] text-[11px] font-semibold text-[#514A46] outline-none"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FİLTRELER */}
      <section className="bg-[#FBF9F6] pt-[25px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="rounded-[15px] border border-[#E9E2DD] bg-white p-[17px]">
            <div className="grid gap-[12px] md:grid-cols-3">
              <FilterSelect
                label="Araç Grubu"
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={["Tümü", "Ekonomi", "Konfor", "SUV", "Ticari"]}
              />

              <FilterSelect
                label="Vites"
                value={transmissionFilter}
                onChange={setTransmissionFilter}
                options={["Tümü", "Otomatik", "Manuel"]}
              />

              <FilterSelect
                label="Yakıt"
                value={fuelFilter}
                onChange={setFuelFilter}
                options={["Tümü", "Benzin", "Dizel", "LPG"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARAÇLAR */}
      <section
        id="arac-listesi"
        className="scroll-mt-[20px] bg-[#FBF9F6] pb-[65px] pt-[27px]"
      >
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="mb-[19px] flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-extrabold tracking-[-.6px] text-[#393431]">
                Araçlarımız
              </h2>

              <p className="mt-[3px] text-[10px] font-semibold text-[#817974]">
                {filteredVehicles.length} araç gösteriliyor ·{" "}
                {rentalType === "daily"
                  ? `${rentalDays} günlük kiralama`
                  : `${monthlyCount} aylık kiralama`}
              </p>
            </div>

            {(categoryFilter !== "Tümü" ||
              transmissionFilter !== "Tümü" ||
              fuelFilter !== "Tümü") && (
              <button
                type="button"
                onClick={() => {
                  setCategoryFilter("Tümü");
                  setTransmissionFilter("Tümü");
                  setFuelFilter("Tümü");
                }}
                className="text-[10px] font-extrabold text-[#ED1739]"
              >
                Filtreleri Temizle
              </button>
            )}
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  rentalType={rentalType}
                  rentalDays={rentalDays}
                  monthlyCount={monthlyCount}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[16px] border border-[#E9E2DD] bg-white px-6 py-[55px] text-center">
              <h3 className="text-[16px] font-extrabold text-[#403A36]">
                Bu filtrelere uygun araç bulunamadı.
              </h3>

              <button
                type="button"
                onClick={() => {
                  setCategoryFilter("Tümü");
                  setTransmissionFilter("Tümü");
                  setFuelFilter("Tümü");
                }}
                className="mt-[15px] rounded-[8px] bg-[#ED1739] px-[18px] py-[10px] text-[9px] font-bold text-white"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BİLGİ */}
      <section className="border-t border-[#EEE8E3] bg-white py-[38px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="grid gap-[12px] sm:grid-cols-2 lg:grid-cols-4">
            <InfoBox
              title="Şeffaf Fiyatlandırma"
              text="Kiralama seçeneklerinizi açık ve net şekilde inceleyin."
            />

            <InfoBox
              title="300 KM / Gün"
              text="Araçlarımızda günlük kullanım limiti 300 kilometredir."
            />

            <InfoBox
              title="7.000 TL Depozito"
              text="Araçlarımız için standart depozito tutarı uygulanır."
            />

            <InfoBox
              title="7/24 Destek"
              text="Kiralama süreciniz boyunca ihtiyaç duyduğunuzda yanınızdayız."
            />
          </div>
        </div>
      </section>

      {/* ALT CTA */}
      <section className="bg-[#FBF9F6] py-[38px]">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-6">
          <div className="flex flex-col justify-between gap-5 rounded-[18px] border border-[#E9E1DB] bg-[#F5EDE8] px-[27px] py-[27px] md:flex-row md:items-center md:px-[38px]">
            <div>
              <span className="text-[8px] font-bold uppercase tracking-[1.8px] text-[#D71935]">
                Yardıma mı ihtiyacınız var?
              </span>

              <h2 className="mt-[7px] text-[21px] font-extrabold tracking-[-.6px] text-[#393431]">
                Size uygun aracı birlikte belirleyelim.
              </h2>

              <p className="mt-[5px] text-[9.5px] font-medium text-[#817974]">
                Rezervasyon hattımız üzerinden bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <a
              href="tel:08508888098"
              className="flex h-[47px] shrink-0 items-center justify-center gap-[8px] rounded-[8px] bg-[#ED1739] px-[22px] text-[9px] font-bold text-white hover:bg-[#CE1431]"
            >
              <PhoneIcon />
              0850 888 80 98
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#EEE8E3] bg-white">
        <div className="mx-auto flex max-w-[1340px] flex-col gap-3 px-5 py-[24px] text-[9px] font-medium text-[#918883] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 M2CAR Araç Kiralama</span>

          <div className="flex flex-wrap items-center gap-x-[20px] gap-y-2">
            <a href="/" className="transition hover:text-[#ED1739]">
              Ana Sayfa
            </a>

            <a href="/hakkimizda" className="transition hover:text-[#ED1739]">
              Hakkımızda
            </a>

            <a href="/iletisim" className="transition hover:text-[#ED1739]">
              İletişim
            </a>
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

        .field-label {
          display: block;
          margin-bottom: 8px;
          color: #817974;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 1.15px;
          text-transform: uppercase;
        }

        .date-time-input {
          min-height: 25px;
          color: #403a36;
        }

        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.7;
        }

        input:disabled {
          opacity: 1;
          -webkit-text-fill-color: #403a36;
        }
      `}</style>
    </main>
  );
}

/* -------------------------------- */
/* NAVIGATION                       */
/* -------------------------------- */

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
      className={`border-b border-[#F1ECE8] pb-3 text-[12px] font-bold last:border-0 ${
        active ? "text-[#ED1739]" : "text-[#514A46]"
      }`}
    >
      {children}
    </a>
  );
}

/* -------------------------------- */
/* RESERVATION                      */
/* -------------------------------- */

function ReservationField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[88px] border-b border-[#EEE8E3] px-[19px] py-[18px] lg:border-b-0 lg:border-r">
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="field-label">{label}</label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[48px] w-full appearance-none rounded-[8px] border border-[#E8E1DC] bg-[#FCFAF8] px-[13px] pr-[35px] text-[11.5px] font-extrabold text-[#514A46] outline-none focus:border-[#ED1739]/40"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
          <ChevronIcon />
        </span>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* VEHICLE CARD                     */
/* -------------------------------- */

function VehicleCard({
  vehicle,
  rentalType,
  rentalDays,
  monthlyCount,
}: {
  vehicle: Vehicle;
  rentalType: "daily" | "monthly";
  rentalDays: number;
  monthlyCount: number;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasMultipleImages = vehicle.images.length > 1;

  const nextImage = () => {
    setImageError(false);
    setImageIndex((current) => (current + 1) % vehicle.images.length);
  };

  const previousImage = () => {
    setImageError(false);
    setImageIndex(
      (current) =>
        (current - 1 + vehicle.images.length) % vehicle.images.length
    );
  };

  return (
    <article className="group overflow-hidden rounded-[17px] border border-[#E9E2DD] bg-white shadow-[0_8px_28px_rgba(73,54,45,.045)] transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(73,54,45,.08)]">
      <div className="flex items-start justify-between gap-3 px-[19px] pb-[8px] pt-[18px]">
        <div>
          <span className="text-[7.5px] font-bold uppercase tracking-[1.5px] text-[#D71935]">
            {vehicle.category}
          </span>

          <h3 className="mt-[5px] text-[18px] font-extrabold tracking-[-.6px] text-[#37322F]">
            {vehicle.brand} {vehicle.model}
          </h3>

          <span className="mt-[2px] block text-[8px] font-medium text-[#A19994]">
            veya benzeri
          </span>
        </div>

        <span className="rounded-full bg-[#FFF0F2] px-[9px] py-[5px] text-[7px] font-extrabold uppercase tracking-[.6px] text-[#D71935]">
          {vehicle.category}
        </span>
      </div>

      <div className="relative mx-[10px] flex h-[205px] items-center justify-center overflow-hidden rounded-[12px] bg-[#F8F5F2] p-[12px]">
        {!imageError ? (
          <img
            key={`${vehicle.id}-${imageIndex}`}
            src={vehicle.images[imageIndex]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.015]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[10px] font-semibold text-[#A19994]">
              Araç görseli bulunamadı
            </span>
          </div>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Önceki görsel"
              className="absolute left-[9px] top-1/2 flex h-[31px] w-[31px] -translate-y-1/2 items-center justify-center rounded-full border border-[#E7DFDA] bg-white/95 text-[#514A46] shadow-sm transition hover:border-[#ED1739]/30 hover:text-[#ED1739]"
            >
              <LeftIcon />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Sonraki görsel"
              className="absolute right-[9px] top-1/2 flex h-[31px] w-[31px] -translate-y-1/2 items-center justify-center rounded-full border border-[#E7DFDA] bg-white/95 text-[#514A46] shadow-sm transition hover:border-[#ED1739]/30 hover:text-[#ED1739]"
            >
              <RightIcon />
            </button>

            <div className="absolute bottom-[10px] left-1/2 flex -translate-x-1/2 gap-[5px] rounded-full bg-white/90 px-[7px] py-[5px] shadow-sm">
              {vehicle.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setImageError(false);
                    setImageIndex(index);
                  }}
                  aria-label={`${index + 1}. görsel`}
                  className={`h-[5px] rounded-full transition-all ${
                    imageIndex === index
                      ? "w-[15px] bg-[#ED1739]"
                      : "w-[5px] bg-[#CFC7C2]"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="px-[19px] pt-[16px]">
        <div className="grid grid-cols-3 overflow-hidden rounded-[9px] border border-[#EEE8E3] bg-[#FCFAF8]">
          <VehicleSpec label="Vites" value={vehicle.transmission} />
          <VehicleSpec label="Yakıt" value={vehicle.fuel} border />
          <VehicleSpec label="Kapasite" value={vehicle.passengers} border />
        </div>
      </div>

      {/* FİYATLAR */}
      <div className="px-[19px] pt-[15px]">
        {rentalType === "daily" ? (
          <div className="grid grid-cols-2 gap-[9px]">
            <div className="rounded-[11px] border border-[#F1D5DA] bg-[#FFF0F2] px-[14px] py-[14px]">
              <span className="block text-[8px] font-extrabold uppercase tracking-[1px] text-[#D71935]">
                Hemen Öde
              </span>
              <strong className="mt-[5px] block text-[23px] font-extrabold tracking-[-.8px] text-[#332F2C]">
                {formatMoney(vehicle.onlinePrice * rentalDays)}
              </strong>
              <span className="mt-[4px] block text-[10px] font-extrabold text-[#D71935]">
                {rentalDays} Gün Toplam
              </span>
              <span className="mt-[3px] block text-[9px] font-bold text-[#817974]">
                {formatMoney(vehicle.onlinePrice)} / gün
              </span>
            </div>

            <div className="rounded-[11px] border border-[#E9E2DD] bg-white px-[14px] py-[14px]">
              <span className="block text-[8px] font-extrabold uppercase tracking-[1px] text-[#817974]">
                Ofiste Öde
              </span>
              <strong className="mt-[5px] block text-[23px] font-extrabold tracking-[-.8px] text-[#332F2C]">
                {formatMoney(vehicle.officePrice * rentalDays)}
              </strong>
              <span className="mt-[4px] block text-[10px] font-extrabold text-[#625A55]">
                {rentalDays} Gün Toplam
              </span>
              <span className="mt-[3px] block text-[9px] font-bold text-[#817974]">
                {formatMoney(vehicle.officePrice)} / gün
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-[9px] flex items-center justify-between rounded-[9px] bg-[#ED1739] px-[13px] py-[9px] text-white">
              <span className="text-[9px] font-extrabold uppercase tracking-[.9px]">
                Aylık Özel Fiyat
              </span>
              <span className="rounded-full bg-white/15 px-[8px] py-[4px] text-[8px] font-extrabold uppercase">
                İndirimli
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[9px]">
              <div className="rounded-[11px] border border-[#F1D5DA] bg-[#FFF0F2] px-[14px] py-[14px]">
                <span className="block text-[8px] font-extrabold uppercase tracking-[1px] text-[#D71935]">
                  Hemen Öde
                </span>
                <strong className="mt-[5px] block text-[23px] font-extrabold tracking-[-.8px] text-[#332F2C]">
                  {formatMoney(vehicle.monthlyOnlinePrice * monthlyCount)}
                </strong>
                <span className="mt-[4px] block text-[10px] font-extrabold text-[#D71935]">
                  {monthlyCount} Ay Toplam
                </span>
                <span className="mt-[3px] block text-[9px] font-bold text-[#817974]">
                  {formatMoney(vehicle.monthlyOnlinePrice)} / ay
                </span>
              </div>

              <div className="rounded-[11px] border border-[#E9E2DD] bg-white px-[14px] py-[14px]">
                <span className="block text-[8px] font-extrabold uppercase tracking-[1px] text-[#817974]">
                  Ofiste Öde
                </span>
                <strong className="mt-[5px] block text-[23px] font-extrabold tracking-[-.8px] text-[#332F2C]">
                  {formatMoney(vehicle.monthlyOfficePrice * monthlyCount)}
                </strong>
                <span className="mt-[4px] block text-[10px] font-extrabold text-[#625A55]">
                  {monthlyCount} Ay Toplam
                </span>
                <span className="mt-[3px] block text-[9px] font-bold text-[#817974]">
                  {formatMoney(vehicle.monthlyOfficePrice)} / ay
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="px-[19px] pt-[14px]">
        <button
          type="button"
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="flex w-full items-center justify-between border-y border-[#EEE8E3] py-[12px] text-left"
        >
          <span>
            <span className="block text-[9px] font-extrabold text-[#514A46]">
              Kiralama Koşulları
            </span>

            <span className="mt-[2px] block text-[7.5px] font-medium text-[#9A918B]">
              Yaş, ehliyet, kilometre ve depozito bilgileri
            </span>
          </span>

          <span
            className={`text-[#ED1739] transition-transform duration-200 ${
              detailsOpen ? "rotate-180" : ""
            }`}
          >
            <DownIcon />
          </span>
        </button>
      </div>

      {detailsOpen && (
        <div className="mx-[19px] mt-[13px] rounded-[11px] border border-[#E9E2DD] bg-[#FCFAF8] p-[14px]">
          <div className="grid grid-cols-2 gap-[9px]">
            <DetailBox
              label="Minimum Yaş"
              value={`${vehicle.minAge} Yaş`}
            />

            <DetailBox
              label="Minimum Ehliyet"
              value={`${vehicle.licenseYears} Yıl`}
            />

            <DetailBox
              label="Günlük KM Limiti"
              value={`${vehicle.dailyKm} KM`}
            />

            <DetailBox
              label="Depozito"
              value={formatMoney(vehicle.deposit)}
            />
          </div>

          <div className="mt-[11px] rounded-[8px] bg-white px-[11px] py-[10px]">
            <p className="text-[7.8px] font-medium leading-[1.7] text-[#817974]">
              Kiralama koşulları rezervasyon süresi ve araç grubuna göre
              değişiklik gösterebilir. Kesin koşullar rezervasyon sırasında
              teyit edilir.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-[.72fr_1.28fr] gap-[8px] p-[19px] pt-[14px]">
        <button
          type="button"
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="flex h-[42px] items-center justify-center rounded-[8px] border border-[#E5DDD7] bg-white text-[8.5px] font-bold text-[#625A55] transition hover:border-[#ED1739]/30 hover:text-[#ED1739]"
        >
          {detailsOpen ? "Detayı Kapat" : "Detayı Gör"}
        </button>

        <a
          href="tel:08508888098"
          className="group flex h-[42px] items-center justify-center gap-[7px] rounded-[8px] bg-[#ED1739] px-[12px] text-[8.5px] font-bold text-white shadow-[0_7px_17px_rgba(237,23,57,.15)] transition hover:bg-[#CE1431]"
        >
          Hemen Kirala

          <span className="transition-transform group-hover:translate-x-[2px]">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </article>
  );
}

function VehicleSpec({
  label,
  value,
  border = false,
}: {
  label: string;
  value: string;
  border?: boolean;
}) {
  return (
    <div
      className={`min-w-0 px-[9px] py-[10px] ${
        border ? "border-l border-[#EEE8E3]" : ""
      }`}
    >
      <span className="block text-[6.5px] font-bold uppercase tracking-[.8px] text-[#A19994]">
        {label}
      </span>

      <span className="mt-[3px] block truncate text-[8.5px] font-extrabold text-[#625A55]">
        {value}
      </span>
    </div>
  );
}

function DetailBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[8px] border border-[#EEE8E3] bg-white px-[10px] py-[10px]">
      <span className="block text-[6.8px] font-bold uppercase tracking-[.7px] text-[#A19994]">
        {label}
      </span>

      <strong className="mt-[4px] block text-[10px] font-extrabold text-[#514A46]">
        {value}
      </strong>
    </div>
  );
}

/* -------------------------------- */
/* OTHER COMPONENTS                 */
/* -------------------------------- */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[9px]">
      <span className="h-[2px] w-[20px] bg-[#ED1739]" />

      <span className="text-[8px] font-bold uppercase tracking-[2.3px] text-[#D71935]">
        {children}
      </span>
    </div>
  );
}

function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[14px] border border-[#E9E2DD] bg-[#FDFCFB] px-[20px] py-[21px]">
      <div className="flex items-center gap-[11px]">
        <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full bg-[#FFF0F2] text-[#ED1739]">
          <CheckIcon />
        </span>

        <h3 className="text-[14px] font-extrabold text-[#403A36]">
          {title}
        </h3>
      </div>

      <p className="mt-[10px] text-[12px] font-bold leading-[1.65] text-[#6F6762]">
        {text}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* ICONS                            */
/* -------------------------------- */

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3" />
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
      strokeWidth="2"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED1739"
      strokeWidth="2"
      className="shrink-0"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED1739"
      strokeWidth="2"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A69E98"
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

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LeftIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function RightIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function DownIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
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