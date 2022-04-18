import React from 'react';
import {Sections} from './styles';
export const Icon: React.FC<any> = ({name, color, size}) => {
  return (
    <Sections>
      <Icon name={name} color={color || '#666'} size={size || 40} />
    </Sections>
  );
};
