<script>
    let animation = false;
</script>

<button class="btn btn-primary bg-blue-600 hover:bg-blue-700 py-1 px-2 text-white {animation === true ? 'animate-wiggle' : '' }"
    on:click={() => {
        animation = true
        setTimeout(() => {
            animation = false
        }, 1000)
    }}
>
    Primary
</button>