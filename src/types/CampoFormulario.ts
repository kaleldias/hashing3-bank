export interface CampoFormulario {
  tipo: 'text' | 'number' | 'checkbox' | 'select'
  label: string
  chave: string
  placeholder?: string
  id?: string
  disabled?: boolean
  required?: boolean
  options?: {
    value: string | number
    label: string
    disabled?: boolean
    selected?: boolean
  }[]
  emptyMessage?: string
}
