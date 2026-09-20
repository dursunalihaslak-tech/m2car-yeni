import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const konuEtiketleri: Record<string, string> = {
  rezervasyon: "Rezervasyon",
  "arac-kiralama": "Araç Kiralama",
  kurumsal: "Kurumsal Kiralama",
  filo: "Filo Talebi",
  diger: "Diğer",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const adSoyad = String(body.adSoyad ?? "").trim();
    const telefon = String(body.telefon ?? "").trim();
    const email = String(body.email ?? "").trim();
    const konu = String(body.konu ?? "").trim();
    const mesaj = String(body.mesaj ?? "").trim();

    if (!adSoyad || !telefon || !email || !konu || !mesaj) {
      return NextResponse.json(
        { error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const konuMetni = konuEtiketleri[konu] ?? konu;

    const { error } = await resend.emails.send({
      from: "M2CAR Web Sitesi <web@m2car.com.tr>",
      to: ["info@m2car.com.tr"],
      replyTo: email,
      subject: `M2CAR İletişim Formu - ${konuMetni}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;color:#332F2C">
          <h2 style="color:#ED1739">Yeni İletişim Formu Mesajı</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Ad Soyad</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(adSoyad)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Telefon</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(telefon)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>E-posta</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Konu</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(konuMetni)}</td></tr>
          </table>
          <div style="margin-top:20px">
            <strong>Mesaj</strong>
            <p style="white-space:pre-wrap;line-height:1.6;background:#FBF8F4;padding:15px;border-radius:8px">${escapeHtml(mesaj)}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend iletişim formu hatası:", error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("İletişim API hatası:", error);
    return NextResponse.json(
      { error: "Beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}
