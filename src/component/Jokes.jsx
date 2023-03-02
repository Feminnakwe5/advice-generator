import { useState, useEffect, useCallback } from 'react';

function Jokes() {
  const [joke, setJoke] = useState('');
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');
  const [image, setImage] = useState();
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    const headers = { Accept: 'application/json' };
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => {
        setJoke(json.joke);
      });
  }, [url, isImage]);

  // function getImage(imageUrl) {
  //   setIsImage(true);
  //   setUrl(imageUrl);
  // }
  function getJoke(url) {
    url ? setUrl(url) : setIsImage((prevState) => !prevState);
  }
  return (
    <div>
      {joke && <p> {joke} </p>}
      <button>get image</button>
      <button onClick={() => getJoke()}> get random joke</button>
      <button
        onClick={() =>
          getJoke('https://icanhazdadjoke.com/search?term=hipster')
        }
      >
        get hipster joke
      </button>
    </div>
  );
}

export default Jokes;
