import { AsyncStorage } from 'react-native';

const TOKEN_KEY = 'token_key';
const USER_KEY = 'user_key';

export const handleLogin = data => {
  try {
    await setStorageData(data);
  } catch (error) {
    throw new Error(error);
  }
};

export const setStorageData = async data => {
	try {
    let {token, user} = data;
    let data_ = [[USER_KEY, JSON.stringify(user)], [TOKEN_KEY, token]];
    await AsyncStorage.multiSet(data_);
	} catch (error) {
		throw new Error(error);
	}
};

export const getStorageData = async () => {
	try {
    let token = await AsyncStorage.getItem(TOKEN_KEY);
    let user = await AsyncStorage.getItem(USER_KEY);
    if (token !== null && user!== null) return {token, user:JSON.parse(user)};
    else return null;
	} catch (error) {
		throw new Error(error);
	}
};
