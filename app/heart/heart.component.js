System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, HeartComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.highlighted = false;
                    this.count = 0;
                }
                HeartComponent.prototype.myClick = function ($event) {
                    this.highlighted = !this.highlighted;
                    if (this.highlighted) {
                        this.count++;
                    }
                    else {
                        this.count--;
                    }
                };
                return HeartComponent;
            }());
            HeartComponent = __decorate([
                core_1.Component({
                    selector: 'heart',
                    template: "\n        <i \n        class=\"glyphicon glyphicon-heart\"\n        [class.mypinkstyle]=\"highlighted\"\n        (click)=\"myClick($event)\"> \n        </i><span> {{ count }} </span>\n    ",
                    styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n\n        .mypinkstyle{\n            color: deeppink;\n        }\n    "],
                    inputs: ['count']
                })
            ], HeartComponent);
            exports_1("HeartComponent", HeartComponent);
        }
    };
});
//# sourceMappingURL=heart.component.js.map