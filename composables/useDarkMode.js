import { ref, watchEffect } from 'vue';

export default function useDarkMode() {
    const darkMode = ref(false);

    // When the composable is used, initialize it based on localStorage
    if (process.client) {
        darkMode.value = localStorage.getItem('darkMode') === 'true';
        updateHtmlClass(darkMode.value);
    }

    // Watch for changes in darkMode and update localStorage and html class
    watchEffect(() => {
        if (process.client) {
            localStorage.setItem('darkMode', darkMode.value);
            updateHtmlClass(darkMode.value);
        }
    });

    function toggleDarkMode() {
        darkMode.value = !darkMode.value;
    }

    function updateHtmlClass(isDark) {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }

    return {
        darkMode,
        toggleDarkMode,
    };
}
