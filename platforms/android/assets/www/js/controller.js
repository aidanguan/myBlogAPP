/**
 * Created by Aidan on 14-4-28.
 */
angular.module('starter', ['ionic', 'ngSanitize'])

.controller('ArticleCtrl',function ($scope, $http, $templateCache, $sce){
        $scope.method ='GET';
        $scope.url = 'http://aidanguan.synology.me/api/articles.json';
        function loadfeed(){
            $http({method: $scope.method, url: $scope.url}).
                success(function(data, status) {
                    $scope.status = status;
                    $scope.data = data;
                    console.log($scope.data);
                    $scope.trustedHtml = $sce.trustAsHtml(data);



                }).
                error(function(data, status) {
                    $scope.data = data || "Request failed";
                    $scope.status = status;
                    console.log($scope.status);
                });
        };
          $scope.load = loadfeed ;

      loadfeed();

});




