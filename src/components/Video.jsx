import React from 'react'

function Video({id,video_id}) {
  return (
    <div key={id}>
      <iframe width="420" height="215" src={`https://www.youtube.com/embed/${video_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Video
