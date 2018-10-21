import App from './containers/App'
import HeaderTest from './components/HeaderTest'
//exporting routes

export default [
  {
    ...App,
    routes:[
      {
        ...HeaderTest,
        path:'/',
        exact: true
      }
    ]
  }
]
