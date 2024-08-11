import {
  createActions,
  createTemplateForm,
  loadTemplate,
} from "$lib"
import { Datetime, WelcomeTemplate } from "@devlog/schema-ts"
import Mail from './welcome.mail.svelte'

export async function load() {
  const datetime = new Datetime({
    utcMillisSinceEpoch: Date.now() as any
  })

  const schemaInstance = new WelcomeTemplate({
    userName: "Henry",
    datetime
  })

  const template = createTemplateForm({
    ...(JSON.parse(schemaInstance.toJsonString())),
    datetime: new Date(datetime.utcMillisSinceEpoch as any).toLocaleString()
  })

  return loadTemplate(template)
}

export const actions = createActions(Mail, WelcomeTemplate)
