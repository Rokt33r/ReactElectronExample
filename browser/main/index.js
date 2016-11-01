import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import store from './store'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

document.addEventListener('drop', function (e) {
  e.preventDefault()
  e.stopPropagation()
})
document.addEventListener('dragover', function (e) {
  e.preventDefault()
  e.stopPropagation()
})

const history = syncHistoryWithStore(hashHistory, store)

let el = document.getElementById('content')

ReactDOM.render((
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>
), el, function () {

})

// 강제적으로 App을 다시 불러와서 새롭게 렌더링합니다.
// 고로 App을 바깥으로 빼둘 필요가 있습니다.
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    // 앱에 스토어와 히스토리를 직접 로드할 경우 다시한번 스토어와 히스토리 인스턴스를 새로 작성 할 것입니다.
    // 고로 인덱스에서 생성해두어서 프롭으로 넘겨주어 다시 모듈을 불러도 이미 생성한  스토어와 히스토리를 넘겨줍니다.
    ReactDOM.render((
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>
    ), el)
  })
}
