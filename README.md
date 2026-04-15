Mi Portafolio con Astro, Svelte 5 y Tailwind v4
Tecnologías utilizadas
Astro 5: Framework principal para una carga ultrarrápida (Zero JS por defecto).

Svelte 5: Utilizado para componentes interactivos (como el cambio de tema) usando Runes ($state, $effect).

Tailwind CSS v4: El motor de estilos más moderno para un diseño responsivo y limpio.

Bun: Como runtime y gestor de paquetes para una ejecución veloz.

Características principales
Navegación Fluida: Implementación de ClientRouter para transiciones suaves entre páginas sin recarga completa.

Modo Oscuro Persistente: Sistema de detección de preferencia del sistema y guardado en localStorage.

Diseño Responsivo: Optimizado para dispositivos móviles, tablets y computadoras.

Arquitectura de Componentes: Uso de componentes reutilizables en .astro y .svelte.

Estructura del Proyecto
Plaintext
/ 
├── src/
│   ├── components/     # Componentes (Card.astro, ThemeToggle.svelte)
│   ├── layouts/        # Estructura base de las páginas (Layout.astro)
│   ├── pages/          # Rutas: Inicio, Experiencia, Proyectos y Contacto
│   └── styles/         # Configuración global de CSS y Tailwind
├── public/             # Archivos estáticos (Imágenes, Favicon)
├── tailwind.config.mjs # Configuración del motor de estilos
└── astro.config.mjs    # Integración de Svelte y Tailwind
Configuración y Solución de Problemas
Durante el desarrollo, superamos varios retos técnicos importantes:

Tailwind v4 Integration: Configuramos @tailwindcss/postcss para asegurar la compatibilidad con el nuevo motor de estilos.

Hidratación de Componentes: Aprendimos a usar la directiva client:load en Astro para que los botones interactivos (como el de modo oscuro) funcionen en el navegador.

Persistencia de Tema: Creamos un script is:inline en el Layout para evitar el "flash blanco" al recargar la página en modo oscuro.

Cómo ejecutarlo localmente
Clona este repositorio:

Bash
git clone https://github.com/tu-usuario/tu-repositorio.git
Instala las dependencias con Bun:

Bash
bun install
Inicia el servidor de desarrollo:

Bash
bun dev
Abre http://localhost:4321 en tu navegador.