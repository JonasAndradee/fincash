import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from './adapters/redux'

function App () {
  const dispacth = useDispatch()
  const amount = useSelector((state: State) => state.test)
  const { testUpdate, testClear } = bindActionCreators(actionCreators, dispacth)

  return (
    <div className="App">
      {amount}
     <button onClick={() => testUpdate(10)}>+</button>
     <button onClick={() => testClear(10)} >-</button>
    </div>
  )
}

export default App
