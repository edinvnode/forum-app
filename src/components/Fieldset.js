import React from 'react';

const Fieldset = (props) => {
  const { post } = props;
  return (
    <div className="text">
      <fieldset>
        <p>{post}</p>
        <button>Šamar</button>
        <button>Aplauz</button>
      </fieldset>
    </div>
  );
};

export default Fieldset;
