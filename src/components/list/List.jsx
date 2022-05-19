import React from 'react';
import Person from '../person/Person';

function List(props) {
  const {people} = props;
  return (
    <div>
      <h3 className='ms-3 mb-4'>Persoanele adaugate</h3>
      <div className='list d-flex flex-column align-items-start ms-3'>
        
          {
            people 
            ? people.map((person, index) => {
              return(
                <Person name = {person.name}
                        surname = {person.surname} 
                        job = {person.job} 
                        salary = {person.salary} 
                        employmentDate = {person.employmentDate}
                        key = {index}
                />
              )
            })
            : null
          }
      </div>

    </div>
  )
}
export default List;