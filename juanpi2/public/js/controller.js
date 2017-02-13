//路由
	var app = angular.module('myapp',['ngRoute']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{templateUrl:'html/indexDetail.html',controller:'indexcon'})
		.when('/home',{templateUrl:'html/home.html',controller:'homecon'})
		.when('/global',{templateUrl:'html/global.html'})
		.when('/shopcar',{templateUrl:'html/shopcar.html'})
		.when('/index_sec',{templateUrl:'html/index_sec.html',controller:'index_seccon'})
		.when('/mine',{templateUrl:'html/mine.html'})
		.when('/mine_about',{templateUrl:'html/mine_about.html'})
		.when('/login',{templateUrl:'html/login.html'})
		.when('/regist',{templateUrl:'html/regist.html'})		
		.otherwise({redirectTo:'/'});
	}]);