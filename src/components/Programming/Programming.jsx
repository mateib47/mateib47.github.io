import React from 'react'
import Portofolio from './Portofolio/Portofolio'
import { useEffect } from 'react';

const Programming = ({setItems}) => {
  useEffect(() => {
    setItems([ 'Portofolio']);
  }, [])
  
  return (
    <>
        <Portofolio/>
    </>
  )
}

export default Programming