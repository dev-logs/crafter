import { generateTemplateHandler } from "$lib";
import Mail from './welcome.mail.svelte'

export const POST = generateTemplateHandler(Mail)
