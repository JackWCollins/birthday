angular.module('birthdays').controller('EventsCtrl', EventsController)

function EventsController($scope, BirthdayService) {
	$scope.birthdays = BirthdayService.all();
	$scope.remove = function(birthday) {
		BirthdayService.remove(birthday);
	};
};