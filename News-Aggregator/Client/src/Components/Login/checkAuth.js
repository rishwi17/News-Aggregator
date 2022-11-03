const jwt = require('jsonwebtoken')

const checkAuth = ()=>{
    if (!window.localStorage.getItem('token'))
        return false;
    

    else{
        const token = window.localStorage.getItem('token'); 
        var decode = jwt.verify(token, 'randomString');

        if (!decode){
            return false;
        }

        return decode;

        

    } 
   }

export default checkAuth;
