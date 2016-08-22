import Ember from 'ember';
import layout from '../templates/components/icon-radio-button';

const {Component,computed,set,get} = Ember;

export default Component.extend({
  layout,
	icon: "fa-check-circle",
	classNames: ["ember-icon-radio-button"],
	checked: computed("value","modelValue",function(){
		let {value,modelValue} = this.getProperties("value","modelValue");
		return value === modelValue;
	}),
	classNameBindings: ["checked","wrapper-class"],
	actions:{
	  selectValue(){
			let value = get(this,"value");
			set(this,"modelValue",value);
	  }
	}

});
