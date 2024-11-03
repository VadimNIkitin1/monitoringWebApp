import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToDoughnutCharts = (id: number) => {
    navigate(`${id}/doughnutcharts`);
  };

  const goToLineChart = (type: string | undefined) => {
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
