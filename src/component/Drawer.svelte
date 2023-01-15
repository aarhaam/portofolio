<script>
    import {drawerShow} from "../state/drawer-store.js";

    let drawerShowing;

    drawerShow.subscribe(value => {
        drawerShowing = value
    })

    function hideSidebar(){
        drawerShow.set(false)
    }
</script>


<main>
    <aside class="fixed inset-y-0 right-0 z-50 flex animate__animated {drawerShowing === true ? 'animate__slideInRight' : drawerShowing === false ? 'animate__slideOutRight' : 'hidden'}">
        <div class="w-screen max-w-sm">
            <div class="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
                <div class="overflow-y-false">
                    <header class="flex h-16 items-center justify-between pl-6">
          <span class="text-sm font-medium uppercase tracking-widest">
            Menu
          </span>

                        <button
                                aria-label="Close menu"
                                class="h-16 w-16 border-l border-gray-200"
                                type="button"
                                on:click={hideSidebar}>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="mx-auto h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                            >
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </header>

                    <nav
                            class="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500"
                    >
                        <a href="/" class="px-6 py-3"> About </a>
                        <a href="/" class="px-6 py-3"> Careers </a>
                        <a href="/" class="px-6 py-3"> Service </a>
                        <a href="/" class="px-6 py-3"> Portfolio </a>
                        <a href="/" class="flex items-center px-6 py-3">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="mr-3 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                            >
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            Hire me!
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </aside>
</main>