/**
 * Created by Rohan on 8/14/2017.
 */
/// <reference path="Scripts/angular.js"/>

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $http) {


    $scope.doonclick = function () {

        $http({
            method: 'GET',
            url:    '/usr/view'
        }).then(function (response) {

            $scope.uinfo = response.data;
            console.log(response.data)
        })

    }


});

