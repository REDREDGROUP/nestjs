/** @type {import("syncpack").RcFile} */
const config = {
  sortAz: ['scripts', 'contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions'],
  sortFirst: [
    'name',
    'private',
    'description',
    'version',
    'license',
    'main',
    'types',
    'type',
    'module',
    'homepage',
    'repository',
    'bugs',
    'keywords',
    'files',
    'author',
    'maintainers',
    'bin',
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'engines',
  ],
  source: ['package.json', 'packages/**/package.json'],
  semverRange: '',
  dependencyTypes: ['dev', 'prod', 'peer', 'pnpmOverrides'],
  versionGroups: [
    {
      dependencies: ['@types/node'],
      packages: ['**'],
      pinVersion: '20.9.0',
    },
  ],
};
module.exports = config;
