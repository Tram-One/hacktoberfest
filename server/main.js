const express = require('express')
const fetch = require('node-fetch')
const app = express()
const blob = {"query":"{ organization(login:\"Tram-One\") { name repositories(first:10) { nodes { name issues(states:[OPEN], first:20) { nodes { title url labels(first:5) { nodes { name } } } } } } }}","variables":null,"operationName":null}
const url = 'https://api.github.com/graphql'
const token = ''


app.get('/issues', (req, res) => {
  fetch(url, {
    method: 'POST',
    headers: {'Authorization': token},
    body: JSON.stringify(blob),
  }).then(response => response.json())
    .then(response => {
      const repos = response.data.organization.repositories.nodes
      const hacktoberfestIssues = repos.map(repo => repo.issues.nodes)
        .reduce((issues,repoIssues) => issues.concat(repoIssues),[])
        .filter((issue) => issue.labels.nodes.some(label => label.name === 'hacktoberfest'))
        .map(issue => {
          const difficulty = issue.labels.nodes.filter(label => {
            return label.name === 'easy' || label.name === 'medium' || label.name === 'difficult'
          })[0].name
          return {
            title: issue.title,
            url: issue.url,
            difficulty: difficulty
          }
        })
      res.send(hacktoberfestIssues)
    })
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})
