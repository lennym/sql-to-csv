const { BufferListStream } = require('bl');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const sql2csv = require('../');

describe('sql-to-csv', () => {

  it('converts the table text into csv', done => {

    const expected = fs.readFileSync(path.resolve(__dirname, './output.csv'));

    fs.createReadStream(path.resolve(__dirname, './input.txt'))
      .pipe(sql2csv())
      .pipe(BufferListStream((err, actual) => {
        if (err) {
          return done(err)
        }
        try {
          assert.equal(actual.toString(), expected.toString());
          done();
        } catch (e) {
          done(e);
        }
      }));

  });

});