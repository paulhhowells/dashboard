import React, { useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';
import SVG from '../../SVG';

export default function Pie ({result, ...props}) {
	const { dataset } = result;
	const nodeRef = useRef(null);

  useLayoutEffect(() => {
    d3.select(nodeRef.current)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect");
  }, [data]);

  return (
    <SVG
      ref={nodeRef}
      width="100"
      height="100"
      viewBox="0 0 100 100">
      <rect fill="#ec0" width="100" height="100" />
    </SVG>
  )
}
