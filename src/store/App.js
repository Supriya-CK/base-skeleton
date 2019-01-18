import { post } from './helpers';

async function Login({ commit }, { email, password }) {
  const data = await post('/auth/login', { email, password }, { commit });
  return data;
}

export default {
  Login,
};
