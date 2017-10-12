const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header'),
  issue: require('../elements/issue')
})

const getOrFetchIssues = (store, actions) => {
  switch (store.issuesStore.status) {
    case 'NOT_LOADED':
      actions.fetchIssues()
      return 'fetching...'
    case 'LOADING':
      return 'loading...'
    case 'LOADED':
      issuesDOM = store.issuesStore.issues
        .map(issue => html`<issue
          title=${issue.title} url=${issue.url}
          difficulty=${issue.difficulty}>
          </issue>`
        )
      return issuesDOM
    default:
      return 'Error...'
  }
}

const issueGridStyle = `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-gap: 1em;
  justify-items: center;
  padding: 1em;
`

module.exports = (store, actions) => {
  return html`
    <div>
      <header></header>
      <div style=${issueGridStyle}>
        ${getOrFetchIssues(store, actions)}
      </div>
    </div>
  `
}
