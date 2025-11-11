export function downloadDocumentAsTxt(name: string, description: string) {
  const content = `Название: ${name}\nОписание: ${description}`
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${name}.txt`
  a.click()
  URL.revokeObjectURL(url)
}