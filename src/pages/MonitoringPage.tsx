// import { useState } from 'react';
// import { getPrometheusData } from '../api/api';
import { useAppNavigate } from '../hooks/useAppNavigate';
import { Button } from '@/components/ui/button';

export const MonitoringPage = () => {
  const { goToCharts } = useAppNavigate();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getPrometheusData();
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);
  return (
    <>
      <h1>Monitoring Service</h1>
      <p>CPU:</p>
      <p>RAM:</p>
      <p>Memory:</p>
      <Button onClick={() => goToCharts()}>Мониторинг</Button>
    </>
  );
};
