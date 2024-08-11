import { generateTemplateHandler } from "$lib";
import Mail from './otp.mail.svelte'

export const POST = generateTemplateHandler(Mail)
