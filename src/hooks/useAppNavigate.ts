import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToDoughnutCharts = () => {
    navigate('/doughnutcharts');
  };

  const goToLineChart = () => {
    navigate('/linecharts');
  };

  const goBack = () => {
    navigate('/');
  };

  return {
    goToDoughnutCharts,
    goToLineChart,
    goBack,
  };
};
