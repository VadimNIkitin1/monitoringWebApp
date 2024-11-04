import { useEffect } from 'react';
import { useAppNavigate, useTelegram } from '@/hooks';

export const AuthRedirect = () => {
  const { id } = useTelegram();
  const { goToStartPage, goToAuthPage } = useAppNavigate();

  useEffect(() => {
    console.log('USE EFEEct', id);
    if (id === '1132630506' || id === '280676256') {
      goToStartPage(1);
    } else {
      goToAuthPage();
    }
  }, [id, goToStartPage, goToAuthPage]);

  return <div>Redirecting...</div>;
};
