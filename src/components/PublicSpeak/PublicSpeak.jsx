import React from 'react';
import { useEffect } from 'react';
import TedVideo from './TedVideo';
import Home from './Home';

const PublicSpeak = ({setItems}) => {
    useEffect(() => {
        setItems([ 'Home','Story', 'Video']);
      }, [])
  return (
    <>
         <Home />
        <TedVideo />
    </>
  )
}

export default PublicSpeak