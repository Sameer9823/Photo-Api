// PhotoDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        setPhoto(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);
  console.log("ID:", id);
  console.log("Photo Data:", photo);
  console.log("Error:", error);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className='detail'>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title || "Image"} />
      {photo.description && <p>{photo.description}</p>}
    </div>
  );
};

export default PhotoDetail;
