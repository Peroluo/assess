const getUrlQuery = () => {
  const url = window.location.search;
  let parmas = {};
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1);
    let strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      parmas[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  return parmas;
};
export default getUrlQuery;
