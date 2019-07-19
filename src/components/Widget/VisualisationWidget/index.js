import React from 'react';
import Visualisation from '../../Visualisation';

const VisualisationWidget = ({className, ...props}) => {
  className += (props.className) ? ' ' + props.className : '';

  if (props.visualisation) {
    className += ' widget__' + props.visualisation.type.toLowerCase();
  }

  return (
    <div className={className}>
      <Visualisation {...props} />
    </div>
  );
};

export default VisualisationWidget;
