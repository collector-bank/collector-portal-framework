/**
 * This module is needed to compile react with storybook
 */

module.exports = {
    stories: ['../**/*.stories.js'],
    addons:
    [
      '@storybook/preset-create-react-app',
      '@storybook/addon-notes/register',
      '@storybook/addon-knobs/register'
   ],
}