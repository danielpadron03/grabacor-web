export default function GravoxLanding() {
  const services = [
    {
      title: "Grabado Láser en Metal",
      desc: "Marcados permanentes y acabados premium sobre acero",
    },
    {
      title: "Corte Láser en Metal",
      desc: "Piezas metálicas cortadas por CNC Láser o Plasma",
    },
    {
      title: "Placas Industriales",
      desc: "Identificación técnica, señalética y marcaje profesional.",
    },
    {
      title: "Personalización Premium",
      desc: "Logos, herramientas, accesorios y proyectos especiales.",
    },
  ];

  const materials = [
    "Acero inoxidable",
    "Aluminio",
    "Cobre",
    "Bronce",
    "Acero al carbono",
  ];

  const gallery = [
  '/images/trabajos/trabajo1.png',
  '/images/trabajos/trabajo2.jpeg',
  '/images/trabajos/trabajo3.png',
  '/images/trabajos/trabajo4.jpg',
  '/images/trabajos/trabajo5.jpg',
  '/images/trabajos/trabajo6.jpeg',
];

  return (
    <div
  className="text-white min-h-screen bg-cover bg-fixed bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(8,8,8,0.96), rgba(8,8,8,0.96)), url('/images/hero-bg.png')",
  }}
>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-widest text-cyan-400">
              GRABACOR ec
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-300">
            <a href="#servicios" className="hover:text-cyan-400 transition">
              Servicios
            </a>
            <a href="#galeria" className="hover:text-cyan-400 transition">
              Galería
            </a>
            <a href="#materiales" className="hover:text-cyan-400 transition">
              Materiales
            </a>
            <a href="#contacto" className="hover:text-cyan-400 transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
   <section
  className="relative h-screen flex items-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url('/images/hero-bg.png')",
  }}
>
        

  


      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Servicios
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Soluciones Láser Profesionales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/40 rounded-3xl p-8 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-black/40 border border-cyan-400/20 mb-6 flex items-center justify-center overflow-hidden">
  <img
    src={
      index === 0
        ? '/icons/mopa.png'
        : index === 1
        ? '/icons/corte.png'
        : index === 2
        ? '/icons/placa.png'
        : '/icons/premium.png'
    }
    alt="icon"
    className="w-10 h-10 object-contain mx-auto"
  />
</div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Galería
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Trabajos Realizados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item}
                className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-white/5 hover:scale-[1.02] transition duration-300"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-center p-6">
                  <img
  src={item}
  alt="Trabajo realizado"
  className="w-full h-full object-cover hover:scale-110 transition duration-500"
/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materiales" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Materiales
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-14">
            Materiales Compatibles
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {materials.map((material, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition text-lg"
              >
                {material}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 bg-gradient-to-b from-transparent to-cyan-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Proceso
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Cómo Trabajamos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Envío del diseño",
              "Cotización",
              "Producción",
              "Entrega",
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
              >
                <div className="text-5xl font-black text-cyan-400/30 mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-white/5 p-10 md:p-20 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,174,239,0.2),_transparent_70%)]" />

          <div className="relative z-10">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Contacto
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Cotiza tu Proyecto Hoy
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Envíanos tu diseño o idea y te ayudaremos a crear piezas metálicas con acabados profesionales y precisión láser.
            </p>

            <a
              href="https://wa.me/+593984592022"
              target="_blank"
              className="inline-flex bg-cyan-400 hover:bg-cyan-300 text-black font-black px-10 py-5 rounded-2xl text-lg transition shadow-2xl shadow-cyan-500/30"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © 2026 GRABACOR — Corte & Grabado Láser en Metal -- Sangolqui / Ecuador --
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/+593984592022"
        target="_blank"
        className="fixed bottom-6 right-6 bg-cyan-400 hover:bg-green-300 text-black font-bold px-6 py-4 rounded-full shadow-2xl shadow-cyan-500/40 transition z-50"
      >
        WhatsApp
      </a>
    </div>
  );
}
