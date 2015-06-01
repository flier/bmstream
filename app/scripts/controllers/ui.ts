/// <reference path="../types.ts" />

module ui {
  'use strict';

  class NavbarController {
    public static $inject = [
      '$log',
      '$scope'
    ]

    constructor(
      private $log: ng.ILogService,
      private $scope: ng.IScope)
    {
    }
  }

  class SearchBarController {
    public static $inject = [
      '$log',
      '$scope',
      '$q'
    ]

    constructor(
      private $log: ng.ILogService,
      private $scope: ISearchBarControllerScope,
      private $q: ng.IQService)
    {
      $scope.simulateQuery = false;
      $scope.isDisabled = false;
      $scope.noCache = false;

      $scope.onSearchTextChanged = (text: string) => $log.info('Text changed to ' + text);
      $scope.onSelectedItemChanged = (item: Object) => $log.info('Item changed to ' + JSON.stringify(item));
    }

    querySearch(text: string): ng.IPromise<SearchResultItem[]> {
      this.$log.info('Query searching for ' + text);

      var deferred = this.$q.defer<SearchResultItem[]>();

      deferred.resolve([{display: text}]);

      return deferred.promise;
    }
  }

  class ViewController {
    public static $inject = [
      '$log',
      '$scope',
      '$location'
    ]

    constructor(
      private $log: ng.ILogService,
      private $scope: IBookmarkViewScope,
      private $location: ng.ILocationService)
    {
      $scope.location = $location;
    }
  }

  angular.module('app.controllers.ui', [])
    .controller('NavbarCtrl', NavbarController)
    .controller('SearchBarCtrl', SearchBarController)
    .controller('ViewCtrl', ViewController);
}
