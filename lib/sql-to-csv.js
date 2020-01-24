const es = require('event-stream');
const split = require('split');
const through = require('through');
const csv = require('csv-stringify');

module.exports = () => {

  const parseLine = line => {
    line = line.toString();
    // ignore dividing line in form `--------+--------`
    if (line.match(/^(\-)*\+(\-)*$/)) {
      return;
    }
    if (!line.trim()) {
      return;
    }
    return line.split('|').map(s => s.trim());
  };

  return es.pipe(
    split(),
    through(function (chunk) {
      const out = parseLine(chunk);
      out && this.queue(out);
    }),
    csv()
  );

};
