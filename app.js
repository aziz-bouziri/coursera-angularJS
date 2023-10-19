(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.textColorClass = '';
        $scope.borderColorClass = '';
        $scope.message = "";
        $scope.checker = function () {
            if (!$scope.lunchItems) {
                $scope.message = "Please enter data";
                $scope.textColorClass = 'text-danger';
                $scope.borderColorClass = 'border-danger';
                return;
            }
            $scope.lunchItems = $scope.lunchItems.split(',');
            $scope.lunchItems = $scope.lunchItems.filter(function (lunchItem) {
                return lunchItem.trim() !== '';
            });
            if ($scope.lunchItems.length === 0) {
                $scope.message = "Please enter data";
                $scope.textColorClass = 'text-danger';
                $scope.borderColorClass = 'border-danger';
            } else if ($scope.lunchItems.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.textColorClass = 'text-success';
                $scope.borderColorClass = 'border-success';
            } else {
                $scope.message = "Too much!";
                $scope.textColorClass = 'text-success';
                $scope.borderColorClass = 'border-success';
            }
        }

    }
})();
