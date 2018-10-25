module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/assetsTransformer.js',
  },
  testRegex: '\\.spec\\.(t|j)sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,ts}',
    'server/**/*.{js,jsx,ts,ts}',
  ],
  coverageDirectory: './coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@faster/(.*)': '<rootDir>/src/$1',
  },
};
