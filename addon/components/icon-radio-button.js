import Ember from 'ember';
import layout from '../templates/components/icon-radio-button';
import _isEqual from 'lodash/isEqual';
const {Component,computed,set,isPresent,get,$} = Ember;
const {alias,empty,notEmpty,or,and,not,equal} = computed;




export default Component.extend({
  layout,
  icon: "fa-check-circle",
  classNames: ["ember-icon-radio-button"],
  click: function(){
    this.setValue();
  },
  classNameBindings: ["checked","wrapper-class"],
  hasBeenChecked:false, 
  isOther: false,
  isNotOther: not("isOther"),
  otherInputClasses: computed("other-class",function(){
    let result = "ember-icon-radio-button-other";
    let otherClass = get(this,"other-class");
    if(isPresent(otherClass)){
      result += ` ${otherClass}`;
    }
    return result;
  }),
  sameAsModelValue: computed("modelValue","value",function(){
    let {value,modelValue} = this.getProperties("value","modelValue")
    if(typeof(value) === "object")
      return _isEqual(value,modelValue)
    else
      return get(this,"modelValue") === get(this,"value");
  }),
  isStandardOptionNotSelected: not("isStandardOptionSelected"),
  isCustomChecked: and("isStandardOptionNotSelected","hasBeenChecked"),
  isNormalChecked: and("isNotOther","sameAsModelValue"),
  checked: computed("isNormalChecked","isCustomChecked",function(){
    let isOther = get(this,"isOther");
    return isOther ? get(this,"isCustomChecked") : get(this,"isNormalChecked");
  }),

  actions:{
    selectValue(){
      this.setValue();
    }
  },
  setValue(){
    if(get(this,"isOther")){
      set(this,"hasBeenChecked",true),
        set(this,"modelValue",get(this,"customValue"));
      this.$("input").focus();
    }
    else{
      this.set("modelValue",get(this,"value"));
    }
    this.attrs.onSetValue();
  }
});
