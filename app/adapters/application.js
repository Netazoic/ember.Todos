import DS from 'ember-data';

export default DS.LSAdapter.extend({
	namespace: 'ember.Todos',


	createRecord(store, type, snapshot) {
	    //sync with the REST back-end
	    // Then . . .
	    // Maybe use orbit.js?
	    return this._super(store,type,snapshot);
	}

});