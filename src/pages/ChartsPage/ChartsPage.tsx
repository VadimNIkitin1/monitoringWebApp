import { MemoryUsageChart } from '../../components/Charts/Charts';
import style from './ChartsPage.module.scss';

export const ChartsPage = () => {
  return (
    <div className={style.page}>
      <MemoryUsageChart />
    </div>
  );
};
