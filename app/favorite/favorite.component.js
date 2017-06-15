System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, FavoriteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.isStarClicked = false;
                    this.change = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.starClicked = function ($event) {
                    //toggle isStarClicked variable
                    this.isStarClicked = !this.isStarClicked;
                    this.change.emit({ newValue: this.isStarClicked });
                };
                return FavoriteComponent;
            }());
            FavoriteComponent = __decorate([
                core_1.Component({
                    selector: 'favorite',
                    template: "    \n    \n    <div class=\"glyphicon\" \n        [ngClass]=\"{\n            'glyphicon-star-empty': !isStarClicked,\n            'glyphicon-star' : isStarClicked\n        }\"\n     (click)=\"starClicked($event)\">\n    </div>\n    \n    ",
                    inputs: ['isStarClicked:is-star-clicked'],
                    outputs: ['change:favorite-change'],
                    styles: ["\n        .glyphicon-star {\n            color: orange;\n        }\n    "]
                })
            ], FavoriteComponent);
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    };
});
//# sourceMappingURL=favorite.component.js.map