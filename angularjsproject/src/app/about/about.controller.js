(function() {
  'use strict';

  angular
    .module('angularjsproject')
    .controller('AboutController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$http, $interval, $rootScope) {
    var vm = this;
    vm.myvalue=' ';
    vm.myobject=[{'name': 'jane','age':18 },{'name': 'joe','age':22 }];

    var reqbook= function (){
        $http({
          method: 'GET',
          url: 'http://localhost:8181/book/'
          }).then(function successCallback(response) {

        console.log(response.data);
      // console.log(url);
        vm.myvalue=response.data;

            }, function errorCallback(response) {

          console.log('error');
          alert('error api');

      });


    };

    // reqbook();

    var myinterval='';

    vm.showitem= function () {
      reqbook();
      myinterval = $interval(reqbook,5000);

    };

    vm.hideitem = function () {
      $interval.cancel(myinterval);

    };

     $rootScope.$on("$stateChangeStart",
    function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart');
        $interval.cancel(myinterval);
    });

  }
})();
