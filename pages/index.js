import imageLinks from '../assets/cloudRef'
import { useState, useEffect } from 'react'


export default function Home() {
  const [gallery, setGallery] = useState()

  useEffect(() => {
      setGallery(<div className="image-gallery">
        {imageLinks.map((url, idx) => {
          return <a
            key={idx}
            href={url}
            target="_blank"
            style={{
              gridArea: `img-${idx}`,
              backgroundImage: `url(${url})`
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