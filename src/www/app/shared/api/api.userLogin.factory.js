(function()
{
  'use strict';

  angular
    .module('youdlePrototype.api')
    .factory('userLoginApiFactory', userLoginApiFactory);

  userLoginApiFactory.$inject = ['$http', '$q'];

  function userLoginApiFactory($http, $q)
  {
    var service = {
      post: post
    };

    return service;

    function post(data)
    {
      return $http(
        {
          method: 'POST',
          url: 'https://api.backendless.com/v1/users/login',
          headers: {
            'application-id': 'E11DA057-CE8C-0C31-FF22-59965520EB00',
            'secret-key': '6E12B29C-A78E-4C99-FFFA-698C1EE7D200',
            'application-type': 'REST',
            'content-type': 'application/json'
          },
          data: data
        });
    }
  }
})();
