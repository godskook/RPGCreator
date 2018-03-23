DnDapp.directive('abilityScoresDirective', function () {
    return {
        templateUrl: '/ViewApp/DnDobjects/Directives/CharacterSheetDirectives/AbilityScoresDirective.html',
        scope: {
            attributes: '=',
            pointBuy: '='
        },
        controller: function ($scope) {
            $scope.spentPointbuy = spentCalculator();

            function spentCalculator() {
                var count = 0;
                angular.forEach($scope.attributes, function (value) {
                    count += pointbuyCost(value);
                });
                return count;
            }

            $scope.addToAttribute = function (key) {
                var spendable = $scope.pointBuy - $scope.spentPointbuy;
                var cost = pointbuyCost($scope.attributes[key] + 1) - pointbuyCost($scope.attributes[key]);
                if (spendable >= cost) {
                    $scope.attributes[key]++;
                    $scope.spentPointbuy = spentCalculator();
                }
            }
            $scope.subtractFromAttribute = function (key) {
                if ($scope.attributes[key] > 8) {
                    $scope.attributes[key]--;
                    $scope.spentPointbuy = spentCalculator();
                }
            }

            $scope.min = 8;
            $scope.max = 20;
            function pointbuyCost(value) {
                var pointBuyMap = { '8': 0, '9': 1, '10': 2, '11': 3, '12': 4, '13': 5, '14': 6, '15': 8, '16': 10, '17': 13, '18': 16, '19': 20, '20': 24 };
                return pointBuyMap[value];
            }
        }
    };
});