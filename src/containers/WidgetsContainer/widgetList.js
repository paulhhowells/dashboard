import { WIDGET_TYPES, VISUALISATION_TYPES } from '../../components/Widget/constants';


// TODO:
// for multiple VISUALISATION_TYPES, UI_TYPES, etc. a reference to ID / KEY and config?
// or store config in object?  create New objects - create definitions?
// compile this from an object and array of IDs?

export default [
  {
    type: WIDGET_TYPES.UI
  },
  {
    type: WIDGET_TYPES.VISUALISATION,
    data: {
      url: ''
    },
    visualisation: {
      type: VISUALISATION_TYPES.PIE
    },
  },
  {
    type: WIDGET_TYPES.VISUALISATION,
    data: {
      url: ''
    },
    visualisation: {
      type: VISUALISATION_TYPES.BAR
    },
  },
  {
    type: WIDGET_TYPES.VISUALISATION,
    data: {
      url: ''
    },
    visualisation: {
      type: VISUALISATION_TYPES.PULSAR
    },
  },
];
