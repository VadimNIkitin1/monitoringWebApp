import { useEffect } from 'react';
import { useAppNavigate, useTelegram } from '@/hooks';

export const AuthRedirect = () => {
  const { id } = useTelegram();
  const { goToStartPage, goToAuthPage } = useAppNavigate();

  const checkAuth = async (id) => {
    if (await id) {
      goToStartPage(1);
    }
    goToAuthPage();
  };
  console.log('id:', id);
  checkAuth(id);

  return null;
};
