run-server:
	node index.js

tests:
	# NODE_ENV=production allows to ignore the hrme preset.
	NODE_ENV=production ./node_modules/.bin/ava --tap | ./node_modules/.bin/tap-spec
