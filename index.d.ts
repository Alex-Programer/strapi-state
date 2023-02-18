type Type = "collection" | "single"

interface Options {
  baseURL: string
  contentType: string
  type?: Type
  apiToken?: string
  auto?: boolean
  debounce?: number
}

interface ProvideAPI {
  load: () => void
  getItem: () => void
  createItem: () => void
  deleteItem: () => void
  updateItem: () => void
}

interface State<T, K extends Type> {
  data: K extends "collection" ? T[] : T
  error: Error | null
  loading: boolean
}
