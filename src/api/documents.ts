import type { Document } from '@/types/documents'

const API_BASE = import.meta.env.VITE_API_BASE_URL

export async function fetchDocuments(query: string): Promise<Document[]> {
  try {
    const result = await fetch(`${API_BASE}/user/docs?search=${query}`)

    if (!result.ok) throw new Error('Ошибка при загрузке документов')

    return await result.json()
  } catch (err) {
    console.error(err)
    throw err
  }
}
