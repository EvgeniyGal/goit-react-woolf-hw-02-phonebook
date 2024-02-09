import { Component } from 'react';
import Input from './Input';
import Contact from './ContactItem';

export default class Contacts extends Component {
  state = { findInput: '' };

  handleInputChange = (_, value) => {
    this.setState({
      findInput: value,
    });
  };

  filterPhoneList = () => {
    const { phoneList } = this.props;

    return phoneList.filter(
      ({ name }) =>
        name.slice(0, this.state.findInput.length).toLowerCase() ===
        this.state.findInput.toLowerCase()
    );
  };

  render() {
    const { onDelete, phoneList } = this.props;
    const filteredPhoneLIst = this.state.findInput
      ? this.filterPhoneList()
      : phoneList;

    return (
      <div className="mt-5 flex flex-col gap-5 w-full px-5">
        <h2 className="text-3xl font-bold text-stone-700">Contacts</h2>
        <Input
          type="text"
          name="find"
          label="Find contacts by name"
          onChange={this.handleInputChange}
          value={this.state.findInput}
        />
        <ul className="flex flex-col gap-3">
          {filteredPhoneLIst.map(phone => (
            <Contact onDelete={onDelete} key={phone.id} data={phone} />
          ))}
        </ul>
      </div>
    );
  }
}
