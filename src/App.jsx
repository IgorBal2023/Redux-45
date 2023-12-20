import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Settings } from './store/settings'

function App() {

  return (
    <>
    <Provider store={store}>
<Settings/>
    </Provider>
    </>
  )
}

export default App
          