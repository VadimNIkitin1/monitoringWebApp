import style from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <div className={`${style.skeleton} ${className}`}></div>;
};
