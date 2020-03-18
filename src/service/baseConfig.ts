let baseURL = `${window.location.protocol}//${window.location.hostname}:3000`;
if (window.location.hostname !== 'localhost') {
  baseURL = `${window.location.protocol}//${window.location.hostname}`;
}

const baseConfig = {
  baseURL,
  withCredentials: true,
};

export default baseConfig;
