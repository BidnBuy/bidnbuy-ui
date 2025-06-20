import { axiosInstance } from '@/lib/axios';
import type { LoginFormValues, SignupFormValues } from '@/lib/validations/auth';

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: 'customer' | 'vendor';
  };
}

export const authService = {
  login: async (data: LoginFormValues): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>('/api/v1/auth/login', data);
    console.log('Login response:', response.data);
    return response.data;
  },

  signup: async (data: SignupFormValues): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>('/api/v1/auth/signup', data);
    console.log('Signup response:', response.data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    const response = await axiosInstance.post('/api/v1/auth/logout');
    console.log("Logout response:", response.data)
  },
}; 