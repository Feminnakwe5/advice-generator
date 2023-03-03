import { useState, useEffect } from 'react';

export function useFetch() {
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');
  const [jokes, setJokes] = useState('');
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    const headers = { Accept: 'application/json' };
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) =>
        json.results
          ? setJokes(() => {
              let categoryJokes = json.results;
              const randomNumber = Math.floor(
                Math.random() * categoryJokes.length
              );
              return categoryJokes && randomNumber
                ? categoryJokes[randomNumber].joke
                : "All out of jokes, I'll go get some from the store, and some milk too";
            })
          : setJokes([json.joke])
      );
  }, [url, isRandom]);

  const link = (newUrl) => {
    setUrl(newUrl);
    setIsRandom((prevState) => !prevState);
  };

  return { jokes, link };
}
