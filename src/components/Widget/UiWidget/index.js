import React from 'react';

const UiWidget = ({className, ...props}) => (
  <div className={className}>UI: {props.type}</div>
);

export default UiWidget;
