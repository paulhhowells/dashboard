import React from 'react';

const VisualisationWidget = ({className, ...props}) => {
  className += (props.className) ? ' ' + props.className : '';

  return (
    <div className={className}>Visualisation: {props.type}</div>
  );
};

export default VisualisationWidget;
