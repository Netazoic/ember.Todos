import DS from 'ember-data';

export default DS.LSAdapter.extend({
	namespace: 'todos-emberjs',


	createRecord(store, type, snapshot) {
		// rather then doing an ajax, just echo back the data that was created
		var record = snapshot.record;
		var json = record.toJSON();

		// assign a unique ID like the server would
		json.id = Date.now();

		// return a value or a promise
		return json;
	},

	updateRecord(store, type, snapshot) {
		// rather then doing an ajax, just echo back the data that was updated
		var record = snapshot.record;
		var json = record.toJSON();

		json.id = record.id;

		return json;
	},

	deleteRecord(store, type, snapshot) {
		var record = snapshot.record;

		return { id: record.id };
	}
});