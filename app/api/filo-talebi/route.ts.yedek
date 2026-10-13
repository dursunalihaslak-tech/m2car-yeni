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

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "E-posta servisi yapılandırılmamış." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const adSoyad = String(body.adSoyad ?? "").trim();
    const firma = String(body.firma ?? "").trim();
    const telefon = String(body.telefon ?? "").trim();
    const email = String(body.email ?? "").trim();
    const aracAdedi = String(body.aracAdedi ?? "").trim();
    const kiralamaSuresi = String(body.kiralamaSuresi ?? "").trim();
    const talepDetayi = String(body.talepDetayi ?? "").trim();

    if (
      !adSoyad ||
      !telefon ||
      !email ||
      !aracAdedi ||
      !kiralamaSuresi
    ) {
      return NextResponse.json(
        { message: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Geçerli bir e-posta adresi girin." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "M2CAR Web Sitesi <web@m2car.com.tr>",
      to: ["info@m2car.com.tr"],
      replyTo: email,
      subject: `Yeni Filo Talebi - ${adSoyad}`,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
          <head>
            <meta charset="UTF-8" />
          </head>

          <body style="margin:0;padding:0;background:#f7f5f3;font-family:Arial,Helvetica,sans-serif;color:#332f2c;">

            <div style="padding:30px 15px;">

              <div style="max-width:650px;margin:0 auto;background:#ffffff;border:1px solid #eee8e3;border-radius:14px;overflow:hidden;">

                <div style="background:#ed1739;padding:22px 25px;">
                  <div style="font-size:24px;font-weight:800;color:#ffffff;">
                    M2CAR
                  </div>

                  <div style="margin-top:4px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#ffffff;">
                    ARAÇ KİRALAMA
                  </div>
                </div>

                <div style="padding:25px;">

                  <div style="font-size:20px;font-weight:700;margin-bottom:5px;">
                    Yeni Filo Kiralama Talebi
                  </div>

                  <div style="font-size:13px;color:#817974;margin-bottom:24px;">
                    M2CAR web sitesi üzerinden yeni bir filo talebi gönderildi.
                  </div>

                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="width:100%;border-collapse:collapse;font-size:14px;"
                  >

                    <tr>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;font-weight:700;width:170px;">
                        Ad Soyad / Yetkili
                      </td>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;">
                        ${escapeHtml(adSoyad)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;font-weight:700;">
                        Firma
                      </td>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;">
                        ${escapeHtml(firma || "Belirtilmedi")}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;font-weight:700;">
                        Telefon
                      </td>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;">
                        ${escapeHtml(telefon)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;font-weight:700;">
                        E-posta
                      </td>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;">
                        ${escapeHtml(email)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;font-weight:700;">
                        Araç Adedi
                      </td>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;">
                        ${escapeHtml(aracAdedi)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;font-weight:700;">
                        Kiralama Süresi
                      </td>
                      <td style="padding:12px;border-bottom:1px solid #eee8e3;">
                        ${escapeHtml(kiralamaSuresi)}
                      </td>
                    </tr>

                  </table>

                  <div style="margin-top:22px;">

                    <div style="font-size:13px;font-weight:700;margin-bottom:8px;">
                      Talep Detayı
                    </div>

                    <div style="padding:15px;background:#fbf8f4;border-radius:8px;font-size:13px;line-height:1.7;white-space:pre-wrap;">
                      ${escapeHtml(
                        talepDetayi || "Talep detayı belirtilmedi."
                      )}
                    </div>

                  </div>

                  <div style="margin-top:25px;font-size:11px;line-height:1.6;color:#918883;">
                    Bu e-posta M2CAR web sitesindeki Filo Talebi formundan otomatik olarak gönderilmiştir.
                  </div>

                </div>

              </div>

            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend hatası:", error);

      return NextResponse.json(
        { message: "E-posta gönderilemedi." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Filo talebi API hatası:", error);

    return NextResponse.json(
      { message: "Beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}