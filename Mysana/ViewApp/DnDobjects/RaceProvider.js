var raceProvider = function () {
    this.$get = function ($http) {
        function getRaces() {
            return [
                new race({
                    name: 'Humans',
                    description: 'Gain +1 skill point per level and one additional feat'
                }),
                new race({
                    name: 'Elves',
                    description: '',
                    dexterity: 2,
                    constitution: -2
                }),
                new race({
                    name: 'Gnome',
                    description: '',
                    strength: -2,
                    constitution: 2,
                    size: size.small
                }),
                new race({
                    name: 'Goblin',
                    description: '',
                    strength: -2,
                    dexterity: 2,
                    charisma: -2,
                    speed: 30,
                    skillBonus: {
                        moveSilently: 4,
                        ride: 4
                    },
                    darkvision: true,
                    automaticLanguages: {
                        Common: true,
                        Goblin: true
                    },
                    bonusLanguages: {
                        Draconic: true,
                        Elven: true,
                        Giant: true,
                        Gnoll: true,
                        Orc: true
                    },
                    size: size.small
                })
            ];
        }
        function race(input) {
            if (input) {
                return {
                    attributes: {
                        strength: input.strength ? input.strength : 0,
                        dexterity: input.dexterity ? input.dexterity : 0,
                        constitution: input.constitution ? input.constitution : 0,
                        intelligence: input.intelligence ? input.intelligence : 0,
                        wisdom: input.wisdom ? input.wisdom : 0,
                        charisma: input.charisma ? input.charisma : 0
                    },
                    name: input.name ? input.name : '',
                    description: input.description ? input.description : '',
                    size: input.size ? input.size : size.medium
                };
            } else {
                return {
                    attributes: {
                        strength: 0,
                        dexterity: 0,
                        constitution: 0,
                        intelligence: 0,
                        wisdom: 0,
                        charisma: 0
                    },
                    name: '',
                    description: '',
                    size: size.medium
                };
            }
        }
        var size = {
            large: 1,
            medium: 2,
            small: 3
        }
        return {
            races: getRaces,
            newRace: () => function () { new race() },
            size: size
        };
        var bob = new race();
    };
};

DnDapp.provider('raceProvider', raceProvider);