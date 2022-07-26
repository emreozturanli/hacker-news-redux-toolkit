import Header from "./components/Header";
import Main from "./components/Main";
import {store} from './app/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  );
}

export default App;
