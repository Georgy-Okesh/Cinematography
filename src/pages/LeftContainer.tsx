import React from 'react'
import { imageData } from '../styles/data'
import CommonContainer from './CommonContainer'
import ImagePlayer from './ImagePlayer'
export default function LeftContainer() {
  return (
        <CommonContainer
            mediaData={imageData}
            position="left"
            title='Photo'
            render={(media) => (
                <div className='container container-left'>
                    <ImagePlayer src={media.mediaUrl}/>
                    <h1 className='container-big-title'>{media.title}</h1>
                </div>
            )}
        
        />
  )
}
