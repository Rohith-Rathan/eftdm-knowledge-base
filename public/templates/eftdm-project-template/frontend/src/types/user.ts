// User Types
export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: 'admin' | 'user'
  createdAt: string
  updatedAt: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  user: User
  token: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form Types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea'
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
  validation?: any
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface InputProps {
  modelValue: string
  type?: 'text' | 'email' | 'password' | 'number'
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  icon?: any
  children?: NavigationItem[]
}

// Table Types
export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  width?: string
}

export interface TableRow {
  [key: string]: any
}

// Modal Types
export interface ModalProps {
  isOpen: boolean
  title: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closable?: boolean
}

// Toast Types
export interface ToastOptions {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  timeout?: number
  closeOnClick?: boolean
  pauseOnFocusLoss?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  draggablePercent?: number
  showCloseButtonOnHover?: boolean
  hideProgressBar?: boolean
  closeButton?: string
  icon?: boolean
  rtl?: boolean
}
