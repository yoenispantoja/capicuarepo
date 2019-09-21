module.exports = {
  name: 'shared-toolbar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/toolbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
