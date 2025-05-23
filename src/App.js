import React, { useReducer } from 'react';
import Fieldset from './components/Fieldset';

import posts from './posts';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 10;
    case 'decrement':
      return state - 10;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h1>Forum App</h1>
        {posts.map((post, index) => (
          <Fieldset post={post.post} key={index} username={post.username} />
        ))}
        <div className="footer">
          <p>Broj bodova: {count}</p>
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
