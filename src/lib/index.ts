import mjml2html from "mjml"
import type { SvelteComponent } from "svelte"
import Mail from "../routes/email/welcome/welcome.mail.svelte";
import schema from "@devlog/schema-nodejs";

const stripSvelteClasses = (html: string) =>
  html.replaceAll(/class="s-[\w-]+"/g, "")

export const renderMjml = (
  component: new (...args: any[]) => SvelteComponent<any>,
  props: TemplateForm
) => {
  const ssrComponent = component as unknown as ReturnType<any>

  const { html: body, css, head } = ssrComponent.render((props.fields || []).reduce((acc, item) => ({...acc, [item.name]: item.value}), {}))

  const mjml = `<mjml>
        <mj-head>
          ${stripSvelteClasses(head)}
          <mj-style>${css.code}</mj-style>
        </mj-head>
        <mj-body>${stripSvelteClasses(body)}</mj-body>
      </mjml>`

  const { html, errors } = mjml2html(mjml)
  if (errors.length > 0) console.warn(errors)

  return html
}

export enum TemplateFormFieldType {
  STRING = 0
}

export interface TemplateFormField {
  name: string,
  type: TemplateFormFieldType,
  value: any | undefined
}

export interface TemplateForm {
  fields: TemplateFormField[]
}

export const createTemplateForm = (obj: object): TemplateForm => {
  const fields: TemplateFormField[] = Object.keys(obj).map((curr) => {
    return {
      value: (obj as any)[curr],
      type: TemplateFormFieldType.STRING,
      name: curr
    }
  })

  return {
    fields
  }
}

export const createActions = (component: any) => ({
  'render': async ({request}: any) => {
    const body = (await request.formData())
    const template: TemplateForm = {
      fields: []
    }

    for (const itemName of body.keys()) {
      template.fields.push({
        name: itemName,
        value: body.get(itemName),
        type: TemplateFormFieldType.STRING
      })
    }

    return {
      html: renderMjml(component, template),
      template
    }
  }
})

export const loadTemplate = (template: TemplateForm) => {
  const html = renderMjml(Mail, template)

  return {
    html,
    template
  }
}

