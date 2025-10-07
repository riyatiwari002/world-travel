import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://example.com/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="gallery">
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          <img src={img.image} alt={img.title} />
          <h3>{img.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
