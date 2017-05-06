require.config({
    // baseUrl:'lib'//data-main文件所在的文件夹
    paths: {
        //这里的路径基于baseUrl
        //别名:真实路径
        "jquery": "../lib/jquery.min",
        'list': 'list',
        "top": "top",
        "details": 'details',
        'home': 'home',
        'register': 'register',
        'login': 'login',
        'common': 'common',
        'car': 'car',
        'home': 'home'
    },

});
require(['jquery', 'list', 'details', 'home', 'register', 'login', 'car', 'index'], functoin() {
    var path = location.pathname;
    console.log(path);
    if (path == '/fruitday/src/html/list.html') {
        //商品列表页面
        list.init();
    } else if (path == '/fruitday/src/html/details.html') {
        details();
    } else if (path == '/fruitday/src/html/home.html') {
        home();
    } else if (path == '/fruitday/src/html/index.html') {

    } else if (path == '/fruitday/src/html/register.html') {
        register();
    } else if (path == '/fruitday/src/html/login.html') {
        login();
    } else if (path == '/fruitday/src/html/car.html') {
        car();
    }
})
