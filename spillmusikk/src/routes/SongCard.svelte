<script>
    export let title
    export let game
    export let file

</script>

<p>‎ </p>
<p>{title} - {game}</p>


{#if file && file.asset.extension == "mp3"}
    <audio controls>

        <source src={file.asset.url} type="audio/mpeg">
    
    </audio>
{:else}
    <p>wrong filetype or file missing</p>
{/if}