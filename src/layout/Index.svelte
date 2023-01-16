<script>
    import {darkmode} from "../state/darkmode-store.js";

    import Navbar from "../component/Navbar.svelte";
    import Drawer from "../component/Drawer.svelte";
    import {Route} from "svelte-router-spa";

    let isDarkMode;

    darkmode.subscribe(value => {
        isDarkMode = value
    })

</script>


<main class="{isDarkMode ? 'dark:bg-slate-900' : 'bg-[#E9DAC1]'} min-h-screen">
    <Navbar/>
    <Drawer/>
    <slot>
        <Route/>
    </slot>
</main>