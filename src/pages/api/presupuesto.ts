import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:200px;vertical-align:top;color:#444;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;color:#222;white-space:pre-wrap;">${value}</td>
    </tr>`;
}

function section(title: string, content: string) {
  return `
    <h3 style="margin:28px 0 12px;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#00cc6e;">${title}</h3>
    <table style="width:100%;border-collapse:collapse;">${content}</table>`;
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const nombre = data.get("nombre")?.toString().trim() ?? "";
  const email = data.get("email")?.toString().trim() ?? "";
  const telefono = data.get("telefono")?.toString().trim();
  const tipo = data.get("tipo")?.toString().trim() ?? "";
  const marca = data.get("marca")?.toString().trim() ?? "";
  const negocio = data.get("negocio")?.toString().trim() ?? "";
  const clienteIdeal = data.get("clienteIdeal")?.toString().trim();
  const branding = data.get("branding")?.toString().trim() ?? "";
  const colores = data.get("colores")?.toString().trim();
  const estilos = data.getAll("estilos").map(v => v.toString()).join(", ");
  const referencias = data.get("referencias")?.toString().trim();
  const secciones = data.getAll("secciones").map(v => v.toString()).join(", ");
  const objetivo = data.get("objetivo")?.toString().trim() ?? "";
  const fotos = data.get("fotos")?.toString().trim();
  const funciones = data.getAll("funciones").map(v => v.toString()).join(", ");
  const animaciones = data.get("animaciones")?.toString().trim();
  const presupuesto = data.get("presupuesto")?.toString().trim();
  const plazo = data.get("plazo")?.toString().trim();
  const adicional = data.get("adicional")?.toString().trim();

  if (!nombre || !email || !tipo || !marca || !negocio || !branding || !objetivo) {
    return new Response(
      JSON.stringify({ error: "Completá los campos obligatorios." }),
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "El email no es válido." }),
      { status: 400 }
    );
  }

  const html = `
    <div style="font-family:sans-serif;max-width:680px;margin:0 auto;color:#222;">
      <div style="background:#0a0a0a;padding:32px;border-radius:12px 12px 0 0;">
        <h1 style="color:#00ff88;margin:0;font-size:20px;">Nueva solicitud de presupuesto web</h1>
        <p style="color:#999;margin:8px 0 0;font-size:13px;">${nombre} · ${marca} · ${tipo}</p>
      </div>
      <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;">

        ${section("Contacto",
          row("Nombre", nombre) +
          row("Email", email) +
          row("Teléfono", telefono)
        )}

        ${section("Proyecto",
          row("Tipo", tipo) +
          row("Marca / Proyecto", marca) +
          row("Descripción del negocio", negocio) +
          row("Cliente ideal", clienteIdeal)
        )}

        ${section("Estética y branding",
          row("Branding actual", branding) +
          row("Colores / estilo visual", colores) +
          row("Estilo buscado", estilos || undefined) +
          row("Referencias web", referencias)
        )}

        ${section("Estructura y contenido",
          row("Secciones", secciones || undefined) +
          row("Objetivo principal", objetivo) +
          row("Fotos propias", fotos)
        )}

        ${section("Funcionalidades",
          row("Funciones especiales", funciones || undefined) +
          row("Animaciones / efectos", animaciones)
        )}

        ${section("Presupuesto y plazo",
          row("Presupuesto estimado", presupuesto) +
          row("Plazo deseado", plazo) +
          row("Comentarios adicionales", adicional)
        )}

        <div style="margin-top:32px;">
          <a href="mailto:${email}" style="background:#00ff88;color:#0a0a0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
            Responder a ${nombre}
          </a>
        </div>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "Formulario Kernel <onboarding@resend.dev>",
    to: "cramirezdiaz.dev@gmail.com",
    replyTo: email,
    subject: `Presupuesto web: ${marca} (${tipo})`,
    html,
  });

  if (error) {
    return new Response(
      JSON.stringify({ error: "Error al enviar. Intentá de nuevo." }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
