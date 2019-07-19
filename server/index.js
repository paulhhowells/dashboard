const express = require('express');
const app = express();
const port = 3033;

app.get('/', (req, res) => res.send('Server running!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/array', (req, res) => res.json(arrayPicker()));

app.get('/gauge', (req, res) => res.json({ value: 9, min: 0, max: 10 }));

app.get(
	'/numerals',
	(req, res) => res.json({
		// TODO: add something about number of digits or decimal places?
		dataset: [
			{
				name: 'Ratio',
				value: 999,
			},
			{
				name: 'Threshold',
				value: 64,
			},
		]
	})
);


let arrayChoiceIndex = 0;
const arrayChoices = [
	{
		"name": "Array",
		"dataset": [
			{ "label": "A", "value": 1},
			{ "label": "B", "value": 2},
			{ "label": "C", "value": 3},
			{ "label": "D", "value": 5},
			{ "label": "E", "value": 8},
			{ "label": "F", "value": 13},
			{ "label": "G", "value": 21},
		]
	},
	{
		"name": "Array",
		"dataset": [
			{ "label": "A", "value": 3},
			{ "label": "B", "value": 3},
			{ "label": "C", "value": 4},
			{ "label": "D", "value": 5},
			{ "label": "E", "value": 6},
		]
	},
	{
		"name": "Array",
		"dataset": [
			{ "label": "B", "value": 4},
			{ "label": "C", "value": 3},
			{ "label": "D", "value": 7},
			{ "label": "E", "value": 8},
			{ "label": "F", "value": 9},
			{ "label": "G", "value": 17},
		]
	},
];

function arrayPicker () {
	arrayChoiceIndex++;

	if (arrayChoiceIndex >= arrayChoices.length) {
		arrayChoiceIndex = 0;
	}

	return arrayChoices[arrayChoiceIndex];
}
