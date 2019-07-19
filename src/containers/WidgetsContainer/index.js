import React from 'react';
import widgetList from './widgetList';
import Widget, { Widgets } from '../../components/Widget';

export default function WidgetsContainer () {
	console.log('widgetList', widgetList);

	return (
		<Widgets>
			{widgetList.map(widgetPicker)}
		</Widgets>
	);
}

function widgetPicker (widget) {
	return <Widget key={ widget.id } {...widget} />
}
