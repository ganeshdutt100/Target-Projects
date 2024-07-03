import React, { useEffect, useState } from 'react'
import axios from 'axios';
const File3 = () => {
  const [meme, setMeme] = useState(null);

  const fetchMeme = async () => {
    try {
      const resp = await axios.get("https://api.imgflip.com/get_memes");
      const memes = resp.data.data.memes;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      setMeme(randomMeme);

    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeme();
  }, [])
  return (
    <div>
      <h1>Random meme Generator</h1>
      <button onClick={fetchMeme} >Change meme</button>

      {meme && (
        <div>
          <p>{meme.name}</p>
          <img src={meme.url} alt="{meme.name}" style={{ width: "400px" }} />
        </div>
      )}
    </div>
  )
}

export default File3
