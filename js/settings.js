define([
	'lib/storage'
], function(storage) {
	return {
		settings: 	{
						"app.lang": 		"de",
                        "app.calendar":     "usp",
                        "app.club":         "USP St. Pölten",
						// User
                        "user.club":		"usp"
					},
		read: function(property) {
			return storage.getObject("settings." + property) || this.settings[property];
		},
		write: function(property, value) {
			storage.setObject("settings." + property, value);
		}
	}
});

