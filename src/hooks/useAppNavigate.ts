import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToAuthPage = () => {
    navigate('/auth');
  };

  const goToStartPage = (id: string | number) => {
    navigate(`/${id}`);
  };

  const goToDoughnutCharts = () => {
    navigate(`doughnutcharts`);
  };

  const goToLineChart = (type: string | undefined) => {
    navigate(`${type}/linecharts/`);
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
