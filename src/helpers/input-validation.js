export function validatePhoneNumber(phoneNumber) {
  const phoneRegex =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  return phoneRegex.test(phoneNumber);
}

export function validateName(name) {
  const nameRegex =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  return nameRegex.test(name);
}
