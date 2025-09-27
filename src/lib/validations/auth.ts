import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signupSchema = z.object({
  firstName: z.string().min(2, 'First Name must be at least 5 characters'),
  middleName: z.string().min(2, 'Middle Name must be at least 5 characters'),
  lastName: z.string().min(2, 'Last Name must be at least 5 characters'),
  email: z.string().email('Invalid email address'),
  referralCode: z.string().optional(),
  storeName: z.string().optional(),
  phoneNumber: z.string().min(11, 'Phone number must be at least 11 characters'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: z.string(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the Terms and Conditions' }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
  
});


export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>; 