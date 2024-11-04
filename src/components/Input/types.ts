export interface IAuthProps {
  type: 'login' | 'pass';
  placeholder?: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}
