'use strict'

console.log('echo app:')

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input != null) {
		process.stdout.write(input);
	}
})


