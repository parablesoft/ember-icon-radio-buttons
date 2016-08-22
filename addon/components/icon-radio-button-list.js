import Ember from 'ember';
import layout from '../templates/components/icon-radio-button-list';

const {get,computed,Component} = Ember;

export default Component.extend({
  layout,
	options:[],
	classNames: ["ember-icon-radio-buttons"],
	icon: "fa-check-circle",
	mappedOptions: computed("options",function(){
		let options = get(this,"options");
		return options.map(function(item){
			if(typeof item === "string" || typeof item === "number"){
				return {value: item, displayValue: item};
			}
			else{
				return item;
			}
		});
	}),
});
