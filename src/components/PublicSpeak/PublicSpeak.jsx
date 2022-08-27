import React from 'react';
import { useEffect } from 'react';
import TedVideo from './TedVideo';

const PublicSpeak = ({setItems}) => {
    useEffect(() => {
        setItems([ 'Home','Story', 'Video']);
      }, [])
  return (
    <>
        {/* <Home />
        <Story/> */}
        <TedVideo />
    </>
  )
}

export default PublicSpeak