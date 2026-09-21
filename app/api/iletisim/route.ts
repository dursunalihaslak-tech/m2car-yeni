import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
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
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY bulunamadı.");

      return NextResponse.json(
        { error: "E-posta servisi yapılandırılmamış." },
        { status: 500 }
      );
    }

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

    const { data, error } = await resend.emails.send({
      from: "M2CAR Web Sitesi <web@m2car.com.tr>",
      to: ["info@m2car.com.tr"],
      replyTo: email,

      subject: `Yeni İletişim Talebi - ${konuMetni} - ${adSoyad}`,

      text: `
M2CAR WEB SİTESİ - YENİ İLETİŞİM TALEBİ

Ad Soyad: ${adSoyad}
Telefon: ${telefon}
E-posta: ${email}
Konu: ${konuMetni}

Mesaj:
${mesaj}
      `.trim(),

      html: `
        <div style="
          margin:0;
          padding:30px 15px;
          background:#FBF9F6;
          font-family:Arial,Helvetica,sans-serif;
          color:#332F2C;
        ">
          <div style="
            max-width:650px;
            margin:0 auto;
            background:#ffffff;
            border:1px solid #EEE8E3;
            border-radius:14px;
            overflow:hidden;
          ">

            <div style="
              background:#ED1739;
              padding:22px 25px;
              color:#ffffff;
            ">
              <div style="
                font-size:21px;
                font-weight:700;
                margin-bottom:5px;
              ">
                Yeni İletişim Talebi
              </div>

              <div style="
                font-size:13px;
                color:rgba(255,255,255,.85);
              ">
                M2CAR web sitesi üzerinden yeni bir mesaj gönderildi.
              </div>
            </div>

            <div style="padding:25px;">

              <table style="
                width:100%;
                border-collapse:collapse;
                font-size:14px;
              ">

                <tr>
                  <td style="
                    width:145px;
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                    font-weight:700;
                  ">
                    Ad Soyad
                  </td>

                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                  ">
                    ${escapeHtml(adSoyad)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                    font-weight:700;
                  ">
                    Telefon
                  </td>

                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                  ">
                    ${escapeHtml(telefon)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                    font-weight:700;
                  ">
                    E-posta
                  </td>

                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                  ">
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                    font-weight:700;
                  ">
                    Konu
                  </td>

                  <td style="
                    padding:12px;
                    border-bottom:1px solid #EEE8E3;
                  ">
                    ${escapeHtml(konuMetni)}
                  </td>
                </tr>

              </table>

              <div style="margin-top:25px;">

                <div style="
                  margin-bottom:8px;
                  font-size:14px;
                  font-weight:700;
                ">
                  Mesaj
                </div>

                <div style="
                  padding:16px;
                  background:#FBF8F4;
                  border:1px solid #EEE8E3;
                  border-radius:10px;
                  font-size:14px;
                  line-height:1.7;
                  white-space:pre-wrap;
                ">${escapeHtml(mesaj)}</div>

              </div>

              <div style="
                margin-top:25px;
                font-size:11px;
                line-height:1.6;
                color:#918883;
              ">
                Bu e-posta M2CAR web sitesindeki İletişim formundan otomatik olarak gönderilmiştir.
              </div>

            </div>
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

    console.log("İletişim formu e-postası gönderildi:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Mesajınız başarıyla gönderildi.",
    });
  } catch (error) {
    console.error("İletişim API hatası:", error);

    return NextResponse.json(
      { error: "Beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}