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

  if (!response.isLoaded) {
    return <div>Loading, have a cup of tea!</div>
  } else if (response.result) {
    return <VisualisationComponent
      response={response}
      result={response.result}
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
