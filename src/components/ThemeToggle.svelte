<script>
    import { onMount } from 'svelte'; // Importa el ciclo de vida para ejecutar código solo en el navegador.

    let theme = 'light'; // Declara una variable reactiva para guardar el tema actual (por defecto 'light').

    // Función central para cambiar el valor del tema y ejecutar los cambios visuales.
    function setTheme(newTheme) {
        theme = newTheme; // Actualiza la variable de estado.
        applyTheme();     // Llama a la función que modifica el HTML real.
    }

    // Se ejecuta una sola vez cuando el componente se carga en la pantalla.
    onMount(() => {
        
        const savedTheme = localStorage.getItem('theme');
        
        
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        
      
        setTheme(savedTheme || systemTheme);
    });

    // Cambia de luz a oscuridad y viceversa al hacer clic.
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    // Aplica los cambios técnicos necesarios para que Tailwind y el navegador se enteren del cambio.
    function applyTheme() {
        const isDark = theme === 'dark';
        
        // Agrega o quita la clase 'dark' a la etiqueta principal <html>
       
        document.documentElement.classList.toggle('dark', isDark);
        
        // Opcional: Hace lo mismo en el <body> por si hay estilos específicos ahí
        document.body?.classList.toggle('dark', isDark);
        
        // Guarda la elección en el almacenamiento local para que no se pierda al recargar la página
        localStorage.setItem('theme', theme);
    }
</script>