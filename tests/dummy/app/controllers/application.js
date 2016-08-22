import Ember from "ember";
//import computed from 'ember-computed-decorators';
//import {  } from 'ember-computed-decorators';
const {Controller} = Ember;
export default Controller.extend({
	subject: Ember.Object.extend({
		package: null,
	}),
	options: [1,2,3]
});
