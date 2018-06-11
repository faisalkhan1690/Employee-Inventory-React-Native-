import { USER_NAME, USER_PHONE_NUMBER,USER_SHIFT } from './Constants';

export const nameState = (name) => {
    return{
      type: USER_NAME,
      name: name
  };
};

export const phoneNumberState = (phoneNumber) => {
  return{
    type: USER_PHONE_NUMBER,
    phoneNumber: phoneNumber
  };
};

export const shiftState = (shift) => {
  return{
    type: USER_SHIFT,
    shift: shift
  };
};
