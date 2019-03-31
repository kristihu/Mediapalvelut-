const apiUrl = 'http://media.mw.metropolia.fi/wbma/media/';
const url =  'http://media.mw.metropolia.fi/wbma/login/';
const getAllMedia = () => {
 return fetch(apiUrl).then(response => {
    return response.json();
  }).then(json => {
    console.log(json);
    return Promise.all(json.map(pic => {
      return fetch(apiUrl + pic.file_id).then(response => {
        return response.json();
      });
    })).then(pics => {
      console.log(pics);
      return pics;
    });
  });
};

const login = (username, password) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password})
  }).then(response => response.json()).then(json=> {
    console.log(json) ;

    if (json.token){
      return json;
    } else {
      console.log('error');
    }


  });
};









export {getAllMedia};
export {login};