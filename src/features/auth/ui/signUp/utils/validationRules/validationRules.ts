import { FormData } from '@/features/auth/ui/signUp/ui/singUpForm'
export const validationRulesForSignUpForm = {
  confirmPassword: {
    required: 'Password confirmation is required',
    validate: (value: string, { password }: FormData) =>
      value === password || 'Passwords do not match',
  },

  email: {
    pattern: {
      message: 'Invalid email format',
      value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    },
    required: 'Email is required',
  },
  password: {
    maxLength: { message: 'Max length is 20', value: 20 },
    minLength: { message: 'Min length is 6', value: 6 },
    pattern: {
      message: 'Password must include uppercase, lowercase, number, and special character',
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*]).{6,20}$/,
    },
    required: 'Password is required',
  },
  userName: {
    maxLength: { message: 'Max length is 30', value: 30 },
    minLength: { message: 'Min length is 6', value: 6 },
    pattern: {
      message: 'Invalid username (use letters, numbers, _, -)',
      value: /^[\w_-]{6,30}$/,
    },
    required: 'Username is required',
  },
}
