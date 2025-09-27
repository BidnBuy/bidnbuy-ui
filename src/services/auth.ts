import { axiosInstance } from '@/lib/axios';

import type { CompleteProfileFormData } from '@/features/complete-profile/lib/complete-profile-schema';
import type { LoginFormValues, SignupFormValues } from '@/lib/validations/auth';

export type AuthResponse = {
  success: boolean;
  message: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    role: 'customer' | 'vendor';
    referralCode: string;
    storeName: string;
  };
}


export const authService = {
  login: async (data: LoginFormValues): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>('/api/v1/auth/login', data);
    console.log('Login response:', response.data);
    return response.data;
  },

  signup: async (data: SignupFormValues): Promise<AuthResponse> => {
    try {
      
      const payload = {
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber, 
        userRole: 'customer', 
        referralCode: data.referralCode,
        storeName: data.storeName
      };
      console.log("Payload for sign up", payload)
      const response = await axiosInstance.post<AuthResponse>('/api/v1/auth/signup', payload);
      console.log('Signup response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    const response = await axiosInstance.post('/api/v1/auth/logout');
    console.log("Logout response:", response.data)
  },

  verifyEmail: async (email: string, otpCode: string): Promise<void> => {
    try {
      const response = await axiosInstance.post('/api/v1/auth/verify-email', { email, otpCode });
      console.log('Email verification response:', response.data);
    } catch (error) {
      console.error('Error during email verification:', error);
      throw error;
    }
  },

  profile: async (payload: CompleteProfileFormData): Promise<AuthResponse> => {
    const response = await axiosInstance.patch("/api/v1/auth/update-profile", payload, { withCredentials: true });
    console.log('Profile response:', response.data);
    // return response.data;
    return {
      success: true,
      message: response.data.message || "Profile completed and wallet created successfully.",
      user: response.data.user,
    };
  }
};