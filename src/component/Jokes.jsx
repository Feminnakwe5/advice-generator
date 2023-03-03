import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
function Jokes() {
  const [formData, setFormData] = useState('');
  const { jokes, link } = useFetch();

  function handleChange(e) {
    // e.preventDefault();
    setFormData(e.target.value);
  }

  return (
    <div className='main'>
      <div className='text'>
        {jokes && <p> "{jokes}"</p>}
        <input
          type='text'
          value={formData}
          onChange={handleChange}
          placeholder='Get custom joke'
        />
      </div>
      <div className='joke-category'>
        <button onClick={() => link('https://icanhazdadjoke.com/')}>
          random joke
        </button>
        <button
          onClick={() => link('https://icanhazdadjoke.com/search?term=cat')}
        >
          cat joke
        </button>
        <button
          onClick={() => link('https://icanhazdadjoke.com/search?term=dog')}
        >
          dog joke
        </button>
        <button
          onClick={() =>
            link(`https://icanhazdadjoke.com/search?term=${formData}`)
          }
          disabled={formData ? false : true}
        >
          custom Joke
        </button>
      </div>
    </div>
  );
}

export default Jokes;
