require.config({
    // baseUrl:'lib'//data-main文件所在的文件夹
    paths: {
        //这里的路径基于baseUrl
        //别名:真实路径
        "jquery": "../assets/jquery.min",
        'list': 'list',
        "top": "top",
        "details": 'details',
        'index': 'index',
        'register': 'register',
        'login': 'login',
        'common': 'common',
        'car': 'car',
        'home': 'home',
        'header': 'header',
        'gdszoom': '../assets/jquery-gdszoom/jquery-gdszoom',
        'hbcarousel': '../assets/jquery-gdszoom/jquery.hbcarousel'
    },
    shim: {
        // 表示gdszoom依赖jquery
        "gdszoom": ["jquery"],
        "hbcarousel": ["jquery"],
        
    }

});
require(['jquery','list','details','register','login','car','common'],function($,list,details,register,login,car,common){
    var path = location.pathname;
    console.log(path)
    // if(path == '/src/html/list.html'){
    //      //商品列表页面
    //     list.init();
    //  }else if(path == '/src/html/details.html'){
    //     details.init();
    // }else if(path == '/src/html/home.html'){
    //     home.init();
    // }
    // else if(path == '/src/html/index.html'){
    //     index.init.init();
    // }
    // else if(path == '/src/html/register.html'){
    //     register.init();
    // }else if(path == '/src/html/login.html'){
    //     login.init();
    // }else if(path == '/src/html/car.html'){
    //     car.init();
    // }
 })
