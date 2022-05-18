import React from 'react';
import Form from '../../components/form/Form';
import {Link} from 'react-router-dom';
import '../../styles/Home.css';

function Home() {
  return (
    <div className='home container w-25 d-flex flex-column align-items-start'>
        <Link to={'/people'} className='mb-5' style={{textDecoration:'none', color:'black'}}>
            <div className='linkPg mb-3 effect'>Vezi lista!</div>
        </Link>
        <Form />
    </div>
  )
}

export default Home;