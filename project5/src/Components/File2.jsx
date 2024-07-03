import React, { useState, useEffect } from 'react'

const File2 = () => {

  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(data))
      .catch(err => console.log("Error fetching the jokes : " + err))
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <h1>Joke Generator</h1>
      <p>{joke.setup} </p>
      <p>{joke.punchline} </p>
      {/* <p>joke</p> */}
      <button onClick={fetchJoke} >Get Another Joke</button>
    </div>
  )
}

export default File2
