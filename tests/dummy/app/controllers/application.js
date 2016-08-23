import Ember from "ember";
const {Controller,computed} = Ember;
const {alias} = computed;

export default Controller.extend({
	payment: alias("model"),
	optionsAdvanced: [
		{value: "1", displayValue: "$1"},
		{value: "2", displayValue: "$2"}
	]
});
