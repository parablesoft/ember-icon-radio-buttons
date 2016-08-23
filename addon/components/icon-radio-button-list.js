import Ember from 'ember';
import layout from '../templates/components/icon-radio-button-list';

const {get,computed,Component} = Ember;

export default Component.extend({
  init() {
		this._super(...arguments);
		let field = this.get('field');
		Ember.defineProperty(this, 'modelValue', computed.alias(`model.${field}`));
  },
  layout,
	options:[],
	classNames: ["ember-icon-radio-buttons"],
	icon: "fa-check-circle",
	mappedOptions: computed("options",function(){
		let options = get(this,"options");
		let result = Ember.A();
		options.map(function(item){
			if(typeof item === "string" || typeof item === "number"){
				result.pushObject({value: item, displayValue: item});
			}
			else{
				result.pushObject(item);
			}
		});
		return result;
	}),

	isStandardOptionSelected: computed("modelValue",function(){
		let result = false;
		let modelValue = get(this,"modelValue");
		return get(this,"mappedOptions").any(function(item){
			return get(item,"value") == modelValue;
		});
	}),
});
