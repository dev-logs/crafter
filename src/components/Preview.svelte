<script lang="ts">
    import "../app.css"
    export let html: String

    const screenSize = {
        phone: "width: 390px; height: 844px; overflow: scroll",
        tablet: "width: 820px; height: 1180px; overflow: scroll",
        desktop: "width: 1742px; height: 906px"
    }

    $: selectedScreenSize = screenSize.phone
</script>

<div class="h-full w-[100%]  bg-gray-300 overflow-clip">
    <div class="flex flex-col h-full w-full flex-1 font-mono gap-5 justify-center items-center">
        <div class="h-fit flex flex-col flex-1 w-full rounded-lg p-2 items-center gap-5">
            <div class="flex flex-row justify-end w-full gap-2">
                <button on:click={() => selectedScreenSize = screenSize.desktop} class="border border-gray-200 rounded-sm bg-gray-100 px-1"><svg width="26px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" stroke="#000000" stroke-width="2"> <path d="M55 2H9c-2.2 0-4 1.8-4 4v38c0 2.2 1.8 4 4 4h16l-3 6H21c-1.7 0-3 1.3-3 3v2h28v-2c0-1.7-1.3-3-3-3h-1l-3-6h16c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zM10 38c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm44 0H32V13h22v25z"></path> </g> </g></svg></button>
                <button on:click={() => selectedScreenSize = screenSize.tablet} class="border border-gray-200 rounded-sm bg-gray-100 px-1"><svg width="22px" height="55px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" stroke="#000000" stroke-width="2"> <path d="M52 2H12c-2.2 0-4 1.8-4 4v52c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zM34 58h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm14-5H16V9h32v44z"></path> </g> </g></svg></button>
                <button on:click={() => selectedScreenSize = screenSize.phone} class="border border-gray-200 rounded-sm bg-gray-100 px-1"><svg width="23px" height="38px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" stroke="#000000" stroke-width="2"> <path d="M42 1H22c-2.2 0-4 1.8-4 4v54c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V5c0-2.2-1.8-4-4-4zM32 60h-1c-.5 0-1-.4-1-1v-1c0-.6.5-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm12-7H20V7h24v46z"></path> </g> </g></svg></button>
            </div>
            <div class="overflow-scroll p-5 w-full flex justify-center">
                <iframe srcdoc="{html}" style="{selectedScreenSize}" class="border rounded-lg overflow-clip bg-white m-5"/>
            </div>
        </div>
    </div>
</div>
