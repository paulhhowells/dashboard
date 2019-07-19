import React from 'react';

/**
 * Don’t forget that SVG attributes need to be camelCased in React.
 * e.g. viewbox => viewBox
 * (Which would be unnecessary in pure SVG).
 */
export default React.forwardRef((props, ref) => (<svg
		ref={ref}
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		{...props}
	/>
));
