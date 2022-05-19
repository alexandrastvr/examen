import React from 'react';
import Form from '../../components/form/Form';
import {Link} from 'react-router-dom';
import '../../styles/Home.css';

function Home() {
  return (
    <div className='home'>
        <Link to={'/people'} className='mb-5' style={{textDecoration:'none', color:'black'}}>
            <span className='linkPg mb-5 effect'>Vezi lista!</span>
        </Link>
        <Form />
    </div>
  )
}

export default Home;