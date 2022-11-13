import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <div className='text-center p-3' style={{ backgroundColor: '#11143d' }}>
        © 2022 Copyright:&nbsp;
        <a className='text-white' href='#'>
        Scholars Go.com
        </a>
      </div>
    </MDBFooter>
  );
}