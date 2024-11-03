export interface IResponceForMonitoringPage {
  result: IServer[];
  timestamp: number;
}

export interface IServer {
  id: number;
  name: string;
  status: string;
  status_description?: string;
}
