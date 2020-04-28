const cookieExists = Cookies.get('username4sign');

if (!cookieExists) {
   window.location = "/login";
}