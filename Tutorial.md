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

## Accessing the input content

- Add the `PolymerElements/paper-button` element to dependencies
- Create a `static get properties()` method which defines `content` as a String
- Define an `_addItem()` method which logs the value of the `content` property
- Add a `<paper-button>` with an `on-click` event which calls `_addItem`
- Bind the `<paper-input>`'s `value` attribute to `{{content}}` (this is a two way binding between the HTML element and the class. When the content updates in one, it will be reflected in the other)

## Triggering an event from the input

- Dispatch a custom event from the `_addItem` method which reads the content property and calls `this.dispatchEvent` with a new Custom Event.

## Abstracting the input functionality

- Create a new Polymer element called `todo-app`, which contains the `<todo-input>`.
- Add an `on-add` attribute to the `<todo-input>` tag which calls a method `_onAdd` on our `todo-app`.
