import { validateName, validatePhoneNumber } from 'helpers/input-validation';
import Input from './Input';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  name: '',
  phone: '',
  validation: { name: true, phone: true },
};

export default class FormNewPhone extends Component {
  state = { ...INITIAL_STATE, validation: { ...INITIAL_STATE.validation } };

  handleSubmit = event => {
    event.preventDefault();
    const { onAddPhone } = this.props;

    if (!validateName(this.state.name)) {
      this.setState(prevState => {
        return {
          validation: { ...prevState.validation, name: false },
        };
      });
      return;
    }

    if (!validatePhoneNumber(this.state.phone)) {
      this.setState(prevState => {
        return {
          validation: { ...prevState.validation, phone: false },
        };
      });
      return;
    }

    onAddPhone({
      id: uuid(),
      name: this.state.name,
      phone: this.state.phone,
    });

    this.setState({
      ...INITIAL_STATE,
      validation: { ...INITIAL_STATE.validation },
    });
  };

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-[90%] px-5 flex flex-col gap-5 py-5 items-center gap-2 border border-stone-900 rounded-lg mt-10"
      >
        <Input
          type="text"
          name="name"
          label="Name"
          onChange={this.handleInputChange}
          value={this.state.name}
          isValid={this.state.validation.name}
          invalidMessage="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Input
          type="tel"
          name="phone"
          label="Phone"
          onChange={this.handleInputChange}
          value={this.state.phone}
          isValid={this.state.validation.phone}
          invalidMessage="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button
          type="submit"
          className="text-xl
        px-6 py-2 rounded-lg bg-stone-800 text-stone-100  hover:bg-stone-600 transition-colors cursor-pointer"
        >
          Add contact
        </button>
      </form>
    );
  }
}
