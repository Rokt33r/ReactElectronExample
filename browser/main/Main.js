import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Nav from './Nav'

// Styled components의 서식입니다.
// ES 6 부터 템플레이트 스트링을 다음처럼 이용 할 수 있습니다.
const Wrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: sans-serif;
`
const Canvas = styled.div`
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
`
const Iframe = styled.iframe`
  height: 100%;
`

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    return (
      <Wrap>
        <Nav />
        <Canvas>
          {this.props.location.pathname === '/home'
            ? <Iframe width='800' height='450' src='http://cache.vevo.com/assets/html/embed.html?video=USUMV1600432' frameborder='0' allowfullscreen />
            : <Iframe width='800' height='450' src='http://cache.vevo.com/assets/html/embed.html?video=USUMV1600433' frameborder='0' allowfullscreen />
        }
        </Canvas>
      </Wrap>
    )
  }
}

Main.propTypes = {

}

export default Main
