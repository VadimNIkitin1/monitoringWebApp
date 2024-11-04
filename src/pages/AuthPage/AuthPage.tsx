import { useForm, SubmitHandler, FieldError } from 'react-hook-form';

import { Input } from '@/components';

import { IRequestData } from './types';

import style from './AuthPage.module.scss';
import { useAppNavigate } from '@/hooks';

export const AuthPage = () => {
  const { goToStartPage } = useAppNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRequestData>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IRequestData> = (data: IRequestData) => {
    console.log('Submitted data:', data);
    goToStartPage(1);
  };

  return (
    <div className={style.page}>
      <h1 className={style.header}>MonitoRing</h1>
      <div className={style.container}>
        <p style={{ fontSize: '20px' }}>Авторизация</p>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.inputField}>
            <Input
              type="login"
              placeholder="Логин"
              {...register('login', { required: 'Поле логина обязательно' })}
            />
            {errors.login && <p className={style.error}>{errors.login.message}</p>}
          </div>
          <div className={style.inputField}>
            <Input
              type="pass"
              placeholder="Пароль"
              {...register('password', {
                required: 'Поле пароля обязательно',
                pattern: {
                  value: /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?()]).*/,
                  message:
                    'Пароль должен содержать минимум одну заглавную букву, одну цифру, один специальный символ и быть не короче 8 символов',
                },
              })}
              onInput={(e) => ((e.target as HTMLInputElement).style.direction = 'ltr')}
            />
            {errors.password && (
              <p className={style.error}>{(errors.password as FieldError).message}</p>
            )}
          </div>
          <button type="submit" className={style.submitButton} disabled={!isValid}>
            Войти
          </button>
        </form>
      </div>
      <div className={style.copyright}>© BigDigital</div>
    </div>
  );
};
