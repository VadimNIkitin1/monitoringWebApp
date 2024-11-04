import { forwardRef } from 'react';

import { IAuthProps } from './types';

import style from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, IAuthProps>(
  ({ type, placeholder, onInput, ...rest }, ref) => {
    return (
      <div style={{ width: '100%' }}>
        <input
          {...rest}
          ref={ref}
          type={type === 'pass' ? 'password' : 'text'}
          onInput={onInput}
          placeholder={placeholder}
          className={style.input}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
