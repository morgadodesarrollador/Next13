'use client'

import { useState } from "react"

interface Id {
    id: number
}
const LikeButton = ( id: Id  ) => {

  const [ liked, setLiked ] = useState(false)
  return (
    <button onClick={() => setLiked(!liked)}>
       { liked ? '💗' : '💝' }
    </button>
  )
}

export default LikeButton
