export async function load(): Promise<{emails: {name: string, path: string}[]}> {
  const mails = import.meta.glob('./**/*mail.svelte')

  const templateNames = Object.keys(mails).map((it) => {
    const fileName = it.substring(it.lastIndexOf('/') + 1)
    const name = fileName.split('.')[0]
    const path = `${it.substring(1, it.lastIndexOf('/'))}`
    return {
      path,
      name
    }
  })

  return {
    emails: templateNames
  }
}
