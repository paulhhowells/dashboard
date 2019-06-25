import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

  const [ response, setResponse ] = useState(false); // state

  // TODO: in the future use Suspense once it supports data fetching.
  useEffect(
    () => {
      console.log('dataConfig', dataConfig);

      fetch(dataConfig.url)
        .then(res => res.json()) // TODO: maybe check and throw an error here?
        .then(
          (result) => {
            setResponse({
              isLoaded: true,
              result: result
            });

            console.log('result', result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setResponse({
              isLoaded: true,
              error
            });
          }
        );
      },
      [dataConfig]
    );

  const VisualisationComponent = visualisationComponents[visualisation.type];

  return <VisualisationComponent
    response={response}
    visualisation={visualisation}
    {...props}
  />;
};

Visualisation.propTypes = {
  visualisation: PropTypes.object.isRequired
};

export default Visualisation;
