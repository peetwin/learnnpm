var Greeter = /** @class */ (function () {
	'use strict';
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "A type-scripting greeting to you, " + name;
    };
    return Greeter;
}());

export = Greeter;