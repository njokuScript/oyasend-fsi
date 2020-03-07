import React from 'react';

//API URL
export const API_URL = 'http://oya-send.herokuapp.com/api';

//API End Points
export const REGISTER = `${API_URL}/users/signup`;
export const LOGIN = `${API_URL}/users/signin`;
export const UPLOAD_IMAGE = `${API_URL}/face/add`;
export const DETECT_IMAGE = `${API_URL}/face/identify`;
