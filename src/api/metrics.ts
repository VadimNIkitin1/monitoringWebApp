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
