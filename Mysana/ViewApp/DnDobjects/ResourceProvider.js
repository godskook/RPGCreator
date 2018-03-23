var resourceProvider = function () {
    this.$get = function ($http) {
        function newResource() {

        }
        var bob = new newResource();
        return {
            Resources: [],
            newResource: newResource
        };
    };
};

DnDapp.provider('resourceProvider', resourceProvider);