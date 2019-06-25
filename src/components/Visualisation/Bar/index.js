import React from 'react';

export default function Bar ({data, ...props}) {
  console.log('data', data);

  return (
    <div>
      Bar
      <div>
        {data && data.data.data.map(datum => <span key={datum}> {datum} </span>)}
      </div>
    </div>
  );
}
