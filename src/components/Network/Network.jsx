import React from 'react';
import { parse } from '@vanillaes/csv';
import connections from '../../assets/connections.csv'


const Network = () => {

const readFile = () => {
    let reader = new FileReader();
}

    const parsed = parse(connections);
    console.log(parsed);


  return (
    <div>Network</div>
  )
}

export default Network