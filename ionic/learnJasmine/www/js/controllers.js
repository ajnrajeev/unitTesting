angular
  .module('learnJasmineApp.ctrls', [])
  .controller('homeCtrl', function($scope){
    $scope.options = {
      loop: true,
      speed: 500,
    }
    $scope.data = {};
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    })

    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };
  })