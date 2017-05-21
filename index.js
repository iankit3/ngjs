var angular = require("angular");

var app = angular.module("app",[]);

app.controller("myCtrl", myCtrl)

function myCtrl(){
   this.name = "a";
}