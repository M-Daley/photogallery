import { useState, useEffect } from 'react'

export default function Home({ images }) {
  const [gallery, setGallery] = useState()

  console.log(images.data)

  useEffect(() => {
    setGallery(
      <div className="image-gallery">
        {images.data.map((url, idx) => {
          return <a
            key={idx}
            href={url}
            target="_blank"
            style={{
              gridArea: `img-${idx}`,
              backgroundImage: `url(${url.replace(/\\/g, '/')})`
            }}>
          <ion-icon name="expand" />
        </a>
      })}
    </div>
    )
  }, [])

  return (
    <div className="container">
      {gallery}
    </div>
  )
}

export async function getStaticProps(_) {
  // const res = await fetch('http://localhost:3000/api/imgs')
  const res = await fetch('https://lit-forest-23513.herokuapp.com/api/imgs')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      images: { data }
    }
  }
}