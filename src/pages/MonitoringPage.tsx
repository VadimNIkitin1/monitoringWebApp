import { useState } from 'react';
import { getPrometheusData } from '../api/api';

export const MonitoringPage = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getPrometheusData();
  //   };
  //   fetchData();
  // }, []);

  console.log(data);
  return (
    <>
      <h1>Monitoring Service</h1>
      <p>CPU:</p>
      <p>RAM:</p>
      <p>Memory:</p>
    </>
  );
};
