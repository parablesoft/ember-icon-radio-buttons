# ember-icon-radio-buttons
This addon allows you to pass options in to act as radio buttons with font-awesome icons. This is a work in progress.

## Installation
ember install ember-icon-radio-buttons

## Examples
### Simple Usage
**In your controller:**

```javascript
import Ember from "ember";
export default Ember.Controller.extend({
	subject: Ember.Object.extend({
		package: 1,
	}),
	options: [1,2,3],
});
```


**In your template:**

```handlebars
{{icon-radio-button-list modelValue=subject.package options=options}}
```

### Advanced Usage