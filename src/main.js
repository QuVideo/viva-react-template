import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'antd'

import app from './app.less'
import title from './title.less'
import antShowcase from './ant-showcase.less'

const Title = ({ content }) => {
  return <h1 className={ title.normal }>{ content }</h1>
}

const AntShowcase = () => {
  return (
    <div className={ antShowcase.normal }>
      <Button type="primary">Primary</Button>
    </div>
  )
}

const App = () => {
  return (
    <div className={ app.normal }>
      <Title content="Welcome to React world." />
      <AntShowcase />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
