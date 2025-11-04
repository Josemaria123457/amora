import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Amora | Pastelería y postres artesanales en Tlalpan",
  description:
    "Pastelería Amora: pasteles personalizados y postres artesanales. Ingredientes frescos y entrega local en Tlalpan, CDMX."
};

export default function HomePage() {
const destacados = [
  {
    titulo: "Galletas con chispas",
    img: "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1200",
    etiqueta: "Nuevo",
    desc: "Crujientes, con chispas de chocolate belga.",
    precio: "$65",
  },
  {
    titulo: "Pastel de vainilla",
    img: "https://images.unsplash.com/photo-1541782814452-d2a6428de879?q=80&w=1200",
    etiqueta: "Top ventas",
    desc: "Bizcocho húmedo con crema de vainilla natural.",
    precio: "$240",
  },
  {
    titulo: "Brownie de fresa",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200",
    desc: "Capa de chocolate intenso con fresas frescas.",
    precio: "$95",
  },
];



const temporada = [
  {
    titulo: "Mango & crema",
    img: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1400&auto=format&fit=crop",
    etiqueta: "Nuevo sabor",
    desc: "Suavidad de crema natural con trozos de mango fresco, ligero y tropical.",
    precio: "$120",
    tags: ["Frutal", "Cremoso"],
  },
  {
    titulo: "Durazno & vainilla",
    img: "https://images.unsplash.com/photo-1571115764590-02f084d72f6f?q=80&w=1400&auto=format&fit=crop",
    etiqueta: "Edición limitada",
    desc: "Bizcocho de vainilla con relleno de durazno caramelizado. Perfecto para tardes dulces.",
    precio: "$135",
    tags: ["Clásico", "Suave"],
  },
  {
    titulo: "Limón & merengue",
    img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1400&auto=format&fit=crop",
    etiqueta: "Favorito del mes",
    desc: "Relleno cítrico de limón fresco con cobertura de merengue dorado al horno.",
    precio: "$110",
    tags: ["Cítrico", "Ligero"],
  },
  {
    titulo: "Frutos rojos",
    img: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1400&auto=format&fit=crop",
    desc: "Pastel esponjoso con relleno de frutos rojos y crema de queso. Perfecto para compartir.",
    precio: "$145",
    tags: ["Frutal", "Suave"],
  },
];


const paquetes = [
  {
    titulo: "Cumple Peque",
    desc: "Ideal para fiestas infantiles o celebraciones pequeñas.",
    precio: "$890",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1400&auto=format&fit=crop",
    etiqueta: "Popular",
    beneficios: ["Pastel 1/4 kg", "12 cupcakes decorados", "Velas y toppers incluidos"],
  },
  {
    titulo: "Reunión Dulce",
    desc: "Perfecto para reuniones familiares o eventos casuales.",
    precio: "$1,690",
    img: "https://images.unsplash.com/photo-1497051788611-2c64812349b4?q=80&w=1400&auto=format&fit=crop",
    etiqueta: "Más pedido",
    beneficios: ["Pastel 1/2 kg", "24 cupcakes", "Decoración temática opcional"],
  },
  {
    titulo: "Evento Grande",
    desc: "Diseñado para grandes celebraciones o eventos corporativos.",
    precio: "$3,490",
    img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1400&auto=format&fit=crop",
    etiqueta: "Premium",
    beneficios: ["Pastel 1 kg", "Mesa de postres", "Montaje en evento incluido"],
  },
];


  const testimonios = [
    { nombre: "Mariana", texto: "El pastel personalizado quedó perfecto y delicioso." },
    { nombre: "Daniel", texto: "Cheesecake increíble, entrega puntual y gran presentación." },
    { nombre: "Rebeca", texto: "Cupcakes riquísimos. Pedido fácil y atención excelente." }
  ];

  const faqs = [
    { q: "¿Con cuánta anticipación hago un pedido personalizado?", a: "De 3 a 5 días. Para eventos grandes o diseños complejos, 1 semana." },
    { q: "¿Tienen entrega a domicilio?", a: "Sí, en Tlalpan y zonas cercanas. El costo depende de la distancia." },
    { q: "¿Opciones sin azúcar o sin gluten?", a: "Bajo pedido y según disponibilidad. Escríbenos para cotizar." }
  ];

  return (
    <>
      {/* A — HERO */}
      <section className="b-hero bg-a" aria-label="Portada de Amora">
        <div className="b-hero__wrap wrap">
          <div className="b-hero__grid">
            <div className="b-hero__text">
              <h1 className="b-hero__title">
                Disfruta <span className="b-hero__em">cada bocado</span>
              </h1>
              <p className="b-hero__sub">
                Productos recién horneados, hechos con amor para alegrar cada celebración.
              </p>
              <div className="b-hero__ctaRow">
                <Link href="/menu" className="b-btn">Comprar ahora</Link>
              </div>

              <div className="b-hero__legend">
                <span className="b-legend__line" />
                <span>Choco Croissant (0.65)</span>
              </div>
            </div>

            <div className="b-hero__media">
              <div className="b-hero__img">
                <Image
                  src="https://images.unsplash.com/photo-1560180474-e8563fd75bab?q=80&w=1800&auto=format&fit=crop"
                  alt="Croissant con relleno de chocolate"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <ul aria-hidden className="b-hero__stars"><li>✦</li><li>✦</li><li>✦</li><li>✦</li></ul>
            </div>
          </div>
        </div>
        <div className="b-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,40 1440,100 L1440,120 L0,120 Z" fill="var(--peach-2)"/>
          </svg>
        </div>
      </section>

      {/* B — BANDA INFO */}
      <section className="x-bar bg-b" aria-label="Información rápida">
        <div className="wrap x-bar__row">
          <div>🕒 Lun–Sáb 10:00–19:00</div>
          <div>📍 <Link href="https://maps.google.com/?q=Tlalpan%20CDMX" target="_blank">Tlalpan, CDMX</Link></div>
          <div>☎️ <Link href="/contacto">WhatsApp y correo</Link></div>
        </div>
      </section>

{/* A — DESTACADOS (sello premium con badges, hover y CTA) */}
<section className="b-signature bg-a" aria-labelledby="destacados-title">
  <div className="wrap">
    <header className="b-sig__head">
      <h2 id="destacados-title" className="b-sig__title">Nuestros destacados</h2>
      <p className="b-sig__intro">Hechos a mano, recién horneados y listos para endulzar tu día.</p>
    </header>

    <div className="b-sig__grid">
      {destacados.map((c) => (
        <article key={c.titulo} className="b-stamp" aria-label={c.titulo}>
          {c.etiqueta && <span className="b-badge">{c.etiqueta}</span>}

          <div className="b-stamp__inner">
            <div className="b-stamp__img">
              <Image
                src={c.img}
                alt={c.titulo}
                width={900}
                height={1200}
                className="b-stamp__imgEl"
              />
            </div>

            <div className="b-stamp__body">
              <h3 className="b-stamp__caption">{c.titulo}</h3>
              <p className="b-stamp__desc">{c.desc ?? "Sabor artesanal, textura perfecta y amor en cada bocado."}</p>

              <div className="b-stamp__foot">
                {c.precio && <span className="b-stamp__price">{c.precio}</span>}
                <Link href="/menu" className="btn btn--sm b-stamp__btn">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


{/* B — TEMPORADA (mejorado) */}
<section className="x-sec bg-b" aria-labelledby="sec-temp">
  <div className="wrap">
    <header className="t-head">
      <div>
        <h2 id="sec-temp" className="t-head__title">Sabores de temporada</h2>
        <p className="t-head__sub">Edición limitada, disponible mientras duren ingredientes.</p>
      </div>
      <Link href="/menu" className="btn btn--sm t-head__cta">Ver menú completo</Link>
    </header>

    <div className="t-grid t-grid--raised">
      {temporada.map((t) => (
        <article className="t-card t-card--lux" key={t.titulo} aria-label={t.titulo}>
          {/* Badge opcional si agregas t.etiqueta */}
          {t.etiqueta ? <span className="t-badge">{t.etiqueta}</span> : null}

          <div className="t-card__media">
            <Image
              src={t.img}
              alt={t.titulo}
              width={800}
              height={600}
              className="t-card__img"
              priority={false}
            />
          </div>

          <div className="t-card__body">
            <h3 className="t-card__title">{t.titulo}</h3>

            {/* Descripción opcional (usa fallback si no viene en datos) */}
            <p className="t-card__desc">
              {t.desc ?? "Receta fresca de temporada, perfecta para compartir."}
            </p>

            {/* Chips opcionales si agregas t.tags = ["Frutal","Cremoso"] */}
            {Array.isArray(t.tags) && t.tags.length > 0 ? (
              <ul className="t-chips" aria-label="Etiquetas de sabor">
                {t.tags.map((tag: string) => (
                  <li key={tag} className="t-chip">{tag}</li>
                ))}
              </ul>
            ) : null}

            <div className="t-card__foot">
              {/* Precio opcional si agregas t.precio */}
              {t.precio ? <span className="t-price">{t.precio}</span> : <span className="t-price t-price--muted">Desde $</span>}
              <Link href="/menu" className="btn btn--sm">Pedir</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


{/* A — PAQUETES (mejorado) */}
<section className="x-sec bg-a" aria-labelledby="sec-packs">
  <div className="wrap">
    <header className="p-head">
      <div>
        <h2 id="sec-packs" className="p-head__title">Paquetes para eventos</h2>
        <p className="p-head__sub">
          Diseñados para celebraciones pequeñas, reuniones o eventos especiales.
        </p>
      </div>
      <Link className="btn btn--sm p-head__cta" href="/contacto">Cotizar ahora</Link>
    </header>

    <div className="p-grid p-grid--raised">
      {paquetes.map((p) => (
        <article className="p-card p-card--deluxe" key={p.titulo} aria-label={p.titulo}>
          {p.etiqueta && <span className="p-badge">{p.etiqueta}</span>}

          <div className="p-card__media">
            <Image
              src={p.img}
              alt={p.titulo}
              width={1200}
              height={900}
              className="p-card__img"
            />
          </div>

          <div className="p-card__body">
            <h3 className="p-card__title">{p.titulo}</h3>
            <p className="p-card__desc">{p.desc}</p>

            {Array.isArray(p.beneficios) && (
              <ul className="p-list">
                {p.beneficios.map((b, i) => (
                  <li key={i}>🍰 {b}</li>
                ))}
              </ul>
            )}

            <div className="p-card__foot">
              <span className="p-price">{p.precio}</span>
              <Link href="/contacto" className="btn btn--sm">Ordenar</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


{/* B — CÓMO PEDIR (mejorado) */}
<section className="x-sec bg-b" aria-labelledby="sec-steps">
  <div className="wrap">
    <header className="steps-head">
      <h2 id="sec-steps" className="steps-title">Cómo hacer tu pedido</h2>
      <p className="steps-sub">
        Desde tu antojo hasta la entrega, cada paso está lleno de amor 💕
      </p>
    </header>

    <ol className="steps-grid">
      {[
        {
          icon: "🧁",
          titulo: "1. Elige tu favorito",
          texto: "Explora nuestro menú de pasteles y postres y selecciona el tamaño ideal.",
        },
        {
          icon: "🎨",
          titulo: "2. Personaliza el diseño",
          texto: "Indica sabores, colores y decoración personalizada para tu ocasión.",
        },
        {
          icon: "📅",
          titulo: "3. Confirma los detalles",
          texto: "Agrega la fecha, dirección de entrega y forma de pago segura.",
        },
        {
          icon: "🎉",
          titulo: "4. ¡Disfruta tu pedido!",
          texto: "Recibe tu pastel recién horneado y celebra con el sabor de Amora.",
        },
      ].map((s, i) => (
        <li key={i} className="step-card">
          <div className="step-icon">{s.icon}</div>
          <div className="step-text">
            <h3 className="step-title">{s.titulo}</h3>
            <p className="step-desc">{s.texto}</p>
          </div>
        </li>
      ))}
    </ol>

    <div className="steps-cta">
      <Link href="/contacto" className="btn">Hacer pedido</Link>
    </div>
  </div>
</section>

{/* A — SELLOS (mejorado) */}
<section className="x-sec bg-a" aria-labelledby="sec-trust">
  <div className="wrap">
    <header className="trust-head">
      <h2 id="sec-trust" className="trust-title">Lo que nos distingue</h2>
      <p className="trust-sub">Calidad artesanal, ingredientes reales y servicio confiable.</p>
    </header>

    <ul className="trust-grid" aria-label="Sellos de calidad de Amora">
      {[
        {
          icon: "🛡️",
          titulo: "Higiene certificada",
          desc: "Procesos de elaboración y empaque con estándares de seguridad.",
        },
        {
          icon: "🧁",
          titulo: "Hecho a mano",
          desc: "Cada pieza se prepara al momento, con técnicas artesanales.",
        },
        {
          icon: "🌿",
          titulo: "Ingredientes reales",
          desc: "Usamos vainilla, cacao y frutas naturales. Sin atajos.",
        },
        {
          icon: "🚚",
          titulo: "Entrega segura",
          desc: "Reparto local con cuidado de temperatura y empaque.",
        },
      ].map((f) => (
        <li key={f.titulo} className="trust-item">
          <div className="trust-ico" aria-hidden="true">{f.icon}</div>
          <div className="trust-text">
            <h3 className="trust-itemTitle">{f.titulo}</h3>
            <p className="trust-itemDesc">{f.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>


{/* B — TESTIMONIOS (mejorado) */}
<section className="x-sec bg-b" aria-labelledby="sec-testis">
  <div className="wrap">
    <header className="testi-head">
      <h2 id="sec-testis" className="testi-title">Opiniones de nuestros clientes</h2>
      <p className="testi-sub">El sabor de Amora deja huella en cada celebración 🎂</p>
    </header>

    <div className="testi-grid">
      {[
        {
          nombre: "Mariana",
          texto: "El pastel personalizado quedó perfecto y delicioso. ¡Superó mis expectativas!",
          img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
        },
        {
          nombre: "Daniel",
          texto: "Cheesecake increíble, entrega puntual y presentación impecable.",
          img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
        },
        {
          nombre: "Rebeca",
          texto: "Cupcakes riquísimos, suaves y con la decoración exacta que pedí.",
          img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop",
        },
      ].map((t, i) => (
        <figure key={i} className="testi-card">
          <div className="testi-avatar">
            <img src={t.img} alt={`Cliente ${t.nombre}`} className="testi-img" />
          </div>
          <blockquote className="testi-quote">“{t.texto}”</blockquote>
          <figcaption className="testi-name">★ ★ ★ ★ ★ — {t.nombre}</figcaption>
        </figure>
      ))}
    </div>
  </div>
</section>

{/* A — GALERÍA (mejorada) */}
<section className="x-sec bg-a" aria-labelledby="sec-gal">
  <div className="wrap">
    <header className="gal-head">
      <h2 id="sec-gal" className="gal-title">Galería de momentos dulces</h2>
      <p className="gal-sub">Un vistazo a nuestras creaciones más deliciosas y coloridas 💕</p>
    </header>

    <div className="gal-grid">
      {[
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497051788611-2c64812349b4?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541782814452-d2a6428de879?q=80&w=1200&auto=format&fit=crop"
      ].map((src, i) => (
        <figure key={i} className="gal-item">
          <Image
            src={src}
            alt={`Postre ${i + 1}`}
            width={800}
            height={700}
            className="gal-img"
          />
        </figure>
      ))}
    </div>
  </div>
</section>

{/* B — FAQ (mejorado) */}
<section className="x-sec bg-b" aria-labelledby="sec-faq">
  <div className="wrap">
    <header className="faq-head">
      <h2 id="sec-faq" className="faq-title">Preguntas frecuentes</h2>
      <p className="faq-sub">Resolvemos las dudas más comunes sobre pedidos, entregas y personalización.</p>
    </header>

    <div className="faq-grid">
      {[
        {
          q: "¿Con cuánta anticipación hago un pedido personalizado?",
          a: "De 3 a 5 días de anticipación. Para eventos grandes o diseños complejos, recomendamos 1 semana.",
        },
        {
          q: "¿Tienen entrega a domicilio?",
          a: "Sí, realizamos entregas en Tlalpan y zonas cercanas. El costo depende de la distancia y el tipo de pedido.",
        },
        {
          q: "¿Ofrecen opciones sin azúcar o sin gluten?",
          a: "Sí, bajo pedido y según disponibilidad. Escríbenos para cotizar y adaptar tu postre.",
        },
        {
          q: "¿Puedo personalizar el diseño del pastel?",
          a: "¡Por supuesto! Podemos adaptar colores, formas y decoración según tu celebración.",
        },
      ].map((f, i) => (
        <details key={i} className="faq-item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>


{/* A — CONTACTO (mejorado) */}
<section className="x-sec bg-a" aria-labelledby="sec-contacto">
  <div className="wrap">
    <header className="c-head">
      <div>
        <h2 id="sec-contacto" className="c-title">Contáctanos</h2>
        <p className="c-sub">
          Cuéntanos tu idea y armamos el postre perfecto para tu ocasión.
        </p>
      </div>
      <div className="c-badges" aria-label="Información de contacto">
        <span className="c-badge">🕒 Lun–Sáb 10:00–19:00</span>
        <a className="c-badge" href="https://maps.google.com/?q=Tlalpan%20CDMX" target="_blank" rel="noreferrer">📍 Tlalpan, CDMX</a>
        <a className="c-badge" href="mailto:hola@amora.mx">✉️ hola@amora.mx</a>
        <a className="c-badge" href="https://wa.me/5215512345678" target="_blank" rel="noreferrer">💬 WhatsApp</a>
      </div>
    </header>

    <form
      className="formCard"
      action="mailto:hola@amora.mx?subject=Nuevo%20pedido%20desde%20la%20web"
      method="POST"
      encType="text/plain"
    >
      {/* Honeypot anti-spam (oculto) */}
      <div className="hp">
        <label>Si eres humano, deja esto vacío
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="f-grid">
        {/* Columna 1 */}
        <div className="f-field">
          <label htmlFor="nombre">Nombre completo*</label>
          <input
            id="nombre"
            name="Nombre"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="f-field">
          <label htmlFor="email">Correo electrónico*</label>
          <input
            id="email"
            name="Email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>

        <div className="f-field">
          <label htmlFor="tel">Teléfono</label>
          <input
            id="tel"
            name="Teléfono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+52 55 0000 0000"
            pattern="^[0-9+()\s-]{7,}$"
            title="Ingresa un teléfono válido"
          />
        </div>

        <div className="f-field">
          <label htmlFor="servicio">Servicio*</label>
          <select id="servicio" name="Servicio" required defaultValue="">
            <option value="" disabled>Selecciona…</option>
            <option>Pastel personalizado</option>
            <option>Postres</option>
            <option>Paquete para evento</option>
            <option>Otro</option>
          </select>
        </div>

        {/* Columna 2 */}
        <div className="f-field">
          <label htmlFor="fecha">Fecha del evento</label>
          <input id="fecha" name="Fecha" type="date" />
        </div>

        <div className="f-field">
          <label htmlFor="tamano">Tamaño</label>
          <select id="tamano" name="Tamaño" defaultValue="">
            <option value="">Selecciona…</option>
            <option>1/4 kg</option>
            <option>1/2 kg</option>
            <option>1 kg</option>
            <option>Otro</option>
          </select>
        </div>

        <div className="f-field">
          <label htmlFor="entrega">Entrega</label>
          <select id="entrega" name="Entrega" defaultValue="">
            <option value="">Selecciona…</option>
            <option>Recoger en tienda</option>
            <option>Envío a domicilio</option>
          </select>
        </div>

        <div className="f-field">
          <label htmlFor="presupuesto">Presupuesto (opcional)</label>
          <input
            id="presupuesto"
            name="Presupuesto"
            type="text"
            inputMode="numeric"
            placeholder="$ — —"
          />
        </div>

        {/* Mensaje */}
        <div className="f-field f-colspan">
          <label htmlFor="mensaje">Mensaje*</label>
          <textarea
            id="mensaje"
            name="Mensaje"
            rows={5}
            placeholder="Sabores, diseño, cantidad, zona de entrega…"
            required
          />
          <p className="f-hint">Ej.: Pastel de vainilla con frutos rojos, 1 kg, decoración minimalista.</p>
        </div>

        {/* Legal/privacidad */}
        <div className="f-check f-colspan">
          <label className="f-check__label">
            <input type="checkbox" name="AvisoPrivacidad" required /> Acepto el aviso de privacidad
          </label>
        </div>

        {/* Acciones */}
        <div className="f-actions f-colspan">
          <button type="submit" className="btn">Enviar</button>
          <a href="https://wa.me/5215512345678" className="btn btn--light">Escribir por WhatsApp</a>
          <p className="f-hint">Te responderemos por correo o WhatsApp en horario laboral.</p>
        </div>
      </div>
    </form>

    {/* Nota sobre mailto */}
    <p className="c-note">
      Consejo: si tu navegador no abre tu app de correo automáticamente, usa el botón de WhatsApp.
    </p>
  </div>
</section>


{/* B — CTA FINAL (mejorada) */}
<section className="x-cta bg-b" aria-label="Llamado a la acción">
  <div className="wrap cta-final">
    <header className="cta-head">
      <h2 className="cta-title">¿Listo para endulzar tu día?</h2>
      <p className="cta-sub">
        Haz tu pedido ahora y agenda tu entrega. Postres frescos, ingredientes reales y amor en cada bocado.
      </p>
    </header>

    <div className="cta-actions">
      <Link className="btn" href="/menu">Ver menú</Link>
      <Link className="btn btn--light" href="/contacto">Pedir ahora</Link>
      <a className="btn btn--ghost" href="https://wa.me/5215512345678" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>

    <ul className="cta-trust" aria-label="Sellos de confianza">
      <li>🧁 Hecho a Mano</li>
      <li>🌿 Ingredientes reales</li>
      <li>🚚 Entrega segura</li>
    </ul>

    <p className="cta-note">Lun–Sáb 10:00–19:00 · Tlalpan, CDMX</p>
  </div>
</section>
    </>
  );
}