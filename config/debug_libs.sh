#!/bin/sh
# Move jquery and bower library into public assets to be loaded separate from the vendor.js file.
# This is for better debugging behavior
# The ember-cli brocfile must be edited to not include these libraries in the big vendor.js rollup.
# See node_modules/ember-cli/lib/brocolli/ember-app.js

cp -r bower_components/jquery public/assets
cp -r bower_components/ember public/assets

cp node_modules/ember_cli/lib/brocolli/ember-app.js config/ember-app.orig.js
cp config/ember-app.debug.js node_modules/ember-cli/lib/brocolli/ember-app.js
