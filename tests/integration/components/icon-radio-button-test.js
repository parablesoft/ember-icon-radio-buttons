
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('icon-radio-button', 'Integration | Component | icon radio button', {
  integration: true
});

test("it has the proper css class",function(assert){
  this.render(hbs`{{icon-radio-button}}`);
	let rb = this.$().find(".ember-icon-radio-button");
	assert.equal(rb.length,1);
});
test("it has the proper html",function(assert){

	this.set("value","Monthly");
  this.render(hbs`{{icon-radio-button value=value}}`);
	let rb = this.$(".ember-icon-radio-button a").html();
	let expected = '<i class="ember-icon-radio-button-icon fa fa-check-circle"></i> <span class="ember-icon-radio-button-label">Monthly</span>';
	assert.equal(rb.trim(),expected);
});

test("it becomes selected when you check it",function(assert){
	this.set("value","Monthly");
	this.set("modelValue","Foo");
  this.render(hbs`{{icon-radio-button modelValue=modelValue value=value}}`);
	let checked = this.$().find(".ember-icon-radio-button.checked");
	assert.equal(checked.length,0);
	this.$().find("a").click();
	checked = this.$().find(".ember-icon-radio-button.checked");
	assert.equal(checked.length,1);
});

test("it allows an extra class to be applied",function(assert){
	this.set("wrapperClass","col-md-4");
  this.render(hbs`{{icon-radio-button wrapper-class=wrapperClass}}`);
	let wrapped = this.$().find(".col-md-4");
	assert.equal(wrapped.length,1);
});

test("it allows for a different icon to be configured",function(assert){
	this.set("icon","fa-check-square");
  this.render(hbs`{{icon-radio-button icon=icon}}`);
	let icon = this.$().find("i.fa-check-square");
	assert.equal(icon.length,1);
});
