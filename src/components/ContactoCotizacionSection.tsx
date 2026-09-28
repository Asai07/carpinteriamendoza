import { useState, FormEvent, ChangeEvent } from 'react';

interface ContactoCotizacionProps {
  initialWood?: string;
  initialProject?: string;
  onSuccessSubmit: (quoteData: {
    fullName: string;
    email: string;
    projectType: string;
    wood: string;
    dimensions: string;
    details: string;
    fileName?: string;
    quoteId: string;
  }) => void;
}

export default function ContactoCotizacionSection({
  initialWood = 'Melamina de Alta Calidad',
  initialProject = 'Cocina integral a medida',
  onSuccessSubmit
}: ContactoCotizacionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Añadí teléfono, vital para negocios locales
  const [projectType, setProjectType] = useState(initialProject);
  const [woodPreference, setWoodPreference] = useState(initialWood);
  const [dimensions, setDimensions] = useState('');
  const [details, setDetails] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos el envío
    setTimeout(() => {
      const quoteId = `CM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      onSuccessSubmit({
        fullName,
        email,
        projectType,
        wood: woodPreference,
        dimensions: dimensions || 'Medidas por definir',
        details: details || 'Sin detalles adicionales',
        fileName: attachedFile?.name,
        quoteId
      });
      // Limpiar formulario
      setFullName('');
      setEmail('');
      setPhone('');
      setDimensions('');
      setDetails('');
      setAttachedFile(null);
    }, 800);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#151515] text-[#ffffff]" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-20">

          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#e3000f] block mb-4">
              Cotiza sin Compromiso
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffffff] tracking-tight leading-[1.05] mb-6">
              Hagamos realidad tu proyecto
            </h2>
            <p className="text-[#cccccc] text-base font-medium leading-relaxed mb-10">
              ¿Tienes en mente remodelar tu cocina, armar un clóset o necesitas un mueble a medida? Déjanos tus datos o mándanos un WhatsApp. Te asesoramos con los materiales y nos ajustamos a tu espacio.
            </p>

            {/* Tarjetas de Contacto Rápidas */}
            <div className="space-y-4">
              {/* WhatsApp / Teléfono */}
              <div className="p-6 rounded-2xl bg-[#111111] border border-[#444444] shadow-sm flex items-start gap-5 hover:border-[#e3000f]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#151515] text-[#e3000f] flex items-center justify-center shrink-0 border border-[#444444]">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#e3000f] uppercase tracking-widest mb-1">
                    WhatsApp Directo
                  </h4>
                  <p className="text-sm text-[#ffffff] font-medium">
                    +52 81 1322 8528 <span className="text-[#cccccc] text-xs font-normal ml-1">(Respondemos rápido)</span>
                  </p>
                </div>
              </div>

              {/* Correo */}
              <div className="p-6 rounded-2xl bg-[#111111] border border-[#444444] shadow-sm flex items-start gap-5 hover:border-[#e3000f]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#151515] text-[#e3000f] flex items-center justify-center shrink-0 border border-[#444444]">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#e3000f] uppercase tracking-widest mb-1">
                    Correo
                  </h4>
                  <p className="text-sm text-[#ffffff] font-medium break-all">
                    carpinteriamendoza_david@hotmail.com
                  </p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="p-6 rounded-2xl bg-[#111111] border border-[#444444] shadow-sm flex items-start gap-5 hover:border-[#e3000f]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#151515] text-[#e3000f] flex items-center justify-center shrink-0 border border-[#444444]">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#e3000f] uppercase tracking-widest mb-1">
                    Nuestro Taller
                  </h4>
                  <p className="text-sm text-[#ffffff] font-medium leading-relaxed">
                    Av. Plutarco Elias Calles #333 Col. Unión Modelo, GPE. N.L.<br />
                    <span className="text-[#cccccc] text-xs font-normal">Lunes a Viernes de 9:00 AM a 6:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Moderno */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border border-[#444444] shadow-xl relative overflow-hidden">
              {/* Elemento decorativo sutil en el fondo del formulario */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e3000f]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#ffffff] mb-8 relative z-10">
                Cuéntanos sobre tu idea
              </h3>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e3000f] mb-2 pl-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-[#151515] border border-[#444444] rounded-xl p-3.5 text-sm text-[#ffffff] placeholder-[#777777] focus:outline-none focus:border-[#e3000f] focus:ring-1 focus:ring-[#e3000f] transition-all shadow-sm"
                    />
                  </div>
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e3000f] mb-2 pl-2">
                      WhatsApp o Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="81 0000 0000"
                      className="w-full bg-[#151515] border border-[#444444] rounded-xl p-3.5 text-sm text-[#ffffff] placeholder-[#777777] focus:outline-none focus:border-[#e3000f] focus:ring-1 focus:ring-[#e3000f] transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Tipo de Proyecto */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e3000f] mb-2 pl-2">
                      ¿Qué necesitas?
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[#151515] border border-[#444444] rounded-xl p-3.5 text-sm text-[#ffffff] focus:outline-none focus:border-[#e3000f] focus:ring-1 focus:ring-[#e3000f] transition-all shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="Cocina integral a medida" className="bg-[#151515] text-[#ffffff]">Cocina Integral</option>
                      <option value="Clóset o Vestidor" className="bg-[#151515] text-[#ffffff]">Clóset o Vestidor</option>
                      <option value="Puerta o Escalera" className="bg-[#151515] text-[#ffffff]">Puerta / Escalera</option>
                      <option value="Mueble a medida (TV, Comedor)" className="bg-[#151515] text-[#ffffff]">Mueble a medida (TV, Comedor)</option>
                      <option value="Reparación o Mantenimiento" className="bg-[#151515] text-[#ffffff]">Reparación / Mantenimiento</option>
                      <option value="Otro" className="bg-[#151515] text-[#ffffff]">Otro proyecto</option>
                    </select>
                  </div>
                  {/* Material */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e3000f] mb-2 pl-2">
                      Material preferido
                    </label>
                    <select
                      value={woodPreference}
                      onChange={(e) => setWoodPreference(e.target.value)}
                      className="w-full bg-[#151515] border border-[#444444] rounded-xl p-3.5 text-sm text-[#ffffff] focus:outline-none focus:border-[#e3000f] focus:ring-1 focus:ring-[#e3000f] transition-all shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="Melamina de Alta Calidad" className="bg-[#151515] text-[#ffffff]">Melamina (Ideal cocinas/clósets)</option>
                      <option value="Encino Americano" className="bg-[#151515] text-[#ffffff]">Encino Americano</option>
                      <option value="Pino Nacional" className="bg-[#151515] text-[#ffffff]">Pino Nacional (Económico)</option>
                      <option value="Roble o Nogal" className="bg-[#151515] text-[#ffffff]">Roble o Nogal (Premium)</option>
                      <option value="No estoy seguro, necesito asesoría" className="bg-[#151515] text-[#ffffff]">No sé, ¡ayúdenme a elegir!</option>
                    </select>
                  </div>
                </div>

                {/* Detalles */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e3000f] mb-2 pl-2">
                    Medidas aproximadas y detalles
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Ej. Quiero un clóset de 3 metros de ancho por 2.5 de alto. Me gustaría con cajones..."
                    className="w-full bg-[#151515] border border-[#444444] rounded-xl p-3.5 text-sm text-[#ffffff] placeholder-[#777777] focus:outline-none focus:border-[#e3000f] focus:ring-1 focus:ring-[#e3000f] transition-all shadow-sm resize-none"
                  />
                </div>

                {/* Adjuntar Archivo */}
                <div className="relative overflow-hidden rounded-xl bg-[#151515] border-2 border-dashed border-[#444444] hover:border-[#e3000f]/50 transition-colors p-6 flex flex-col items-center justify-center text-center group">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                  />
                  <div className="w-10 h-10 rounded-full bg-[#111111] shadow-sm flex items-center justify-center text-[#e3000f] mb-3 group-hover:text-[#e3000f] transition-colors border border-[#444444]">
                    <span className="material-symbols-outlined">{attachedFile ? 'check_circle' : 'add_photo_alternate'}</span>
                  </div>
                  <span className="block text-sm font-bold text-[#ffffff] mb-1">
                    {attachedFile ? attachedFile.name : 'Sube una foto de inspiración o un croquis'}
                  </span>
                  <span className="block text-[11px] text-[#cccccc]">
                    {attachedFile ? 'Haz clic para cambiar el archivo' : 'Toca aquí para buscar en tu galería (JPG, PNG, PDF)'}
                  </span>
                </div>

                {/* Botón de Enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-4 rounded-xl bg-[#e3000f] hover:bg-[#b3000c] active:scale-[0.98] text-white font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-[#333333] border-t-white rounded-full animate-spin"></span>
                      <span>Enviando datos...</span>
                    </>
                  ) : (
                    <>
                      <span>Solicitar Cotización</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-[#cccccc] mt-4">
                  Tus datos están seguros. Solo los usaremos para responder a tu solicitud.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}