import { axiosInstance } from '@/lib/axios';
import type { LoginFormValues, SignupFormValues } from '@/lib/validations/auth';

interface AuthResponse {
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
    const response = await axiosInstance.post<AuthResponse>('/auth/login', data);
    return response.data;
  },

  signup: async (data: SignupFormValues): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>('/auth/signup', data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await axiosInstance.post('/auth/logout');
  },
}; 