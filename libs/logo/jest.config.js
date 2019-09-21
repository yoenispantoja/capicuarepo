module.exports = {
  name: 'logo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/logo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
