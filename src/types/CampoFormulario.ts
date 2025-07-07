export interface CampoFormulario {
  tipo: 'text' | 'number' | 'checkbox' | 'select'
  id?: string
  chave: string
  label: string
  placeholder?: string
  initialValue?: any
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
