import React, { useContext, useState } from 'react';
import { CountContext } from '../App';

const Fieldset = (props) => {
  const { post, username } = props;
  //const countContext = useContext(CountContext);

  const { countDispatch } = useContext(CountContext);

  const [isShamarDisabled, setShamarDisabled] = useState(false);
  const [isAplauzDisabled, setAplauzDisabled] = useState(false);

  const handleShamar = () => {
    countDispatch('increment');
    setShamarDisabled(true); // disable after click
    setAplauzDisabled(false);
  };

  const handleAplauz = () => {
    countDispatch('decrement');
    setAplauzDisabled(true); // disable after click
    setShamarDisabled(false);
  };

  return (
    <div className="text">
      <fieldset>
        <p>{post}</p>
        <button onClick={handleShamar} disabled={isShamarDisabled}>
          Šamar
        </button>
        <button onClick={handleAplauz} disabled={isAplauzDisabled}>
          Aplauz
        </button>
        <p id="ispis">
          {isShamarDisabled && (
            <span style={{ color: 'red' }}>Post je dobio samar od admina</span>
          )}
          {isAplauzDisabled && (
            <span style={{ color: 'green' }}>
              Post je dobio aplauz od admina
            </span>
          )}
        </p>
        <br></br>
        <span class="korisnik">Napisao {username} | 25/12/2020</span>
      </fieldset>
    </div>
  );
};

export default Fieldset;
