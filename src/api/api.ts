import axios from 'axios';

axios.defaults.baseURL = 'https://prometheus.bigdigital.pro';
axios.defaults.withCredentials = true;

export async function getPrometheusData() {
  try {
    const res = await axios.get('/graph', {
      params: {
        'g0.expr': 'node_boot_time_seconds',
        'g0.tab': 1,
        'g0.display_mode': 'lines',
        'g0.show_exemplars': 0,
        'g0.range_input': '1h',
      },
    });

    return res;
  } catch (error) {
    console.error('Error fetching data from Prometheus:', error);
  }
}
