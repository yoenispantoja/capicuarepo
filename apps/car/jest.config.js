module.exports = {
  name: 'car',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/car',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
