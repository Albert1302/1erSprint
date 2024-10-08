const { createApp, ref } = Vue;
createApp({
    setup() {
        const TAB = ref('inicio');
        const selectTab = (tab) => {
            TAB.value = tab;
        };
        return { TAB, selectTab };
    }
}).mount('#script');