import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../api/firebase';

const RequestForm = ({ onSubmit, error }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [imageUrls, setImageUrls] = useState(null);

  const handleImageUpload = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    const uploadedImages = [];

    for (const file of selectedFiles) {
      try {
        const storageRef = ref(storage, 'Attractions/' + file.name);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        uploadedImages.push(downloadUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }

    setImageUrls(uploadedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const attractionData = {
      name,
      description,
      location,
      city,
      categories,
      images: imageUrls,
    };

    try {
      console.log('Attraction data:', attractionData);
      onSubmit(attractionData);
    } catch (error) {
      console.error('Error adding attraction:', error);
    }
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter((category) => category !== categoryToRemove));
  };

  return (
    <>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <div>
            
            <label htmlFor="name">Attraction Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="categories">Categories:</label>
            <div>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter category"
              />
              <button type="button" onClick={handleAddCategory}>
                Add Category
              </button>
            </div>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  {category}
                  <button type="button" onClick={() => handleRemoveCategory(category)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label htmlFor="images">Attraction Images:</label>
            <input type="file" id="images" multiple onChange={handleImageUpload} required />
            {imageUrls &&
              imageUrls.map((url, index) => (
                <img key={index} src={url} alt="Attraction" style={{ maxWidth: '200px', marginTop: '10px' }} />
              ))}
          </div>
          <button type="submit" disabled={!imageUrls}>
            Request Attraction
          </button>
        </form>
      </div>
    </>
  );
};

export default RequestForm;