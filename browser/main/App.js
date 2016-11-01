import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'
import Main from './Main'

/*
  임시적인 핵입니다.
  https://github.com/gaearon/react-hot-boilerplate/pull/61#issuecomment-211504531
  이게 없을 경우 리로드마다 경고를 뱉을것입니다.
 */
Router.prototype.componentWillReceiveProps = function (nextProps) {
  let components = []
  function grabComponents (element) {
    if (element.props && element.props.component) {
      components.push(element.props.component)
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents)
    }
  }
  grabComponents(nextProps.routes || nextProps.children)
  components.forEach(React.createElement)
}

class App extends React.Component {
  render () {
    let { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Main}>
            <IndexRedirect to='/home' />
            <Route path='home' />
            <Route path='another' />
          </Route>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
}

export default App
