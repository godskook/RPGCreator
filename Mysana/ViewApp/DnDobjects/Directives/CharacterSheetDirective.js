DnDapp.directive('characterSheetDirective', function () {
    return {
        templateUrl: '/ViewApp/DnDobjects/Directives/CharacterSheetDirective.html',
        scope: {
            sheet: '='
        },
        controller: function ($scope) {
        }
    };
});