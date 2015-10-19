angular.module('birthdays').controller('AccountCtrl', AccountController)

function AccountController($scope) {
	$scope.settings = {
    enableFriends: true
  };
}