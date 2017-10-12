module.exports = {
  init: () => Object({issues: null, status: 'NOT_LOADED'}),
  fetchIssues: (state, _, actions) => {
    fetch(`http://104.131.15.41/issues`)
      .then(data => data.json())
      .then((data) => {
        actions.setIssues(data)
      })
    return Object.assign({}, state, {status: 'LOADING'})
  },
  setIssues: (state, data) => Object.assign({}, state, {issues: data, status: 'LOADED'})
}
