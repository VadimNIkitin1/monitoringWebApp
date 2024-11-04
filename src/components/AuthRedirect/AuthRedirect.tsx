import { useEffect } from 'react';
import { useAppNavigate, useTelegram } from '@/hooks';

export const AuthRedirect = () => {
  const { id } = useTelegram();
  console.log('id:', id);
  const { goToStartPage, goToAuthPage } = useAppNavigate();

  useEffect(() => {
    if (id) {
      if (id === '1132630506' || id === '280676256') {
        goToStartPage(1);
        return;
      } else {
        goToAuthPage();
      }
    }
  }, [id]);

  return null;
};
