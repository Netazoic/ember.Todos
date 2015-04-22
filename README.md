# ember.Todos

This is a variant on the todoMVC test application, using ember-cli/ember-cli-todos as a starting point.


See https://github.com/ember-cli/ember-cli-todos for the original project.

At the time of this project start, Ember is in a state of rapid transformation.  I suppose this is true of Ember for all of its life thus far.  But currently, at release 1.11.1 and 1.12.x beta, the project is shedding past conventions and diving wholesale into the ES6 components paradigm.  Thus, the code here is almost completely component based.  To see how much Ember conventions have changed in just a couple of years time, compare the code at the todomvc.org site: 

http://todomvc.com/examples/emberjs/

https://github.com/tastejs/todomvc

Among the significant changes:

	o	ember-cli has now officially replaced EAK as the prototype build tool
	o	handlebars is replaced by htmlbars as the default templating engine
	o	the ember-cli router is now the default router
	o	ember-data is offically adopted even as it inches towards the 1.0.0 release


All of this flurry of development and change is in anticipation of the 2.0 release, which is intended to mark the true break-over point to ES6/component architecture.  All of which is very exciting, but it also means the online documentation/examples are going stale at an amazing clip. Is this a good time to start up an "ambitious" project with Ember. I guess we shall see . . .

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

