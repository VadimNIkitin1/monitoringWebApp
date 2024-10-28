interface IWindow extends Window {
  Telegram?: any;
}
const tg = (window as IWindow).Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  return {
    onClose,
    tg,
    id: tg.initDataUnsafe?.user?.id,
    queryId: tg.initDataUnsafe?.query_id,
    username: tg.initDataUnsafe?.user?.username,
    first_name: tg.initDataUnsafe?.user?.first_name,
    last_name: tg.initDataUnsafe?.user?.last_name,
    is_premium: tg.initDataUnsafe?.user?.is_premium,
  };
};
