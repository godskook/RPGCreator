DnDapp.directive('raceSelectorDirective', function () {
    return {
        templateUrl: '/ViewApp/DnDobjects/Directives/CharacterSheetDirectives/RaceSelectorDirective.html',
        scope: {
            race: '='
        },
        controller: function ($scope, raceProvider) {
            $scope.races = raceProvider.races();
        }
    }
});