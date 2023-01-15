<script>
    import {darkmode} from "../state/darkmode-store.js";

    import Navbar from "../component/Navbar.svelte";
    import Drawer from "../component/Drawer.svelte";
    import {Route} from "svelte-router-spa";

    let isDarkMode;

    darkmode.subscribe(value => {
        isDarkMode = value
    })

    export let currentRoute;
    export let params;
</script>


<main class="{isDarkMode ? 'dark:bg-gray-900' : 'bg-[#E9DAC1]'} min-h-screen">
    <Navbar/>
    <Drawer/>
    <slot>
        <Route {currentRoute} {params} />
    </slot>
</main>