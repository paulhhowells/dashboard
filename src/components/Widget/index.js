import React from 'react';
import { WIDGET_TYPES } from '../../constants';
import UiWidget from './UiWidget/';
import VisualisationWidget from './VisualisationWidget/';
import './widget.css';

const typeComponents = {
	UI: UiWidget,
	VISUALISATION: VisualisationWidget,
};

export function Widgets (props) {
	return <div className="widgets">{props.children}</div>
}

export default function Widget (widget) {
	if (!(widget.type && WIDGET_TYPES[widget.type] && typeComponents[widget.type])) {
		throw new Error('Widget type not found: ' + widget.type);
	}

	const Component = typeComponents[widget.type];

	let className = 'widget';
	if (widget.type) {
		className += ' widget__' + widget.type.toLowerCase();
	}

	return <Component className={className} {...widget} />;
}
