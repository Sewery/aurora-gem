const userAuthenticated = ():boolean => {
    if( localStorage.getItem('refreshToken')){
        return true;
    }
    return false;

}

export default userAuthenticated;