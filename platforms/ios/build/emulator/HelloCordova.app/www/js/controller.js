/**
 * Created by Aidan on 14-4-28.
 */
angular.module('starter', ['ionic'])

.controller('ArticleCtrl',function ($scope, $http, $templateCache){
        $scope.method ='GET';
        $scope.url = 'http://aidanguan.synology.me/api/articles.json';

        $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                console.log($scope.data);
            }).
            error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
                console.log($scope.status);
            });

});

