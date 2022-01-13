import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PhotoThumbnail from '../components/PhotoThumbnail'

function Photos () {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(resp => resp.json())
      .then(photosFromServer => setPhotos(photosFromServer))
  }, [])

  return (
    <main>
      <h2>Photos</h2>

      <ul className='photo-list'>
        {photos.map(photo => (
          <PhotoThumbnail photo={photo} />
        ))}
      </ul>
    </main>
  )
}

export default Photos
