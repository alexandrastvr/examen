import React from 'react';
import { connect } from 'react-redux';
import {addPerson} from '../../redux/action';
import '../../styles/Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            job: '',
            salary: 0,
            employmentDate: ''
        }
    }

    render() {
        const {addPerson} = this.props;
        return ( 
          <form onSubmit={(event) => {event.preventDefault();
                                      addPerson(
                                          {
                                              name: this.state.name,
                                              surname: this.state.surname,
                                              job: this.state.job,
                                              salary: this.state.salary,
                                              employmentDate: this.state.employmentDate
                                          }
                                      )
                                      }
                          } 
               className='add-form d-flex flex-column'>
              <h3 className='mb-5'>Adauga o persoana!</h3>
                  <div className="form-floating mb-3">
                      <input type="text" onChange={(event) => this.setState({name: event.target.value})}
                                         className="form-control" id="nume" placeholder="Nume"/>
                      <label htmlFor="nume">Nume</label>
                  </div>
                  <div className="form-floating mb-3">
                      <input type="text" onChange={(event) => this.setState({surname: event.target.value})}
                                         className="form-control" id="prenume" placeholder="Prenume"/>
                      <label htmlFor="prenume">Prenume</label>
                  </div>
                  <div className="form-floating mb-3">
                      <input type="text" onChange={(event) => this.setState({job: event.target.value})}
                                         className="form-control" id="meserie" placeholder="Meserie"/>
                      <label htmlFor="meserie">Meserie</label>
                  </div>
                  <div className="form-floating mb-3">
                      <input type="number" onChange={(event) => this.setState({salary: event.target.value})}
                                           className="form-control" id="salariu" placeholder="00000"/>
                      <label htmlFor="salariu">Salariu</label>
                  </div>
                  <label htmlFor='data' className='mb-1'>Data angajarii:</label>
                  <input type='date' onChange={(event) => this.setState({employmentDate: event.target.value})}
                                     className='mb-5 align-self-start'></input>
                  <input type='submit' className='btn btn-outline-dark btn-lg align-self-start'></input>
          </form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        addPerson: (person) => dispatch(addPerson(person)) 
    }
}
export default connect(null, mapDispatchToProps)(Form);
