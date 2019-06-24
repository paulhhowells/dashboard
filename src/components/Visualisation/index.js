import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar/';
import Pie from './Pie/';
import Pulsar from './Pulsar/';

const visualisationComponents = {
  BAR: Bar,
  PIE: Pie,
  PULSAR: Pulsar,
}

const Visualisation = ({visualisation, ...props}) => {
  if (!(visualisation.type && visualisationComponents[visualisation.type])) {
    throw new Error('Visualisation type not found: ' + visualisation.type);
  }

  const {data, setData} = useState(null);
  // useEffect

  const VisualisationComponent = visualisationComponents[visualisation.type];

  console.log(props);

  return <VisualisationComponent
    data={data}
    visualisation={visualisation}
    {...props}
  />;
};

Visualisation.propTypes = {
  visualisation: PropTypes.object.isRequired
};

export default Visualisation;
