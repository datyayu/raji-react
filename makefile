run-server:
	nodemon index.js

# NODE_ENV=production allows to ignore the hrme preset.
tests:
	NODE_ENV=production ava

watch-tests:
	NODE_ENV=production ava --watch
