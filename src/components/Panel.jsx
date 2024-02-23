// Panel.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Photo.css';

const Panel = () => {
  const [photos, setPhotos] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`);
        setPhotos(response.data.photos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhotos();
  }, [offset]);

  const handleNext = () => {
    setOffset(offset + 20);
  };

  const handlePrevious = () => {
    if (offset >= 20) {
      setOffset(offset - 20);
    }
  };

  return (
    <div>
      <h2>Gallery</h2>
      <div className='photo-container'>
        {photos.map((photo) => (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <div>
              <h3>{photo.title}</h3>
              <img className='image' src={photo.url} alt={photo.title} />
            </div>
          </Link>
        ))}
      </div>
      <div className='btn'>
        <button className='btn1' onClick={handlePrevious} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Panel;
