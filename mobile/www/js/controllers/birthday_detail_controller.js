angular.module('birthdays').controller('BirthdayDetailCtrl', BirthdayDetailController)

function BirthdayDetailController($scope, $stateParams, BirthdayService) {
	$scope.birthday = BirthdayService.get($stateParams.birthdayId);
};