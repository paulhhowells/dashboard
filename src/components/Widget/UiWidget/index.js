import React from 'react';

const UiWidget = ({className, ...props}) => {
  className += (props.className) ? ' ' + props.className : '';

  return (
    <div className={className}>UI: {props.type}</div>
  );
};

export default UiWidget;
