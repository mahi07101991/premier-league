let defaultState = {
  matches: [],
  deliveries: [],
  page: 0 + 1,
  overview: true
};

function action(state = defaultState, action) {
  debugger;
  switch (action.type) {
    case "LOAD_MATCHES":
      return {
        ...state,
        page: 1,
        matches: action.data.matches,
        totalMatches: action.data.totalMatches,
        pageNumber: 1,
        overview: action.overview
      };
    case "LOAD_DELIVERIES":
      return { ...state, deliveries: action.deliveries };
    case "INC_MATCHES":
      debugger;
      return {
        ...state,
        page: state.page + 1,
        matches: action.data.matches,
        totalMatches: action.data.totalMatches,
        pageNumber: action.data.page,
        overview: action.overview
      };
    case "DEC_MATCHES":
      debugger;
      return {
        ...state,
        page: state.page - 1,
        matches: action.data.matches,
        totalMatches: action.data.totalMatches,
        pageNumber: action.data.page,
        overview: action.overview
      };
    case "MATCHE_DETAILS":
      debugger;
      return {
        ...state,
        matchDetails: action.data.match
      };
    default:
      return state;
  }
}

export default action;
