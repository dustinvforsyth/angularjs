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

angularApp.config(($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/phones');
      $stateProvider.state({ name: 'phonesList', url: '/phones', template: '<phone-list></phone-list>'});
      $stateProvider.state({ name: 'phoneDetail', url: '/phones/:phoneId', template: '<phone-detail></phone-detail>'});
      $stateProvider.state({ name: 'phoneBuy', url: '/phoneBuy/:phoneId', template: '<phone-buy></phone-buy>'});

  })
