/**
 * file: Temperature File  (show temperature with signal)
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
import React from 'react';

const Temperature = ({
  children,
  className,
}) => (
  <span className={className}>
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </span>
);

export default Temperature