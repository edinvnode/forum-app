import React from 'react';

const Fieldset = (props) => {
  const { post, username } = props;
  return (
    <div className="text">
      <fieldset>
        <p>{post}</p>
        <button>Šamar</button>
        <button>Aplauz</button>
        <p id="ispis3"></p>
        <br></br>
        <span class="korisnik">Napisao {username} | 25/12/2020</span>
      </fieldset>
    </div>
  );
};

export default Fieldset;
