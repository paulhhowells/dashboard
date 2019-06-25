import React from 'react';

export default function Bar ({response, ...props}) {

  if (response.isLoaded) {
    return (
      <div>
        Bar {response.isLoaded && 'loaded'}
        <div>
          {response && response.result.data.map(datum => <span key={datum}> {datum} </span>)}
        </div>
      </div>
    );
  }
  else {
    return <div>LOADING</div>;
  }
}
