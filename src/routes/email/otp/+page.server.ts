import { createActions, createTemplateForm, loadTemplate, renderMjml } from "$lib"
import Mail from './otp.mail.svelte'
import {OtpTemplate} from '@devlog/schema-ts'

export async function load() {
  const data = new OtpTemplate({
    otpCode: '9292'
  })
  const templateForm = createTemplateForm(JSON.parse(data.toJsonString()))
  return loadTemplate(templateForm)
}

export const actions = createActions(Mail, OtpTemplate)
