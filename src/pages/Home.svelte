
<script>
    export let currentRoute;
    export let params;
</script>

<main class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mt-16 typewriter font-medium text-black dark:text-white">
        <h2 class="text-2xl">
            Hello, I'm Mahardika....
        </h2>
    </div>
    <p class="mt-1 text-lg typewriter-section font-normal">Frontend Engineer</p>
</main>


<style>
    @media only screen and (max-width: 512px) {
        .typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation:
                    typing 3s steps(100, end),
                    blink-caret 0.1s step-end infinite;
        }

        .typewriter-section {
            overflow: hidden;
            white-space: nowrap;
            animation:
                    typing 3s steps(100, end),
                    blink-caret 0.1s step-end infinite;
            animation-delay: 2.5s;
            animation-fill-mode: both;
        }


        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
    }

    @media screen and (min-width: 786px) {
        .typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation:
                    typing 5s steps(100, end),
                    blink-caret 0.1s step-end infinite;
        }

        .typewriter-section {
            overflow: hidden;
            white-space: nowrap;
            animation:
                    typing 5s steps(100, end),
                    blink-caret 0.1s step-end infinite;
            animation-delay: 1.5s;
            animation-fill-mode: both;
        }


        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
    }
</style>