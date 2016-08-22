# ember-icon-radio-buttons
This addon allows you to pass options in to act as radio buttons with font-awesome icons. This is a work in progress.

## Installation
ember install ember-icon-radio-buttons


## Examples

### Simple Usage


In your controller
import Ember from "ember";
const {Controller} = Ember;
export default Controller.extend({
	subject: Ember.Object.extend({
		package: 1,
	}),
	options: [1,2,3],
});

In your template
{{icon-radio-button-list 
wrapper-class="col-md-4"
	modelValue=subject.package
	options=options}}

