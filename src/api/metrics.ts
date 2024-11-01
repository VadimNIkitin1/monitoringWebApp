import axios from 'axios';

axios.defaults.baseURL = 'https://web-app-monitoring.bigdigital.pro/api/v1/metrics';

export async function getServerList() {
  try {
    const res = await axios.get('/servers_list');
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Backend:', error);
  }
}

export async function getServerMetrics(id: string | undefined) {
  try {
    const res = await axios.get(`/server_metrics/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data from Backend:', error);
  }
}
