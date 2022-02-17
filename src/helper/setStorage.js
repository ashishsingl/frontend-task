export function setStorage(_bool) {
  localStorage.setItem("isUser", _bool);
}

export const getStorage = () => {
  if (JSON.parse(localStorage.getItem("isUser"))) {
    return true;
  }
  return false;
};
