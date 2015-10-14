angular.module('birthdays').controller('EventsCtrl', EventsController)

function EventsController($scope, BirthdayService) {
	$scope.birthdays = BirthdayService.all();
	console.log("Birthdays: ", $scope.birthdays);
	$scope.remove = function(birthday) {
		BirthdayService.remove(birthday);
	};
};