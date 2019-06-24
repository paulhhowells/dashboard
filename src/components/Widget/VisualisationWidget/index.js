import React from 'react';
import Visualisation from '../../Visualisation';

const VisualisationWidget = ({className, ...props}) => {
  className += (props.className) ? ' ' + props.className : '';

  return (
    <div className={className}>
      <Visualisation {...props} />
    </div>
  );
};

export default VisualisationWidget;
