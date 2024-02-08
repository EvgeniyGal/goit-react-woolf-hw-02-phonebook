import { Component } from 'react';

export default class Contact extends Component {
  render() {
    const {
      data: { id, name, phone },
      onDelete,
    } = this.props;
    return (
      <li className="flex justify-between ">
        <p className="text-stone-700">
          {name}: {phone}
        </p>
        <button
          className="text-stone-700 font-bold hover:text-red-500"
          onClick={() => onDelete(id)}
        >
          delete
        </button>
      </li>
    );
  }
}
