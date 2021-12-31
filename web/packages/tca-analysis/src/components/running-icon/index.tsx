import React from 'react';
import cn from 'classnames';
import Runing from 'coding-oa-uikit/lib/icon/Runing';

import style from './style.scss';

interface RuningIconProps {
  className?: any
}

const RuningIcon = (props: RuningIconProps) => {
  const { className } = props;
  return (
        <Runing className={cn(style.running, className)}/>
  );
};

export default RuningIcon;

