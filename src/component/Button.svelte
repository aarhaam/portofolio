<script>
    let animation = false;
    export let text;
</script>

<button class="btn btn-primary bg-transparent border-2 border-[#22A39F] py-2 px-3 rounded-md transition hover:shadow-md hover:shadow-[#22A39F] text-black {animation === true ? 'animate-wiggle' : '' }"
    on:click={() => {
        animation = true
        setTimeout(() => {
            animation = false
        }, 1000)
    }}
>
    {text}
</button>