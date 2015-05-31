/// <reference path="../types.ts" />

module ui {
  'use strict';

  class NavbarController {
    public static $inject = [
      '$log',
      '$scope',
      '$location'
    ]

    constructor(
      private $log: ng.ILogService,
      private $scope: ng.IScope,
      private $location: ng.ILocationService)
    {
    }
  }

  class SearchBarController {
    public static $inject = [
      '$log',
      '$scope',
      '$location'
    ]

    scope: ISearchBarControllerScope;

    constructor(
      private $log: ng.ILogService,
      private $scope: ISearchBarControllerScope,
      private $location: ng.ILocationService)
    {
      this.scope = $scope;

      $scope.location = $location;
      $scope.simulateQuery = false;
      $scope.isDisabled = false;
      $scope.noCache = false;

      $scope.onSearchTextChanged = (text: string) => $log.info('Text changed to ' + text);
      $scope.onSelectedItemChanged = (item: Object) => $log.info('Item changed to ' + JSON.stringify(item));
      $scope.querySearch = (text: string):SearchResultItem[] => null;
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
