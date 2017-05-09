require.config({
    // baseUrl:'lib'//data-main文件所在的文件夹
    paths: {
        //这里的路径基于baseUrl
        //别名:真实路径
        "jquery": "../assets/jquery.min",
        'list': 'list',
        "top": "top",
        "details": 'details',
        'home': 'home',
        'register': 'register',
        'login': 'login',
        'common': 'common',
        'car': 'car',
        'home': 'home',
        'header':'header'
    },

});
require(['jquery', 'list', 'details', 'register', 'login', 'car','header', 'index'], functoin() {
    var path = location.pathname;
    console.log(path);
    if (path == '../src/html/list.html') {
        //商品列表页面
        list.init();
    } else if (path == '../src/html/details.html') {
        details();
    } else if (path == '../src/html/home.html') {
        home();
    } else if (path == '../src/html/index.html') {
        index();
    } else if (path == '../src/html/register.html') {
        register();
    } else if (path == '../src/html/login.html') {
        login();
    } else if (path == '../src/html/car.html') {
        car();
    }
})
