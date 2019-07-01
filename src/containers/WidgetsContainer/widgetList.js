import { WIDGET_TYPES, VISUALISATION_TYPES } from '../../constants';

// TODO:
// for multiple VISUALISATION_TYPES, UI_TYPES, etc. a reference to ID / KEY and config?
// or store config in object?  create New objects - create definitions?
// compile this from an object and array of IDs?

// TODO:
// add clock
// add calendar
// add TC 2290 digits
// add radar
// add pulsar
// add streamgraph
// add network graph

export default [
  {
    id: 'ID_0',
    type: WIDGET_TYPES.UI
  },
  {
    id: 'ID_1',
    type: WIDGET_TYPES.VISUALISATION,
    dataConfig: {
      url: '/mock/pie.json'
    },
    visualisation: {
      type: VISUALISATION_TYPES.PIE
    },
  },
  {
    id: 'ID_2',
    type: WIDGET_TYPES.VISUALISATION,
    dataConfig: {
      url: '/mock/bar.json'
    },
    visualisation: {
      type: VISUALISATION_TYPES.BAR
    },
  },
  {
    id: 'ID_3',
    type: WIDGET_TYPES.VISUALISATION,
    dataConfig: {
      url: '/mock/pulsar.json'
    },
    visualisation: {
      type: VISUALISATION_TYPES.PULSAR
    },
  },
];
