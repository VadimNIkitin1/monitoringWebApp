import { useAppNavigate, useTelegram } from '@/hooks';

export const AuthRedirect = () => {
  const { id } = useTelegram();
  const { goToStartPage, goToAuthPage } = useAppNavigate();

  const checkAuth = async (id: any) => {
    console.log('id:', id);
    if ((await id) && id == '1132630506') {
      goToStartPage(1);
    }
    if (!id) {
      goToAuthPage();
    }
  };
  checkAuth(id);

  return null;
};
