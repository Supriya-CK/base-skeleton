import axios from 'axios';
import Vue from 'vue';

import constants from '../../constants';
import Login from '../App';

const state = () => ({
  error: null,
  isLoggedIn: false,
  token: window.localStorage.getItem(constants.KEY_LEARNAPP_TOKEN),
  email: '',
  isNewUser: null,
  hasLoggedInViaEmail: window.localStorage.getItem(constants.EMAIL_LOGIN) || false,
});

const getters = {
  getToken: vState => vState.token,
};

const mutations = {
  error(vState, error) {
    Vue.set(vState, 'error', error);
  },

  isLoggedIn(vState, isLoggedIn) {
    Vue.set(vState, 'isLoggedIn', isLoggedIn);
  },

  hasLoggedInViaEmail(vState, hasLoggedInViaEmail) {
    Vue.set(vState, 'hasLoggedInViaEmail', hasLoggedInViaEmail);
  },

  email(vState, email) {
    Vue.set(vState, 'email', email);
  },

  newUserStatus(vState, isNewUser) {
    Vue.set(vState, 'isNewUser', isNewUser);
  },

  setToken(vState, token) {
    Vue.set(vState, 'token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clearToken(vState) {
    Vue.delete(vState, 'token');
    axios.defaults.headers.common.Authorization = null;
  },
};

const actions = {
  async doLogin({ commit }, { email, password }) {
    const data = Login({ commit }, { email, password });
    const {
      is_new_user: isNewUser,
    } = data;
    commit('PermaCache/setStorage', { type: 'KEY_LEARNAPP_TOKEN', content: data.token }, { root: true });
    if (isNewUser) {
      commit('PermaCache/setStorage', { type: 'EMAIL_LOGIN', content: true }, { root: true });
    }
    commit('setToken', data.token);
    commit('newUserStatus', isNewUser);
    commit('isLoggedIn', true);
    return true;
  },
  async doLogout({ commit }) {
    commit('PermaCache/clearStorage', { type: 'KEY_LEARNAPP_TOKEN' }, { root: true });
    commit('clearToken');
    commit('isLoggedIn', false);
    commit('newUserStatus', null);
    return true;
  },
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
