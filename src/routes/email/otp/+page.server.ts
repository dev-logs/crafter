import { renderMjml } from "$lib"
import Mail from './otp.mail.svelte'
import schema from '@devlog/schema-nodejs'

export async function load() {
  const html = renderMjml(Mail, {})
  const template = new schema.WelcomeTemplate()
  return {
    html
  }
}
