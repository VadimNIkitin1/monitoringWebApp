import { useEffect } from 'react';
import { useAppNavigate, useTelegram } from '@/hooks';

export const AuthRedirect = ({ children }: any) => {
  const { id } = useTelegram();
  const { goToStartPage, goToAuthPage } = useAppNavigate();

  if (!id) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (id) {
      console.log('USE EFFECT', id);
      if (id === '1132630506' || id === '280676256') {
        goToStartPage(1);
        return;
      } else {
        goToAuthPage();
      }
    }
  }, [id, goToStartPage, goToAuthPage]);

  return children;
};
