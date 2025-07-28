// Landing Page con políticas legales y aviso de términos
import React from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LandingConPitch() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm("service_j5ir7ah", "template_q9emcpf", form, "aGwJU4Ce2H3odbzco")
      .then(() => {
        alert("✅ Mensaje enviado con éxito");
        form.reset();
      })
      .catch(() => {
        alert("❌ Error al enviar el mensaje, intenta más tarde");
      });
  };

  const useFadeIn = () => useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref1, inView1] = useFadeIn();
  const [ref2, inView2] = useFadeIn();
  const [ref3, inView3] = useFadeIn();
  const [ref4, inView4] = useFadeIn();
  const [ref5, inView5] = useFadeIn();
  const [ref6, inView6] = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Conecta Profesionales | Plataforma de Servicios Profesionales</title>
        <meta name="description" content="Encuentra y contrata profesionales verificados en segundos. Servicios confiables, pagos seguros y atención personalizada." />
        <meta name="keywords" content="servicios, profesionales, freelance, contratar, reseñas, reservas, confianza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Equipo Conecta" />
      </Helmet>

      <main className="grid grid-cols-1 gap-6 p-4 sm:p-6 max-w-5xl mx-auto">
        {/* SECCIONES ANTERIORES OMITIDAS PARA BREVEDAD */}

        {/* SECCIÓN POLÍTICAS Y TÉRMINOS */}
        <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
          <Card>
            <CardContent className="p-6 space-y-4 text-sm text-gray-700">
              <h2 className="text-2xl font-semibold">📑 Políticas de uso y términos legales</h2>
              <p><strong>1. Uso responsable:</strong> Los usuarios deben usar la app para fines lícitos, respetando las normas de convivencia y evitando cualquier conducta fraudulenta, ofensiva o ilegal.</p>
              <p><strong>2. Verificación de profesionales:</strong> Conecta verifica a los profesionales registrados mediante procesos internos. Sin embargo, no garantiza resultados ni se hace responsable de incumplimientos contractuales.</p>
              <p><strong>3. Condiciones al contratar:</strong> Al solicitar un servicio, el usuario acepta que cualquier acuerdo o ejecución del mismo recae exclusivamente entre él y el profesional seleccionado.</p>
              <p><strong>4. Limitación de responsabilidad:</strong> Conecta no ofrece seguros por accidentes, daños, pérdidas, robos o extravíos durante o después de la prestación del servicio. Se recomienda precaución y comunicación directa entre ambas partes.</p>
              <p><strong>5. Reembolsos:</strong> Conecta no garantiza reembolsos automáticos. Cada caso será evaluado con base en evidencias y políticas vigentes.</p>
              <p><strong>6. Cancelaciones:</strong> Las cancelaciones deben realizarse con al menos 24 horas de anticipación. De lo contrario, podrían aplicarse cargos o sanciones según el tipo de servicio.</p>
              <p><strong>7. Protección de datos:</strong> La información proporcionada será tratada con confidencialidad y en cumplimiento con la Ley de Protección de Datos Personales en Posesión de Particulares.</p>
              <p className="text-xs text-gray-500 italic">Última actualización: julio 2025</p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* FOOTER PROFESIONAL */}
      <footer className="bg-gray-900 text-white text-sm p-6 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Conecta. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-300">Aviso de privacidad</a>
            <a href="#" className="hover:text-blue-300">Términos de uso</a>
            <a href="mailto:contacto@conecta.com" className="hover:text-blue-300">Contacto</a>
          </div>
        </div>
      </footer>
    </>
  );
}
