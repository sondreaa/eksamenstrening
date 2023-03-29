<head>
    <title>Spillmusikk - eksamenstrening</title>
</head>

<div id="filter">
    <input type="checkbox" name="existing" bind:checked={exicheck}>
    <label for="existing">existing file</label>

    <input type="checkbox" name="missing" bind:checked={mischeck}>
    <label for="existing">missing file</label>

    <input type="checkbox" name="all" bind:checked={allcheck} on:change={func_allcheck}>
    <label for="all">all</label>
</div>

<div id="header">
    <h1>Musikk fra videospill - bibliotek</h1>


    <button on:click={()=>buttonsearch()}>søk etter: {buttontext}</button>

    <input type="text" bind:value={search}>



</div>


<div id="text">

    {#if search}
        <h4>SØK ETTER {search.toUpperCase()} ({buttontext.toUpperCase()})...</h4>
    {/if}
        

    {#each data.music as {title, game, file}, i}
        {#if buttontext == "title"}
            {#if search && title.toLowerCase().includes(search.toLowerCase())}

                {#if existingfiles.includes(data.music[i]) && exicheck}

                    <SongCard title={title} game={game} file={file}></SongCard>

                {:else if missingfiles.includes(data.music[i]) && mischeck}

                    <SongCard title={title} game={game} file={file}></SongCard>

                {/if}
            {/if}

        {:else}
            {#if search && game.toLowerCase().includes(search.toLowerCase())}

                {#if existingfiles.includes(data.music[i]) && exicheck}

                    <SongCard title={title} game={game} file={file}></SongCard>

                {:else if missingfiles.includes(data.music[i]) && mischeck}

                    <SongCard title={title} game={game} file={file}></SongCard>

                {/if}
                
            {/if}
        {/if}

    {/each}


    {#if !search}
        {#each data.music as {title, game, file}, i}
            
                {#if existingfiles.includes(data.music[i]) && exicheck}

                    <SongCard title={title} game={game} file={file}></SongCard>

                {:else if missingfiles.includes(data.music[i]) && mischeck}

                    <SongCard title={title} game={game} file={file}></SongCard>

                {/if}
        {/each}
    {/if}
</div>

<script>
    import SongCard from './SongCard.svelte';
    export let data;

    console.log(data.music)

    let search = ""

    let buttontext = "title"

    function buttonsearch() {
        if (buttontext == "title") {
            buttontext = "game"
        }else{
            buttontext = "title"
        }
    }
    

    let existingfiles = []
    let missingfiles = []

    for (let i = 0; i < data.music.length; i++) {
        // console.log(data.music[i].file)


        if (data.music[i].file && data.music[i].file.asset.extension == "mp3") {
            
            existingfiles.push(data.music[i])

        }else {

            missingfiles.push(data.music[i])

        }

    }
    // console.log("existing:", existingfiles)
    // console.log("missing:", missingfiles)

    
    let exicheck = true
    let mischeck = true

    let allcheck = true
    function func_allcheck(){
        if (allcheck){
            exicheck = true
            mischeck = true
        }else{
            exicheck = false
            mischeck = false

        }
    }








</script>

<style>

    #header{
        text-align: center;
    }
    #text{
        text-align: center;
    }

</style>