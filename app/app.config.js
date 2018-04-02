'use strict';

// angular.
//   module('phonecatApp').
//   config(['$locationProvider' ,'$routeProvider',
//     function config($locationProvider, $routeProvider) {
//       $locationProvider.hashPrefix('#');

//       $routeProvider.
//         when('/phones', {
//           template: '<phone-list></phone-list>'
//         }).
//         when('/phones/:phoneId', {
//           template: '<phone-detail></phone-detail>'
//         }).
//         otherwise('/phones');
//     }
//   ]);

  angular.module('phonecatApp').config(($stateProvider) => {
      $stateProvider.state({ name: 'phonesList', url: '/phones', template: '<phone-list></phone-list>'});
      $stateProvider.state({ name: 'phoneDetail', url: '/phones/:phoneId', template: '<phone-detail></phone-detail>'});

  })
