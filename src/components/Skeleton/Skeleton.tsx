import clsx from 'clsx';

import { SkeletonProps } from './types';

import style from './Skeleton.module.scss';

export const Skeleton = ({ variant }: SkeletonProps) => {
  return <div className={clsx(style.skeleton, variant && style[variant])}></div>;
};
