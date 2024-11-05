import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToAuthPage = () => {
    navigate('/auth');
  };

  const goToStartPage = () => {
    navigate(`/monitoring`);
  };

  const goToDoughnutCharts = (id: number) => {
    navigate(`${id}/doughnutcharts`);
  };

  const goToLineChart = (type: string | undefined) => {
    navigate(`${type}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    goToAuthPage,
    goToStartPage,
    goToDoughnutCharts,
    goToLineChart,
    goBack,
  };
};
