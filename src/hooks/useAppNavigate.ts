import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToDoughnutCharts = () => {
    navigate('/doughnutcharts');
  };

  const goToLineChart = (type: string) => {
    navigate(`${type}/linecharts/`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    goToDoughnutCharts,
    goToLineChart,
    goBack,
  };
};
