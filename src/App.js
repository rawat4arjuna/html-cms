import './App.css';
import { Provider } from 'react-redux'
import configureStore from './store';
import Home from './Page/home'
function App() {
  return (
   <Provider store={configureStore()}>
     <Home/>
   </Provider>
  );
}

export default App;
