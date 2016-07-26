/* jshint node: true */
// jscs: disable
'use strict';

module.exports = {
  name: 'ember-l10n',

  isDevelopingAddon: function() {
    // @see: https://ember-cli.com/extending/#link-to-addon-while-developing
    return false; // Set this to true for local development
  },

  includedCommands: function() {
    return {
      'l10n:install': require('./lib/commands/install'),
      'l10n:extract': require('./lib/commands/extract'),
      'l10n:convert': require('./lib/commands/convert'),
      'l10n:sync': require('./lib/commands/sync')
    };
  },

  included: function(app) {
    this._super.included(app);

    var bowerDirectory = app.bowerDirectory || 'bower_components';

    this.import(bowerDirectory + '/gettext.js/dist/gettext.min.js', {
      exports: {
        'i18n': [
          'default'
        ]
      }
    });
  }
};
