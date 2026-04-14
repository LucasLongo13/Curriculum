<script>
	import { onMount } from 'svelte';

	let theme = 'light';

	function setTheme(newTheme) {
		theme = newTheme;
		applyTheme();
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		setTheme(savedTheme || systemTheme);
	});

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	function applyTheme() {
		const isDark = theme === 'dark';
		document.documentElement.classList.toggle('dark', isDark);
		document.body?.classList.toggle('dark', isDark);
		localStorage.setItem('theme', theme);
	}
</script>

<button
	on:click={toggleTheme}
	class="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:ring-2 ring-blue-500 transition-all active:scale-90"
	aria-label="Toggle Dark Mode"
	aria-pressed={theme === 'dark'}
>
	<span class="text-xl">{theme === 'light' ? '🌙' : '☀️'}</span>
</button>