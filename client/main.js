const Tram = require('tram-one')

const app = new Tram({defaultRoute: '/'})
app.addRoute('/', require('./pages/home'))
app.addActions({issuesStore: require('./actions/issues')})
app.start('.main')
