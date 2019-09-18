module.exports = {
  name: 'igui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/igui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
