import React from 'react'
import Small from './x-small'
import XSmall from './small'
import Medium from './medium'
import Large from './large'
import XLarge from './x-large'

const matchMedia = (media) => {
  switch(media) {
    case 'sm':
      return Small
    case 'md':
      return Medium
    case 'lg':
      return Large
    case 'xl':
        return XLarge
    case 'xs':
    default:
      return XSmall
  }
}

const Media = ({ media, children }) => {
  const MatchedMedia = matchMedia(media)
  return (
  <MatchedMedia>
    { children }
  </MatchedMedia>
  )
  
}

export default Media