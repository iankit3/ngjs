var angular = require("angular")
var myCtrl = require("./app/controllers/myCtrl")
var ngMaterial = require("angular-material")

var app = angular.module("app",['ngMaterial']);

app.controller("myCtrl", myCtrl)

