import getService from "../../services";

export function loadMatches() {
  debugger;
  return dispatch => {
    return getService(`http://localhost:5000/api/matches/0`, "GET")
      .then(response => {
        dispatch({ type: "LOAD_MATCHES", data: response.data, overview: true });
      })
      .catch(e => console.log(e));
  };
}
export function incMatches(page) {
  debugger;
  return dispatch => {
    return getService(`http://localhost:5000/api/matches/${page}`, "GET")
      .then(response => {
        dispatch({ type: "INC_MATCHES", data: response.data, overview: true });
      })
      .catch(e => console.log(e));
  };
}

export function decMatches(page) {
  debugger;
  return dispatch => {
    return getService(`http://localhost:5000/api/matches/${page}`, "GET")
      .then(response => {
        dispatch({ type: "DEC_MATCHES", data: response.data, overview: true });
      })
      .catch(e => console.log(e));
  };
}

export function searchMatches(value) {
  debugger;
  return dispatch => {
    return getService(`http://localhost:5000/api/matches/find/${value}`, "GET")
      .then(response => {
        dispatch({
          type: "LOAD_MATCHES",
          data: response.data,
          overview: false
        });
      })
      .catch(e => console.log(e));
  };
}
export function updateMatchDetails(id) {
  debugger;
  return dispatch => {
    return getService(`http://localhost:5000/api/deliveries/${id}`, "GET")
      .then(response => {
        dispatch({
          type: "MATCHE_DETAILS",
          data: response.data
        });
      })
      .catch(e => console.log(e));
  };
}

export function pageDec() {
  return dispatch => {
    return dispatch({ type: "PAGE_DEC" });
  };
}
