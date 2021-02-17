module.exports = {
  'src/**.{ts,tsx,js,jsx,vue}': [
    'eslint -c .eslintrc.js',
  ],
  '*.scss': ['stylelint --config .stylelintrc.json'],
}
