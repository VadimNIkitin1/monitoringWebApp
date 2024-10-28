import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToCharts = () => {
    navigate('/charts');
  };

  const goBack = () => {
    navigate('/');
  };

  return {
    goToCharts,
    goBack,
  };
};
