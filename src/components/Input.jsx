import { Component } from 'react';

export default class Input extends Component {
  handleOnChange = event => {
    const { onChange } = this.props;
    const currValue = event.target.value.trim();
    const currName = event.target.name.trim();

    onChange(currName, currValue);
  };

  render() {
    const { type, name, label, value, invalidMessage, isValid } = this.props;

    return (
      <p className="flex flex-col gap-3  w-full">
        <label className=" text-xl text-stone-700 " htmlFor={name}>
          {label}
        </label>
        <input
          className=" text-xl text-stone-700
                   p-3 rounded-lg outline-stone-500 bg-stone-50"
          type={type}
          id={name}
          name={name}
          onChange={this.handleOnChange}
          value={value}
        />
        {!isValid && (
          <span className="text-sm text-red-600 ">{invalidMessage}</span>
        )}
      </p>
    );
  }
}
