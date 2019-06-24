// TODO: move type constants above containers for shared use,
// and import here.
const WIDGET_TYPES = {
  UI,
  VISUALISATION,
};

const VISUALISATION_TYPES = {
  BAR,
  PIE,
  PULSAR,
}

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
