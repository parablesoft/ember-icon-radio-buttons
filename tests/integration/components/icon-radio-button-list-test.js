import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from "ember";


moduleForComponent('icon-radio-button-list', 'Integration | Component | icon radio button list', {
  integration: true
});


let options = ["Monthly","Quarterly","Bi-Annually","Annually"];
let Subject = Ember.Object.extend({
});

let instance = Subject.create({
	subscription: "Monthly"
});


test("it has the proper css class",function(assert){
  this.render(hbs`{{icon-radio-button-list}}`);
	let list = this.$().find(".ember-icon-radio-buttons");
	assert.equal(list.length,1);
});

test("it has the right number of options",function(assert){
	this.set("options",[1,2,3]);
  this.render(hbs`{{icon-radio-button-list options=options}}`);
	let checkboxes = this.$().find(".ember-icon-radio-button");
	assert.equal(checkboxes.length,3);
});



test("it has a selected option based upon the value of the model's property passed in",function(assert){
	this.set('options',options);
	this.set("modelValue",instance.subscription);
  this.render(hbs`{{icon-radio-button-list modelValue=modelValue options=options}}`);
	let checkboxes = this.$().find(".ember-icon-radio-button");
	let selectedCheckbox = this.$().find(".ember-icon-radio-button.checked");
	assert.equal(checkboxes.length,4);
	assert.equal(selectedCheckbox.length,1);
	assert.equal(selectedCheckbox.text().trim(),"Monthly");
});

test("it changes options",function(assert){
	this.set('options',options);
	this.set("modelValue",instance.subscription);
  this.render(hbs`{{icon-radio-button-list modelValue=modelValue options=options}}`);
	let selectedCheckbox = this.$().find(".ember-icon-radio-button.checked");
	assert.equal(selectedCheckbox.text().trim(),"Monthly");
	this.set("modelValue","Annually");
	selectedCheckbox = this.$().find(".ember-icon-radio-button.checked");
	assert.equal(selectedCheckbox.text().trim(),"Annually");
});

test("it wraps all the items with a specified class",function(assert){
	this.set('options',options);
	this.set("wrapperClass","col-md-4");
  this.render(hbs`{{icon-radio-button-list wrapper-class=wrapperClass options=options}}`);
	let items = this.$().find(".col-md-4");
	assert.equal(items.length,4);
});

test("it sets the icon for the wrapped-items",function(assert){
	this.set('options',options);
	this.set("icon","fa-check-square");
  this.render(hbs`{{icon-radio-button-list icon=icon options=options}}`);
	let items = this.$().find("i.fa-check-square");
	assert.equal(items.length,4);
});
