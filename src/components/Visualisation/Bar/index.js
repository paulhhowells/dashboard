import React from 'react';

export default function Bar ({result, ...props}) {

  return (
    <div>
      <div>
        {result && result.data.map(datum => <span key={datum}> {datum} </span>)}
      </div>
    </div>
  );
}
