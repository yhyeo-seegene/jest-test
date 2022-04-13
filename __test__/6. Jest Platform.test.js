// jest-changed-files
const {getChangedFilesForRoots} = require('jest-changed-files');

test('print the set of modified files since last commit in the current repo', () => {
  getChangedFilesForRoots(['./'], {
    lastCommit: true,
  }).then(result => console.log(result.changedFiles));
});

// jest-diff
const {diff} = require('jest-diff');
test('print diff', () => {
    const a = {a: {b: {c: 5}}};
    const b = {a: {b: {c: 6}}};
    const result = diff(a, b);
    console.log(result);
});

// jest-docblock
const {parseWithComments} = require('jest-docblock');
test('prints an object with two attributes: comments and pragmas.', () => {
  const code = `
  /**
   * This is a sample
   *
   * @flow
   */

   console.log('Hello World!');
  `;
  const parsed = parseWithComments(code);
  console.log(parsed);
});

// jest-get-type
const {getType} = require('jest-get-type');
test('type of the value passed as argument.', () => {
  const array = [1, 2, 3];
  const nullValue = null;
  const undefinedValue = undefined;
  // prints 'array'
  console.log(getType(array));
  // prints 'null'
  console.log(getType(nullValue));
  // prints 'undefined'
  console.log(getType(undefinedValue));
});

// jest-validate
const {validate} = require('jest-validate');
test('an example configuration and other options. The return value is an object with two attributes', () => {
  const configByUser = {
    transform: '<rootDir>/node_modules/my-custom-transform',
  };
  const result = validate(configByUser, {
    comment: '  Documentation: http://custom-docs.com',
    exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
  });
  console.log(result);
});

// pretty-format
const {format: prettyFormat} = require('pretty-format');
test('pretty-format', () => {
  const val = {object: {}};
  val.circularReference = val;
  val[Symbol('foo')] = 'foo';
  val.map = new Map([['prop', 'value']]);
  val.array = [-0, Infinity, NaN];

  console.log(prettyFormat(val));
});
