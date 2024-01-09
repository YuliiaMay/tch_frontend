import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
    fetchLogin,
    fetchRegister,
    fetchRefresh,
    fetchUpdateUserData,
    fetchResetPassword,
} from '../services';


const userState = {
    id: '',
    name: '',
    email: '',
    photo: '',
    verified: false,
    password: '',
    role: 'user'
};


export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            user: userState,
            loading: false,
            isAuth: false,
            errors: null,
            setToken: (token) =>
                set(() => ({
                    token,
                    isAuth: !!token,
                })),
            register: async (values) => {
                set(() => ({ loading: true }));

                try {
                    await fetchRegister(values);
                    set(() => ({
                        loading: false
                    }));
                } catch (error) {
                    set(() => ({
                        errors: error.response.data.status,
                        loading: false
                    }));
                    throw error;
                }
            },
            login: async (values) => {
                set(() => ({ loading: true }));

                try {
                    const response = await fetchLogin(values);
                    set(() => ({
                        token: response.token,
                        isAuth: true,
                        loading: false
                    }));
                } catch (error) {
                    set(() => ({
                        errors: error.response.data.status,
                        loading: false
                    }))
                    throw error;
                }
            },
            setProfile: async () => {
                try {
                    const response = await fetchRefresh();
                    
                    if (response === 'failed') {
                        set(() => ({
                            token: null,
                            isAuth: false
                        }));
                    } else {
                        set(() => ({
                            user: {...response.data.data},
                        }));
                    }
                } catch (error) {
                    if (error.response) {
                        set(() => ({
                            errors: error.response.data.status,
                        }));
                    }
                }
            },
            updateUserData: async (updateData) => {
                set(() => ({ loading: true }));

                try {
                    const response = await fetchUpdateUserData(updateData);
                    set(() => ({
                        user: response,
                        loading: false,
                    }));
                } catch (error) {
                    set(() => ({
                        errors: error,
                        loading: false
                    }))
                }
            },
            resetPassword: async (values) => {
                set(() => ({ loading: true }));

                try {
                    await fetchResetPassword(values);

                    set(() => ({
                        loading: false,
                    }))
                } catch (error) {
                    set(() => ({
                        errors: error.response.data.status,
                        loading: false
                    }));
                    throw error;
                }
            },
            logout: () => set(() => ({
                token: null,
                user: userState,
                isAuth: false
            })),
            cleanErrors: () => set(() => ({ errors: null })),
        }),

        {name: 'auth',}
    )
);