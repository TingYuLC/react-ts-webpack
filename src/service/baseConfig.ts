let baseURL = `${window.location.protocol}//${window.location.hostname}:3000/api`;
if (window.location.hostname !== 'localhost') {
  baseURL = `${window.location.protocol}//${window.location.hostname}/api`;
}

const baseConfig = {
  baseURL,
  withCredentials: true,
};

export default baseConfig;
