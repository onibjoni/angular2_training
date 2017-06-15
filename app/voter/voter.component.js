System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, VoterComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            VoterComponent = (function () {
                function VoterComponent() {
                    //input variables
                    this.voteCount = 0;
                    this.myvote = 0;
                    //output variables
                    this.change = new core_1.EventEmitter();
                }
                VoterComponent.prototype.upClicked = function ($event) {
                    if (this.myvote == 1)
                        return;
                    this.myvote++;
                    this.change.emit({ newValue: this.myvote });
                };
                VoterComponent.prototype.downClicked = function ($event) {
                    if (this.myvote == -1)
                        return;
                    this.myvote--;
                    this.change.emit({ newValue: this.myvote });
                };
                return VoterComponent;
            }());
            VoterComponent = __decorate([
                core_1.Component({
                    selector: 'voter',
                    template: "\n        <div class=\"voter\">\n        <i \n        class=\"glyphicon glyphicon-menu-up vote-button\"\n        [class.highlighted]=\"myvote == 1\"\n        (click)=\"upClicked($event)\"> \n        </i>\n        <br/>\n        <span> {{ voteCount + myvote }} </span>\n        <br/>\n        <i \n        class=\"glyphicon glyphicon-menu-down vote-button\"\n        [class.highlighted]=\"myvote == -1\"\n        (click)=\"downClicked($event)\"> \n        </i>\n        </div>\n    ",
                    styles: ["\n        .highlighted {\n            color: orange;\n        } \n        .voter{\n            width: 20px;\n            text-align: center;\n            color: 999;\n        }\n        .vote-button{\n            cursor: pointer;\n        }\n    "],
                    inputs: ['voteCount', 'myvote'],
                    outputs: ['change']
                })
            ], VoterComponent);
            exports_1("VoterComponent", VoterComponent);
        }
    };
});
//# sourceMappingURL=voter.component.js.map