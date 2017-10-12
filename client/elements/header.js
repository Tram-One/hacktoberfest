const Tram = require('tram-one')
const html = Tram.html()

const nowrap = 'white-space: nowrap;'
const headerStyle = `
  text-align: center;
  font-size: 1.5em;
  background: radial-gradient(circle, #a63232 0, #6b2020 120%);
  color: white;
  padding: 4vh 0 10vh 0;
`

module.exports = () => {
  return html`
    <div style=${headerStyle}>
      <h1>
        Hacktoberfest & <span style=${nowrap}>Tram-One</span>
      </h1>
      <div>
        Below you'll find all the git issues that are great<br>
        for getting involved in the Tram-One Project!
        <br><br>
        Click on any of the links below to navigate to the issue
        with more details!
      </div>
    </div>
  `
}
