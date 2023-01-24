module.exports = {
  extends: [
    'react-app'
  ],
  rules: {
    'react/jsx-pascal-case': ['error', { allowNamespace: true }],
    'no-mixed-operators': 'off',
    'jsx-a11y/alt-text': [ 2, {
      'elements': [ 'img', 'object', 'area', 'input[type=\"image\"]' ],
      'img': ['Media', 'animated.img'],
    }],
  }
}