import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});

export const registerSchema = z.object({
  name: z
    .string({
      required_error: 'Full name is required',
    })
    .min(3, {
      message: 'Full name must be at least 3 characters',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});
