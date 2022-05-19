import React from 'react';
import List from '../../components/list/List';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../styles/People.css';

class People extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    this.setState({people:this.props.people});
  }
  orderByName(){
    this.setState({people: this.state.people.sort((a,b) => a.name.localeCompare(b.name))})
  }
  orderBySalary() {
    this.setState({people: this.state.people.sort((a,b) => a.salary < b.salary ? -1 : 1)})
  }
  filterFirst() {
    const newPeopleArray = this.props.people.filter((person) => person.salary < 2500);
    this.setState({people: newPeopleArray})
  }
  filterSecond() {
    const newPeopleArray = this.props.people.filter((person) => person.salary > 2500 && person.salary < 4000);
    this.setState({people: newPeopleArray})
  }
  filterThird() {
    const newPeopleArray = this.props.people.filter((person) => person.salary > 4000);
    this.setState({people: newPeopleArray})
  }
  render() {
    return (
      <div className='people  container d-flex flex-row align-items-center justify-content-center'>
       
        
          <div className='buttons me-3 ms-5 d-flex flex-column align-items-end'>
              <Link to={'/'} className='mb-5' style={{textDecoration:'none', color:'black'}}>
                <span className='linkPg mt-3 ms-5 mb-5 effect' style={{width: '6.5em'}}>Inapoi la formular</span>
              </Link>
              <p className='mt-5 '>Sorteaza dupa...</p>
              <button onClick={() => this.orderByName()} className='effect2 mb-2'>Nume</button>
              <button onClick={() => this.orderBySalary()} className='effect2 mb-2'>Salariu</button>
              <p className='mt-5'>Filtreaza persoanele cu salariu intre...</p>
              <button onClick={() => this.filterFirst()} className='effect2 mb-2'> &#60;2500</button>
              <button onClick={() => this.filterSecond()} className='effect2 mb-2'> 2500 - 4000</button>
              <button onClick={() => this.filterThird()} className='effect2 mb-2'> &#62;4000</button>
              
          </div>
          <List people= {this.state.people}/>
        
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    people: state.people
  }
}
export default connect(mapStateToProps)(People);