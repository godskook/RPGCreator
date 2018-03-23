var dndAppController = function ($scope, characterSheetProvider) {
    $scope.sheet = new characterSheetProvider.character();
};

DnDapp.controller('dndAppController', dndAppController);