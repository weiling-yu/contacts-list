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
      sortAscending: true,
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
    this.handleSort = this.handleSort.bind(this);
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

  handleSort(e){
    let direction = 'ASC';
    if (!this.state.sortAscending) {
      direction = 'DESC';
    }
    this.sortField('id', direction);
    this.setState({
      sortAscending: !this.state.sortAscending,
    })
  }


  render () {
    let fieldId;
    if (this.state.sortAscending){
      fieldId = <a onClick={this.handleSortdirection}>ID<span>&#8593;</span></a>;
    } else {
      fieldId = <a onClick={this.handleSortdirection}>ID<span>&#8595;</span></a>;
    }
    


    return (
    <div className="App">
      <h1>Contact List App</h1>
      <table className='table table-striped table-contacts'>
        <thead>
        <tr className='thead-dark'>
          <th className="text-center"></th>
          <th className="text-center id">{fieldId}</th>
          <th className='text-center fullName'>Full Name</th>
          <th className='text-center email'>Email</th>
          <th className='text-center phone_number'>Phone</th>
          <th className='text-center address'>Address</th>
          <th className='text-center birthDay'>Birth Day</th>
          <th className="text-center gender">Gender</th>
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
