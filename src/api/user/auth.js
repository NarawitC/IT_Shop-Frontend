import axios from '../../config/axios';

import React from 'react';

export const userSignIn = async (input) => {
  return await axios.post('auth/signIn', input);
};

export const userSignUp = async (input) => {
  return await axios.post('auth/signUp', input);
};
