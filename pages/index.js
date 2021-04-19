import imageLinks from '../assets/cloudRef'
import { useState, useEffect } from 'react'


export default function Home() {
  const [gallery, setGallery] = useState()

  useEffect(() => {
      setGallery(<div className="image-gallery">
        {imageLinks.map((_, idx) => {
          return <a
            key={idx}
            href={_.link}
            target="_blank"
            className={`img-${idx} ${_.type}`}
            style={{
              backgroundImage: `url(${_.link})`
            }}>
          <ion-icon name="expand" />
        </a>
      })}
    </div>)
  }, [])

  return (
    <div className="container">
      {gallery}
    </div>
  )
}