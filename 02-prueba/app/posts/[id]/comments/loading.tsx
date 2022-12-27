import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div>
      Cargando Comentarios ...
      <Image src="/200w.gif" width={100} height={100} alt={''} />
    </div>
  )
}

export default Loading
