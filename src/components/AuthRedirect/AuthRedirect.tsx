import { useAppNavigate, useTelegram } from '@/hooks';

export const AuthRedirect = () => {
  const { id } = useTelegram();
  const { goToStartPage, goToAuthPage } = useAppNavigate();

  const checkAuth = async (id: any) => {
    console.log('id:', id);
    if ((await id) && id == '280676256') {
      goToStartPage();
    }
    if (id != '280676256') {
      goToAuthPage();
    }
  };
  checkAuth(id);

  return null;
};
//1132630506
