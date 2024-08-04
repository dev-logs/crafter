<script lang="ts">
    export let template: TemplateForm
    import type {TemplateForm} from "$lib";

    let formData = template
    const onChanged = (key: string, value: any) => {
        formData = {
            ...formData,
            [key]: value
        }
    }
</script>

<div class="h-[300px] m-2 w-[99%] pt-5 grid grid-cols-4 px-5 py-2 gap-2 rounded-lg bg-gray-200">
    <form action="?/render" method="post">
    {#each formData.fields as field (field.name)}
        <div class="font-mono gap-2 col-span-2 flex flex-col h-fit p-2 rounded-lg bg-gray-100">
            <span class="">{field.name}</span>
            <input name={field.name} class="bg-gray-200 py-2 rounded-lg px-2" on:change={(e) => onChanged(field.name, e.target?.value ?? '')} value={field.value}>
        </div>
    {/each}
    <button class="mt-2 bg-white rounded-lg text-sm font-bold px-3 py-2" type="submit">Reload</button>
    </form>
</div>
