import React from 'react';
import './App.css';
import { getContacts, deleteContactName, insertContact, editContactName, deleteAllContatcs, deleteContactId, sortField } from './util/contacts';
import Contact from './Components/Contact/Contact';
import NewContact from './Components/NewContact/NewContacts';

let contact = {
  id: '',
  full_name: '',
  email: '',
  phone_number: '',
  address : '',
  dob_dd: '',
  dob_mm: '',
  dob_yy: '',
  gender: '',
  country: '',
}
let contacts = [];

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      readOnly: true,
      disabled: true,                                                
      contacts: [],
      deleteIds: [],
      sortAscending: {
        id: true,
        full_name: true,
        email: true,
        phone_number: true,
        gender: true,
        country: true
      }
      
    }
    this.getContacts = this.getContacts.bind(this);
    this.sortField = this.sortField.bind(this);
    this.deleteContactId = this.deleteContactId.bind(this);
    this.editContactName = this.editContactName.bind(this);
    this.insertContact = this.insertContact.bind(this);
    this.reload = this.reload.bind(this);
    this.deleteAllContatcs = this.deleteAllContatcs.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.deleteSelectedContact = this.deleteSelectedContact.bind(this);
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
    this.handleSortId = this.handleSortId.bind(this);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    let contactsData = getContacts().then(data => {
      this.setState({
        contacts: data
      });
    });    
  }

  insertContact() {
    let insered = insertContact().then(data =>{
      this.setState({
        contacts: data
      })
    })
  }

  deleteContactId() {
    let deletedId = deleteContactId().then(data => {
      this.setState({
        contacts: data
      });
    })
  }
  deleteAllContatcs(data){
    deleteAllContatcs(data).then(()=>{
        this.reload();
    });
  }

  handleDeleteAll(){
      if (window.confirm('Are you sure you want to remove all the contatcs?')) {
          this.deleteAllContatcs(this.state.contacts);
      }
  }

  editContactName() {
    let editContact = editContactName().then(data =>{
      this.setState({
        contacts: data
      }).then(()=>{
        this.reload();
      })
     
    })
  }

  reload() {
    this.getContacts();
  }

  addDeleteId(id){
    let deleteIdsLocal = this.state.deleteIds;
    deleteIdsLocal.push(id);
    this.setState({
      deleteIds: deleteIdsLocal
    });
  }

  removeDeleteId(id){
    let deleteIdsLocal = this.state.deleteIds;
    for (let i = 0; i < deleteIdsLocal.length; i++){
      if (deleteIdsLocal[i] === id){
        deleteIdsLocal.splice(i, 1)
      }
    }
    this.setState({
      deleteIds: deleteIdsLocal
    });
  }

  deleteSelectedContact() {
    for (let i = 0; i < this.state.deleteIds.length; i++){
      let id = this.state.deleteIds[i];
      let deletedId = deleteContactId(id);
    }
    this.setState({
      deleteIds:[]
    });
    this.reload();
    
  }

  handleDeleteSelected(){
    if(window.confirm('Are you sure you want to delete the contacts you selected?')){
      this.deleteSelectedContact();
    }
  }

  sortField(field, direction){
    let sorted = sortField(field, direction).then(data => {
      this.setState({
        contacts: data
      });
    });    
  }

  handleSortId(e){
    let direction = 'ASC';
    if (!this.state.sortAscending.id) {
      direction = 'DESC';
    }
    this.sortField('id', direction);
    this.setState( prevState =>{
      let sortAscending= {...prevState.sortAscending};
      sortAscending.id= !prevState.sortAscending.id;
      return {sortAscending}
      })
  }
  handleSortFullName(e){
    let direction = 'ASC';
    if (!this.state.sortAscending.full_name) {
      direction = 'DESC';
    }
    this.sortField('full_name', direction);
    this.setState( prevState =>{
      let sortAscending= {...prevState.sortAscending};
      sortAscending.full_name= !prevState.sortAscending.full_name;
      return {sortAscending};
    })
  }
  handleSortEmail(e){
    let direction = 'ASC';
    if (!this.state.sortAscending.email) {
      direction = 'DESC';
    }
    this.sortField('email', direction);
    this.setState( prevState =>{
      let sortAscending= {...prevState.sortAscending};
      sortAscending.email= !prevState.sortAscending.email;
      return {sortAscending}
      })
  }

  handleSortPhoneNumber(e){
    let direction = 'ASC';
    if (!this.state.sortAscending.phone_number) {
      direction = 'DESC';
    }
    this.sortField('phone_number', direction);
    this.setState( prevState => {
      let sortAscending= {...prevState.sortAscending};
      sortAscending.phone_number= !prevState.sortAscending.phone_number;
      return {sortAscending};
    })
  }
  handleSortAGender(e){
    let direction = 'ASC';
    if (!this.state.sortAscending.gender) {
      direction = 'DESC';
    }
    this.sortField('id', direction);
    this.setState( prevState =>{
      let sortAscending= {...prevState.sortAscending};
      sortAscending.gender= !prevState.sortAscending.gender;
      return {sortAscending}
      }
    )
  }

  handleSortClick(field) {
    if (field === 'id') {
      return this.handleSortId.bind(this);
    }
    if (field === 'full_name') {
      return this.handleSortFullName.bind(this);
    }
    if (field === 'email') {
      return this.handleSortEmail.bind(this);
    }
    if (field === 'phone_number') {
      return this.handleSortPhoneNumber.bind(this);
    }
    if (field === 'gender') {
      return this.handleSortAGender.bind(this);
    }
  }


  render () {
    let fieldId;
    if (this.state.sortAscending.id){
      fieldId = <a onClick={this.handleSortClick('id')}>ID<span>&#8593;</span></a>;
    } else {
      fieldId = <a onClick={this.handleSortClick('id')}>ID<span>&#8595;</span></a>;
    }
    let fieldFullName;
    if (this.state.sortAscending.full_name){
      fieldFullName = <a onClick={this.handleSortClick('full_name')}>Full Name<span>&#8593;</span></a>;
    } else {
      fieldFullName = <a onClick={this.handleSortClick('full_name')}>Full Name<span>&#8595;</span></a>;
    }
    let fieldEmail;
    if (this.state.sortAscending.email){
      fieldEmail = <a onClick={this.handleSortClick('email')}>Email<span>&#8593;</span></a>;
    } else {
      fieldEmail = <a onClick={this.handleSortClick('email')}>Email<span>&#8595;</span></a>;
    }

    let fieldPhoneNumber;
    if (this.state.sortAscending.phone_number){
      fieldPhoneNumber = <a onClick={this.handleSortClick('phone_number')}>Phone<span>&#8593;</span></a>;
    } else {
      fieldPhoneNumber = <a onClick={this.handleSortClick('phone_number')}>Phone<span>&#8595;</span></a>;
    }
    let fieldGender;
    if (this.state.sortAscending.gender){
      fieldGender = <a onClick={this.handleSortClick('gender')}>Gender<span>&#8593;</span></a>;
    } else {
      fieldGender = <a onClick={this.handleSortClick('gender')}>Gender<span>&#8595;</span></a>;
    }


    return (
    <div className="App">
      <h1>Contact List App</h1>
      <table className='table table-striped table-contacts'>
        <thead>
        <tr className='thead-dark'>
          <th className="text-center"></th>
          <th className="text-center fieldId">{fieldId}</th>
          <th className='text-center fieldFullName'>{fieldFullName}</th>
          <th className='text-center fieldEmail'>{fieldEmail}</th>
          <th className='text-center fieldPhoneNumber'>{fieldPhoneNumber}</th>
          <th className='text-center fieldAddress'>Address</th>
          <th className='text-center birthDay'>Birth Day</th>
          <th className="text-center fieldGender">{fieldGender}</th>
          <th className="text-center county">Country</th>
          <th className='text-center action'>Action</th>
        </tr>
        </thead>
        
        <tbody>
          {this.state.contacts.map(c=>{ return<Contact contact={c} addDeleteId={this.addDeleteId.bind(this)} removeDeleteId={this.removeDeleteId.bind(this)} reload={this.reload} key={c.id} /> })}
        </tbody>
        
    </table>
      <div style={{marginLeft: "30 px"}}>
        &nbsp;
        <button className = "btn btn-light" onClick={this.handleDeleteAll}>Delete All</button>
        &nbsp;
        <button className = "btn btn-light" onClick={this.handleDeleteSelected}>Delete Selected: {this.state.deleteIds.map(i=> i+',')} </button>
      </div>
      
      <NewContact reload={this.reload}/>
    </div>


    );
  }

};

export default App;
