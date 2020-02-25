import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Select } from './components/shared/select'
import profile from '../src/asserts/Ellipse 4.png'

console.info(`⚛️ ${React.version}`)

// const selector1items = [{ label: 'My evaluations' }, { label: 'My steps' }]

const selector2items = [
  { label: 'Ross Rich', smallLabel: 'Manager', image: profile },
  { label: 'Harry', smallLabel: 'Associate', image: profile },
  { label: 'Suzy Andersan', smallLabel: 'Associate', image: profile },
  { label: 'Suzy Andersan', smallLabel: 'Associate', image: profile }
]

const App = () => (
  <>
    <GlobalStyle />
    <Select
      items={selector2items}
      filter={true}
      defualtLabel={'Select'}
      onChange={(e) => console.log(e)}
    />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
