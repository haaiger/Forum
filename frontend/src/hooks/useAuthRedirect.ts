import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../types/types';

export const useAuthRedirect = () => {
    const isAuthUser = useSelector((state: RootState) => state.user.isAuthUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthUser) {
            navigate('/login');
        }
    }, [isAuthUser, navigate]);
};
