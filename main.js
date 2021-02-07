/*#
  MapSCII - Terminal Map Viewer
  by Michael Strassburger <codepoet@cpan.org>
  Discover the planet in your console!

  This scripts boots up the application.

  TODO: params parsing and so on
#*/
'use strict';
import "regenerator-runtime/runtime";
const { Terminal } = require('xterm');
const config = require('./src/config');
const Mapscii = require('./src/Mapscii');
var term = new Terminal();
term.open(document.getElementById('terminal'));

const options = {
  initialZoom: 0,
  size: {
    width: 75,
    height: 46
  },
  output : term,
  persistDownloadedTiles : false
};

const mapscii = new Mapscii(options);
mapscii.init().catch((err) => {
  console.error('Failed to start MapSCII.');
  console.error(err);
});
