const fetch = require('node-fetch')
const blob = {"query":"{ organization(login:\"Tram-One\") { name repositories(first:10) { nodes { name issues(states:[OPEN], first:20) { nodes { title url labels(first:5) { nodes { name } } } } } } }}","variables":null,"operationName":null}
const url = 'https://api.github.com/graphql'
const token = 'Bearer <TOKEN-HERE>'
foo = fetch(url, {
  method: 'POST',
  headers: {'Authorization': token},
  body: JSON.stringify(blob),
}).then(response => response.json())
  .then(res => JSON.stringify(res))

foo
