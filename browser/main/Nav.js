import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  height: 60px;
  left: 0;
  right: 0;
  border-bottom: 1px solid #DDD;
  display: flex;
`
const Title = styled.h1`
  height: 60px;
  line-height: 60px;
  margin: 0 15px;
`
const LinkLabel = styled.span`
  display: block;
  padding: 0 15px;
  height: 60px;
  line-height: 60px;
`

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    return (
      <Wrap>
        <Title>Bleeding-edge</Title>
        <Link to='/home'><LinkLabel>Home</LinkLabel></Link>
        <Link to='/another'><LinkLabel>Another Page</LinkLabel></Link>
      </Wrap>
    )
  }
}

Nav.propTypes = {

}

export default Nav
