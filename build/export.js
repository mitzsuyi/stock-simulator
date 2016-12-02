// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    'jspm_packages/system.js',
    'jspm_packages/system.js.map',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'styles/styles.css'
  ],
  'normalize': [
     [

      'material-design-icons', [
        '/iconfont/material-icons.css',
        '/iconfont/**/*'
      ]
    ],

    [

      'humane-js', [
       '/themes/libnotify.css',
      ]
    ],

    [

      'materialize-css', [
        '/dist/css/materialize.css',
        '/dist/fonts/**/*'
      ]
   ] 
   ]  
};
