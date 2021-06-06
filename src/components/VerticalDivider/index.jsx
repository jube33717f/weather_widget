/**
 * file: Divider line (STYLE)
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
import React from 'react';

const VerticalDivider = ({
  color,
  width,
  className,
}) => (
  <div 
    className={className}
    style={{
      width,
      backgroundColor: color,
    }} 
  />
);

export default VerticalDivider;