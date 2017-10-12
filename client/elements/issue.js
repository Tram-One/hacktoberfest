const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {

  const color = (() => {
    switch(attrs.difficulty) {
      case 'easy':
        return '#FFB700'
      case 'medium':
        return '#FF8C00'
      case 'difficult':
        return '#FF2D00'
      default:
        return 'black'
    }
  })()

  const issueStyle = `
    text-align: center;
    border: solid 3px ${color};
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 15em 5em;
    grid-template-rows: auto;
    height: 3em;
    cursor: pointer;
    width: 20em;
    background: white;
    text-decoration: none;
    color: inherit;
  `

  const titleStyle = `
    font-size: 1.2em;
    align-self: center;
  `

  const difficultyStyle = `
    color: white;
    background: ${color};
    font-weight: bold;
  `

  const rotateStyle = `
    transform: rotate(-45deg);
    margin-top: 0.65em;
  `

  return html`
    <a style=${issueStyle} href=${attrs.url}>
      <div style=${titleStyle}>${attrs.title}</div>
      <div style=${difficultyStyle}>
        <div style=${rotateStyle}>${attrs.difficulty}</div>
      </div>
    </a>
  `
}
