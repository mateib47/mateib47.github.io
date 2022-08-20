import React from 'react'
import Portofolio from './Portofolio/Portofolio'
import Languages from './Languages/Languages';
import { useEffect } from 'react';

const Programming = ({setItems}) => {
  useEffect(() => {
    setItems([ 'Portofolio']);
  }, [])
  
  return (
    <>
        <Languages/>
        <Portofolio/>
    </>
  )
}

export default Programming