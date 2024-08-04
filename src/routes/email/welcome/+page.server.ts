import {
  createActions,
  createTemplateForm,
  loadTemplate,
} from "$lib"
import Mail from './welcome.mail.svelte'
import schema from "@devlog/schema-nodejs"

export async function load() {
  const schemaInstance = new schema.WelcomeTemplate()
  const datetime = new schema.Datetime()
  // Set the default value for template
  schemaInstance.setUserName('Henry')
  datetime.setUtcMillisSinceEpoch(Date.now())
  schemaInstance.setDatetime(datetime)

  const template = createTemplateForm({
    ...schemaInstance.toObject(),
    datetime: new Date(datetime.getUtcMillisSinceEpoch())
  })

  return loadTemplate(template)
}

export const actions = createActions(Mail)