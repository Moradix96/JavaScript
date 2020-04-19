const url = location.pathname;
console.log('pathname: ' + url);

const routes = {
    '/': 'home',
    '/about': 'about',
    "/user/(\\d+)": 'userProfile',
    '/chat/(\\d+)': 'chat'
};

let res=false;
for (let route in routes) {
    res = url.match('^' + route + '$');
    if (res) {
        console.log('Match Found! ' + routes[route]);
        if (res.length === 2) {
            console.log('id=' + res[1]);
        }
        break;
    }
}
if(!res){
    console.log('Match NOT Found! Default');
}
