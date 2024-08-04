<script lang="ts">
    import "../app.css";
    import "../app.css";
    import "../app.css";
    $: selectedEmail = {
      path: '',
      name: 'Home'
    }

    const onEmailSelected = async (email: any) => {
        const response = await fetch(email.path)
        console.log(await response.text())
        selectedEmail = email
    }

    export let data: {emails: {name: string, path: string}[]}
</script>

<div class="flex flex-row font-mono h-screen mt-5 bg-gray-100">
    <div class="flex flex-col bg-gray-50 min-w-[300px] pt-10 h-full">
        <div class="flex flex-col border-b border-gray-300 px-5 py-2 gap-2">
            <span class="font-mono font-bold px-2 rounded-sm">■ Emails</span>
            {#each data.emails as email (email.name)}
                <div class="flex flex-col justify-start pl-5">
                    <button
                        on:click={() => onEmailSelected(email)}
                        class="flex items-center font-medium gap-2 justify-between w-full rounded-md hover:bg-gray-100 px-2 py-2">
                            → {email.name}
                    </button>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex flex-col h-full w-full flex-1 font-mono p-5 gap-5 justify-center items-center">
        {#if selectedEmail.path != ''}
            <iframe class="h-full w-full rounded-lg overflow-clip" src={selectedEmail.path} title={selectedEmail.name}/>}
        {/if}
    </div>
</div>
