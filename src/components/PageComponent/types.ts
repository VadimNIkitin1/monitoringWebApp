import { ReactNode } from 'react';

export interface IPageProps {
  loading: boolean;
  username: string;
  children: ReactNode;
  time: number | undefined;
}
