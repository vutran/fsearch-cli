#!/usr/bin/env node
const meow = require('meow');
const fsearch = require('fsearch');

const cli = meow(`
  Usage
    $ fsearch <input>

  Examples
    $ fsearch Atom
    /Applications/Atom.app
`);

if (cli.input.length === 0) {
	console.error('Empty input.');
	process.exit(1);
}

fsearch(cli.input.join(' ')).then(console.log);
