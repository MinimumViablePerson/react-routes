import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PhotoDetails () {
  const params = useParams()

  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      .then(resp => resp.json())
      .then(photoFromServer => setPhoto(photoFromServer))
  }, [])

  if (photo === null) return <main>Loading...</main>

  if (photo.title === undefined) return <main>Picture not found</main>

  return (
    <main>
      <h2>Photo Details</h2>
      <h3>{photo.title}</h3>
      <img src={photo.url} alt='' />
    </main>
  )
}

export default PhotoDetails
