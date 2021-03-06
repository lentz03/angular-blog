app.controller('BlogCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
  $scope.posts = [
    {title: "Everything is Awesome", content: "Very very true"}
  ];

  $scope.newPost = function () {
    $uibModal.open({
      templateUrl: 'js/templates/post_modal.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        data: {
          post: {},
          mode: 'create'
        }
      }
    }).result.then(function(newPost){
      // success
      $scope.posts.push(newPost);
    }, function () {
      // reject
    });
  };

  $scope.editPost = function (index) {
    $uibModal.open({
      templateUrl: 'js/templates/post_modal.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        data: {
          post: $scope.posts[index],
          mode: 'edit'
        }
      }
    }).result.then(function(editPost){
      $scope.posts[index] = editPost;
    });
  };

  $scope.deletePost = function (index) {
    $scope.posts.splice(index, 1);
  };
}]);
