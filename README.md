github-dashboard
================

A one glance view of your activity on GitHub. Demonstrates using Ember.js, Bootstrap, and Grunt together.

Uses the GitHub API for data, so you can't use a file:// URL (because of the same-origin policy). Grunt script includes a web server to use for development, which works because GitHub's API supports CORS.

### Setup

1. Install [Node.js](http://nodejs.org/)
2. Install [Grunt](http://gruntjs.com/)

		npm install -g grunt-cli
		
3. Install Node modules

		npm install

4. Build - This compiles everything, starts a webserver on port 9001, and watches all files for changes.

		grunt
		
5. Open [http://localhost:9001](http://localhost:9001) in a web browser.
