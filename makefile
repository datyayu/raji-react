run-server:
	node index.js

tests:
	# NODE_ENV=production allows to ignore the hrme preset.
	NODE_ENV=production ava

watch-tests:
	NODE_ENV=production ava --watch
