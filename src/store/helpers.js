import axios from 'axios';

async function request({ url, data, method }) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios({ method, url, data });
      if (res.data && res.data.success) {
        resolve(res.data.data);
      } else {
        reject(res.data.error);
      }
    } catch (e) {
      reject(e);
    }
  });
}

async function get(url, { commit }) {
  return request({ method: 'get', url }, { commit });
}

async function post(url, data, { commit }) {
  return request({ method: 'post', url, data }, { commit });
}

async function put(url, data, { commit }) {
  if (data) {
    return request({ method: 'put', url, data }, { commit });
  }
  return request({ method: 'put', url }, { commit });
}

async function del(url, { commit }) {
  return request({ method: 'delete', url }, { commit });
}

export {
  request,
  get,
  post,
  put,
  del,
};
