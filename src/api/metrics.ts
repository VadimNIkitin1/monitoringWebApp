import axios from 'axios';

axios.defaults.baseURL = 'https://web-app-monitoring.bigdigital.pro/api/v1/metrics';
// axios.defaults.baseURL = 'http://localhost:8080';

export async function getServerList() {
  try {
    const res = await axios.get('/servers_list');
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error('Запрашиваемый ресурс не найден: 404');
    } else if (error.request) {
      throw new Error('Не удалось получить ответ от сервера!');
    } else {
      throw new Error('Произошла неизвестная ошибка !');
    }
  }
}

export async function getServerMetrics(id: string | undefined) {
  try {
    const res = await axios.get(`/server_metrics/${id}`);
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error('Запрашиваемый ресурс не найден: 404');
    } else if (error.request) {
      throw new Error('Не удалось получить ответ от сервера!');
    } else {
      throw new Error('Произошла неизвестная ошибка !');
    }
  }
}

export async function getServerOneMetric(
  id: string | undefined,
  type: string | undefined,
  interval: string | undefined
) {
  try {
    const res = await axios.get(`/server_metrics/${id}/${type}/${interval}`);
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error('Запрашиваемый ресурс не найден: 404');
    } else if (error.request) {
      throw new Error('Не удалось получить ответ от сервера!');
    } else {
      throw new Error('Произошла неизвестная ошибка !');
    }
  }
}
