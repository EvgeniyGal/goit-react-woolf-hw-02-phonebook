import { Component } from 'react';
import Contacts from './Contacts';
import FormNewPhone from './FormNewPhone';
import { v4 as uuid } from 'uuid';

export class App extends Component {
  state = { phoneList: [] };

  handleAddPhone = newPhone => {
    if (this.state.phoneList.some(({ name }) => newPhone.name === name)) {
      alert(`${newPhone.name} is already in contacts`);
      return;
    }
    
    newPhone.id = uuid();
    this.setState(prevState => {
      return {
        phoneList: [...prevState.phoneList, newPhone],
      };
    });
  };

  handleDeletePhone = id => {
    this.setState(prevState => {
      return {
        phoneList: prevState.phoneList.filter(phone => phone.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="min-w-96 w-1/2 mx-auto flex flex-col items-center bg-stone-200  py-10 rounded-md">
        <h1 className="text-stone-700 text-6xl  font-bold text-center">
          Phonebook
        </h1>
        <FormNewPhone onAddPhone={this.handleAddPhone} />
        <Contacts
          phoneList={this.state.phoneList}
          onDelete={this.handleDeletePhone}
        />
      </div>
    );
  }
}
