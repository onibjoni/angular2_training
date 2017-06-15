System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, DiceRollComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DiceRollComponent = (function () {
                function DiceRollComponent() {
                    this.title = "Click Roll to figure out the combinations of a dice roll!";
                    this.combos = "";
                }
                DiceRollComponent.prototype.onClear = function ($event) {
                    $event.stopPropagation();
                    console.log("Clear was clicked", $event);
                    this.combos = "";
                };
                DiceRollComponent.prototype.onRoll = function ($event) {
                    if (this.combos == "") {
                        console.log("Roll was clicked");
                        for (var i = 1; i < 7; i++) {
                            for (var j = 1; j < 7; j++) {
                                console.log("pushing...");
                                this.combos += ["( " + i + " , " + j + " ) "];
                            }
                        }
                    }
                };
                return DiceRollComponent;
            }());
            DiceRollComponent = __decorate([
                core_1.Component({
                    selector: 'diceRoll',
                    template: "<h2>Dice Roll</h2>\n    {{ title }}\n    <br><br>\n    <button (click)=\"onRoll($event)\">ROLL</button>\n    <button (click)=\"onClear($event)\">CLEAR</button>    \n    <div>\n       {{combos}}\n    </div>\n    "
                })
            ], DiceRollComponent);
            exports_1("DiceRollComponent", DiceRollComponent);
        }
    };
});
//# sourceMappingURL=diceroll.component.js.map