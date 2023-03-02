import { useState, useEffect, useCallback } from 'react';

function Jokes() {
  const [jokes, setJokes] = useState('');
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');
  const [formData, setFormData] = useState('');
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    const headers = { Accept: 'application/json' };
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => {
        setJokes([json.joke]);
      });
  }, [isRandom]);

  function selectJoke(url) {
    const headers = { Accept: 'application/json' };
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) =>
        setJokes(() => {
          let categoryJokes = json.results;
          const randomNumber = Math.floor(Math.random() * categoryJokes.length);
          return categoryJokes[randomNumber].joke;
        })
      )
      .catch((err) => setJokes(`${err}`));
  }

  function getJoke(url) {
    url && setUrl(url);
    setIsRandom((prevState) => !prevState);
  }

  function handleChange(e) {
    e.preventDefault();
    setFormData(e.target.value);
  }

  return (
    <div>
      {jokes && <p> {jokes}</p>}
      <button
        onClick={() => selectJoke('https://icanhazdadjoke.com/search?term=cat')}
      >
        get cat joke
      </button>
      <button onClick={() => getJoke('https://icanhazdadjoke.com/')}>
        get random joke
      </button>
      <button
        onClick={() => selectJoke('https://icanhazdadjoke.com/search?term=dog')}
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
              selectJoke(`https://icanhazdadjoke.com/search?term=${formData}`)
            }
          >
            submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Jokes;
