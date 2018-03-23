function feat() {
    this.title = '';
    this.description = '';
    return this;
}

DnDapp.directive('myCustomer', function () {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}',
            scope: {

            },
            controller: function (resourceProvider) {
                var strength = new resource();
                strength.value = type.attribute;

                var powerattack = new feat();
                powerattack.description

                var feats = [];
                feats[0] = new feat();
                feats['a'] = new feat();
                var jack = feats['a'];
                var bob = new feat();
                var susan = bob.title;
            }
        };
});


function resource() {
    this.value = [];
}

var type = {
    attribute: 1,
    feat: 2
}

