// Cuando la marca cambie, modificar solo este valor.
export const brandName = "STEMBOT 3D";

export const brandDescriptor = "Tecnología y software";

export const whatsappUrl =
  "https://wa.me/593993311974?text=Hola%20STEM%20BOT%203D%2C%20quiero%20hablar%20sobre%20una%20idea%20tecnol%C3%B3gica.";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/stembot3d/" },
  { label: "TikTok", href: "https://www.tiktok.com/@stem_bot_3d" },
  { label: "WhatsApp", href: whatsappUrl },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const heroContent = {
  label: "TECNOLOGÍA · SOFTWARE · AUTOMATIZACIÓN",
  title: "Construyo tecnología para convertir ideas en sistemas reales.",
  description:
    "Software, electrónica y soluciones digitales para crear proyectos útiles, modernos y bien pensados.",
  primaryCta: "Ver lo que hago",
  secondaryCta: "Hablemos por WhatsApp",
  meta: "software · web · automatización · electrónica",
};

export const pillarsSection = {
  label: "Servicios",
  title: "Dos formas de construir",
  description:
    "Combino pensamiento técnico, software y mundo físico para convertir ideas en herramientas útiles.",
  items: [
    {
      number: "01",
      title: "Tecnología",
      description:
        "Prototipos, electrónica, automatización, impresión 3D, sensores, dispositivos conectados y soluciones que mezclan hardware con ideas reales.",
      icon: "circuit",
      tags: ["Arduino", "ESP8266", "Sensores", "Impresión 3D", "Automatización"],
    },
    {
      number: "02",
      title: "Software",
      description:
        "Aplicaciones web, sistemas internos, interfaces, APIs, bases de datos y herramientas digitales para organizar, automatizar y escalar procesos.",
      icon: "chip",
      tags: ["Next.js", "React", "Node.js", "Supabase", "APIs"],
    },
  ],
};

export const projectsSection = {
  label: "Proyectos",
  title: "Proyectos en construcción",
  description: "Ideas que combinan software, electrónica y curiosidad técnica.",
  ecosystem: {
    title: "Ecosistema tecnológico",
    description:
      "Software, hardware e ideas conectadas para construir soluciones reales.",
    tags: [
      "Software",
      "Web",
      "APIs",
      "Bases de datos",
      "IoT",
      "Electrónica",
      "Automatización",
      "Diseño 3D",
    ],
  },
  items: [
    {
      number: "01",
      title: "Sistema web clínico",
      category: "Software · Next.js · Supabase",
      description:
        "Plataforma web modular para gestionar procesos clínicos y administrativos.",
      icon: "terminal",
    },
    {
      number: "02",
      title: "Brazo robótico controlado con mando",
      category: "Electrónica · Arduino · Servos",
      description:
        "Brazo robótico con control por mando, movimientos programables y secuencias.",
      icon: "robot",
    },
    {
      number: "03",
      title: "Automatización con ESP8266",
      category: "IoT · Hardware · Relés",
      description:
        "Dispositivos conectados para controlar y monitorear elementos físicos.",
      icon: "circuit",
    },
    {
      number: "04",
      title: "Diseño e impresión 3D",
      category: "Prototipado · Fabricación digital",
      description:
        "Piezas funcionales, soportes y componentes para proyectos tecnológicos.",
      icon: "cube",
    },
  ],
};

export const processSection = {
  label: "Sobre mí",
  title: "Cómo pienso los proyectos",
  text:
    "Me interesan los sistemas que funcionan bien, se entienden fácil y resuelven problemas reales.",
  principles: [
    "Pensar antes de construir",
    "Unir software y mundo físico",
    "Aprender creando",
  ],
};

export const ctaContent = {
  label: "Contacto",
  title: "¿Tienes una idea técnica?",
  text:
    "Podemos convertirla en una aplicación, un sistema, un prototipo o una solución conectada.",
  button: "Escribir por WhatsApp",
};

export const footerContent = {
  line: `${brandName} · ${brandDescriptor}`,
};

export const metadataContent = {
  title: `${brandName} | ${brandDescriptor}`,
  description:
    "Software, electrónica, automatización y soluciones digitales para convertir ideas en sistemas reales.",
};
