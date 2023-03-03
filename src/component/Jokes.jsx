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
    <div>
      {jokes && <p> {jokes}</p>}
      <button
        onClick={() => link('https://icanhazdadjoke.com/search?term=cat')}
      >
        get cat joke
      </button>
      <button onClick={() => link('https://icanhazdadjoke.com/')}>
        get random joke
      </button>
      <button
        onClick={() => link('https://icanhazdadjoke.com/search?term=dog')}
      >
        get dog joke
      </button>
      <div>
        <input
          type='text'
          value={formData}
          onChange={handleChange}
          placeholder='Get custom joke'
        />
        {formData && (
          <button
            onClick={() =>
              link(`https://icanhazdadjoke.com/search?term=${formData}`)
            }
          >
            get Joke
          </button>
        )}
      </div>
    </div>
  );
}

export default Jokes;
