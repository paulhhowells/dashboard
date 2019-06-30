import React from 'react';
import PropTypes from 'prop-types';
import { useFetchJson } from '../../hooks';
import Bar from './Bar/';
import Pie from './Pie/';
import Pulsar from './Pulsar/';

const visualisationComponents = {
  BAR: Bar,
  PIE: Pie,
  PULSAR: Pulsar,
}

const Visualisation = ({visualisation, dataConfig, ...props}) => {
  if (!(visualisation.type && visualisationComponents[visualisation.type])) {
    throw new Error('Visualisation type not found: ' + visualisation.type);
  }

  const { json, loading } = useFetchJson(dataConfig.url);

  const VisualisationComponent = visualisationComponents[visualisation.type];

  if (loading) {
    return <div>Loading, have a cup of tea!</div>
  } else if (json) {
    return <VisualisationComponent
      result={json}
      visualisation={visualisation}
      {...props}
    />;
  } else {
    // TODO: test & handle errors
    return <div>Error!</div>
  }
};

Visualisation.propTypes = {
  visualisation: PropTypes.object.isRequired
};

export default Visualisation;
