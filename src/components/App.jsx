import { useState } from 'react';
import Contacts from './Contacts';
import FormNewPhone from './FormNewPhone';

export const App = () => {
  const [projectState, setProjectState] = useState([]);

  function handleAddPhone(newPhone) {
    setProjectState(prevState => {
      return [...prevState, newPhone];
    });
  }

  function handleDeletePhone(id) {
    setProjectState(prevState => {
      return prevState.filter(phone => phone.id !== id);
    });
  }

  return (
    <div className="min-w-96 w-1/2 mx-auto flex flex-col items-center bg-stone-200  py-10 rounded-md">
      <h1 className="text-stone-700 text-6xl  font-bold text-center">
        Phonebook
      </h1>
      <FormNewPhone phoneList={projectState} onAddPhone={handleAddPhone} />
      <Contacts phoneList={projectState} onDelete={handleDeletePhone} />
    </div>
  );
};
