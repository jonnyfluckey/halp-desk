angular
  .module('halp-desk.factories', [])
  .factory('Tickets', Tickets);

Tickets.$inject = ['$http'];

function Tickets($http) {
  var self = this;

  self.getOpen = getOpen;
  self.getArchive = getArchive;
  self.submitTicket = submitTicket;
  self.updateTicket = updateTicket;
  self.deleteTicket = deleteTicket;

  function getOpen() {
    return $http.get('/api/open')
      .then(function(res) {
        return res.data;
      });
  };

  function getArchive() {
    return $http.get('/api/archive')
      .then(function(res) {
        return res.data;
      });
  };

  function submitTicket(ticket) {
    return $http.post('/api/ticket', ticket);
  };

  function updateTicket(data) {
    return $http.put('/api/ticket', data);
  }

  function deleteTicket(ticket) {
    return $http.post('/api/delete', ticket);
  };
};