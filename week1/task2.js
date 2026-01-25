
///control statements////
let isLoggedIn=false
let isProfileCompleted=true
let message="";
if(!isLoggedIn)
{
    message="Please login"
}
else if(isLoggedIn&&!isProfileCompleted)
{
    message="Please complete your profile"
}
else{
    message="Welcome Back"
}
console.log(message)
