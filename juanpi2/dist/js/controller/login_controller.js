angular.module("myapp").controller("login",["$scope",function(e){e.message=["卷皮账号登","手机快捷登录"],e.index=0,e.placeHolder=["手机号/邮箱/用户名","密码"],e.login=function(l){e.index=l,0==l?(e.placeHolder[0]="手机号/邮箱/用户名",e.placeHolder[1]="密码"):1==l&&(e.placeHolder[0]="请输入手机号码",e.placeHolder[1]="请输入验证码")},e.changeColor=function(l){return e.index==l?"changeColor":""}}]);