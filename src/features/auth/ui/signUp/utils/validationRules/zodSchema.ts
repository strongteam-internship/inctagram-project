import { z } from 'zod'

export const signUpSchema = z
  .object({
    confirmPassword: z.string().nonempty('Password confirmation is required'), // Поле для подтверждения пароля

    email: z
      .string()
      .nonempty('Email is required') // Поле не должно быть пустым
      .regex(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format'), // Валидация формата email

    password: z
      .string()
      .nonempty('Password is required') // Обязательное поле
      .min(6, 'Min length is 6') // Минимальная длина
      .max(20, 'Max length is 20') // Максимальная длина
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*]).{6,20}$/,
        'Password must include uppercase, lowercase, number, and special character'
      ), // Сложное регулярное выражение для пароля

    userName: z
      .string()
      .nonempty('Username is required') // Обязательное поле
      .min(6, 'Min length is 6') // Минимальная длина
      .max(30, 'Max length is 30') // Максимальная длина
      .regex(/^[\w_-]{6,30}$/, 'Invalid username (use letters, numbers, _, -)'), // Регулярное выражение для имени пользователя
  })
  .refine(
    data => data.confirmPassword === data.password, // Сравнение confirmPassword и password
    {
      message: 'Passwords do not match', // Сообщение об ошибке
      path: ['confirmPassword'], // Указываем путь, чтобы ошибка выводилась для поля confirmPassword
    }
  )
