module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended'
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'import',
    'react'
  ],
  'rules': {
    // Styling
    'array-bracket-spacing': [1, 'always'],
    'comma-dangle': [1, 'never'],
    'eqeqeq': [2, 'smart'],
    'jsx-quotes': [1, 'prefer-double'],
    'key-spacing': [1, {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': [1, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    'object-curly-spacing': [1, 'always'],
    'object-property-newline': 1,
    'quotes': [1, 'single', 'avoid-escape'],
    'semi': [1, 'never'],

    // Best Practices
    'no-console': 0,
    'no-unused-vars': 1,

    // React
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-space-before-closing': [1, 'never'],
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-multi-comp': 1,
    'react/prop-types': 1,

    // Import
    'import/unambiguous': 0
  },
  'settings': {
    'import/resolver': 'webpack'
  }
}
