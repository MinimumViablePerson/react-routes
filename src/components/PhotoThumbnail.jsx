import { Link } from 'react-router-dom'

function PhotoThumbnail (props) {
  return (
    <Link to={`/photos/${props.photo.id}`}>
      <li className='photo'>
        <h3>{props.photo.title}</h3>
        <img src={props.photo.thumbnailUrl} alt='' />
      </li>
    </Link>
  )
}

export default PhotoThumbnail
