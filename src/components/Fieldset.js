import React, { useCallback, useContext } from 'react';
import { CountContext } from '../App';

const Fieldset = (props) => {
  const { post, username } = props;
  const countContext = useContext(CountContext);
  return (
    <div className="text">
      <fieldset>
        <p>{post}</p>
        <button onClick={() => countContext.countDispatch('increment')}>
          Šamar
        </button>
        <button onClick={() => countContext.countDispatch('decrement')}>
          Aplauz
        </button>
        <p id="ispis3"></p>
        <br></br>
        <span class="korisnik">Napisao {username} | 25/12/2020</span>
      </fieldset>
    </div>
  );
};

export default Fieldset;
