<script lang="ts">
    import type {PageData, ActionData} from '../routes/$types';
    import FormInput from "./FormInput.svelte";
    import Preview from "./Preview.svelte";

    export let data: PageData
    export let form: ActionData

    $: html = form?.html || data.html
    $: template = form?.template || data.template
</script>

<div class="h-full w-full p-5 flex flex-col gap-5">
    <FormInput template={template}/>
    <Preview html={html}/>
</div>
