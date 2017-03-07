'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( message, username, image ) {
      if (message) {
        messageService.addMessage(message, username, image).then(function ( response ) {

          $scope.messages = response.data.messages;
          console.log($scope.messages)
        });
      }
    };


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
