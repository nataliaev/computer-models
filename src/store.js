import { createStore } from 'redux'
import reducer from './reducer'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

store.subscribe(() => console.log('Next state:', store.getState()))

export default store