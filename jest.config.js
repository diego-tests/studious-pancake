module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['<rootDir>/src/components/**/*.spec.{js,vue}', '<rootDir>/src/store/**/*.spec.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  ],
}
