(function() {
  'use strict';

  angular
    .module('angularjsproject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
