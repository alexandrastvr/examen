import React from 'react';
import '../../styles/Person.css';

function Person(props) {
    const {name, surname, job, salary} = props;
  return (
    <p className='person-item mt-3 mb-3 p-3 w-50'>{name} {surname}, {job}, {salary}RON</p>
  )
}

export default Person;