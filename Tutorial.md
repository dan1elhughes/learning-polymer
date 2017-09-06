# Polymer 2 Tutorial

_Matt Langley and Dan Hughes_

## App scaffolding

- Install polymer-cli globally
	- `npm install --global polymer-cli`
	- Installs the global Polymer application etc.
- `polymer init`
- Choose `polymer-2-application`
- Add `bower_components/` to `/.gitignore`
- Create `todo-input` element
	- Add the `PolymerElements/paper-input` element to dependencies: `bower install --save PolymerElements/paper-input`
	- Create `/src/todo-input.html`
	- Include `paper-input` and `polymer-element` as HTML imports
	- Create a `<dom-module>` with `<template>` and `<script>` elements
	- Add your custom HTML to `<template>`
	- Add the standard Polymer custom element definition to `<script>`
- Replace `<polymer-demo-app>` import in index with `<todo-input>`
- Replace `<polymer-demo-app>` tag in index with `<todo-input>`
