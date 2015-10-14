angular.module('birthdays').service('BirthdayService', BirthdayService)

function BirthdayService() {

	var birthdays = [{
		id: 0,
		date: '1990-04-16T00:00:00Z',
		person: {
			name: 'Jack Collins'
		},
		reminders: [{
			id: 0,
			event_id: 0, // Polymorphic belongs to both birthdays and anniversaries
			seconds_before: 86400 // 1 day before
		}, {
			id: 1,
			event_id: 0,
			seconds_before: 604800 // 1 week before
		}]
	}, {
		id: 1,
		date: '1989-11-28T00:00:00Z',
		person: {
			name: 'Annie Collins'
		},
		reminders: [{
			id: 2,
			event_id: 1,
			seconds_before: 18144000 // 1 month before
		}]
	}];

	return {
		all: function() {
			return birthdays;
		},

		remove: function(birthday) {
			birthdays.splice(birthdays.indexOf(birthday), 1)
		},

		get: function(birthdayId) {
			for (var i = 0; i < birthdays.length; i++) {
				if (birthdays[i].id === parseInt(birthdayId)) {
					return birthdays[i]
				}
			}
		}
	};
};