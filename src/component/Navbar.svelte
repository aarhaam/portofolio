<script>
    import Text from "./Text.svelte";
    import Button from "./Button.svelte";
    import {sidebarShow} from "../sidebar-store.js";

    function showSidebar(){
        sidebarShow.set(true)
        console.log(true)
    }
</script>
<header aria-label="Site Header" class="bg-transparent animate__animated animate__backInDown">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <div class="flex-1 md:flex md:items-center md:gap-12">
                <a class="block font-bold" href="/">
                    <Text content="Mahardika.dev"/>
                </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">
                <nav aria-label="Site Nav" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <a
                                    class="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                            >
                                <Text content="About"/>
                            </a>
                        </li>

                        <li>
                            <a
                                    class="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                            >
                                <Text content="Careers"/>
                            </a>
                        </li>

                        <li>
                            <a
                                    class="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                            >
                                <Text content="Service"/>
                            </a>
                        </li>

                        <li>
                            <a
                                    class="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                            >
                                <Text content="Portfolio" />
                            </a>
                        </li>

                        <li>
                            <a
                                    class="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                            >
                                <Text content="Blogs" />
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4 hidden md:block">
                        <Button text="Hire me!" action="{showSidebar}"/>
                    </div>

                    <div class="block md:hidden">
                        <button
                                class="rounded bg-[#22A39F] p-2 text-white transition active:shadow-md active:shadow-[#22A39F]"
                        on:click={showSidebar}>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                            >
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>