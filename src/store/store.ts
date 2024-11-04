import { getServerList, getServerMetrics, getServerOneMetric } from '@/api';

import { create } from 'zustand';
import { MonitoringPageState, DoughnutPageState, LinePageState } from './types';

export const useMonitoringStore = create<MonitoringPageState>((set) => ({
  responce: null,
  loading: false,
  error: null,
  getServerList: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getServerList();
      set({ responce: res, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

export const useDoughnutPageStore = create<DoughnutPageState>((set) => ({
  responce: null,
  loading: false,
  error: null,
  getServerMetrics: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await getServerMetrics(id);
      set({ responce: res, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

export const useLinePageStore = create<LinePageState>((set) => ({
  responce: null,
  loading: false,
  error: null,
  getServerOneMetric: async (id, type, interval) => {
    set({ loading: true, error: null });
    try {
      const res = await getServerOneMetric(id, type, interval);
      set({ responce: res, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
