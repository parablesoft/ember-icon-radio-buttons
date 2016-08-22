import Ember from "ember";
const {Controller} = Ember;
export default Controller.extend({
	subject: Ember.Object.extend({
		package: 1,
	}),
	options: [1,2,3],
	optionsAdvanced: [
		{value: "1", displayValue: "1"},
		{value: "2", displayValue: "2"}
	]
});
