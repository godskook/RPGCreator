var characterSheet = function () {
    this.$get = function ($http) {
        var characters = [];
        function character() {
            var character = {
                id: newID(characters, 'id'),
                pointBuy: 50,
                attributes: {
                    strength: 8,
                    dexterity: 8,
                    constitution: 8,
                    intelligence: 8,
                    wisdom: 8,
                    charisma: 8
                },
                race: '',
                job: { wizard: 0 }
            };
            characters.push(character);
            return character;
        }
        function newID(array, key) {
            var i = 0;
            for (i = 0; i < array.length; i++) {
                if (!array[i][key]) {
                    return i;
                }
            }
        }
        return {
            character: character
        };
    };
};

DnDapp.provider('characterSheetProvider', characterSheet);