System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ZippyComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.title = "This is some title";
                    this.expanded = false;
                }
                ZippyComponent.prototype.chevronClicked = function ($event) {
                    this.expanded = !this.expanded;
                };
                return ZippyComponent;
            }());
            ZippyComponent = __decorate([
                core_1.Component({
                    selector: 'zippy',
                    template: "\n    <div class=\"panel panel-default\">        \n        <div class=\"panel-heading\">\n            {{ title }}\n            <div *ngIf=\"content != null\" class=\"pull-right glyphicon\" \n                [ngClass]=\"{\n                     'glyphicon-chevron-down': !expanded,\n                      'glyphicon-chevron-up' : expanded\n                 }\"\n                  (click)=\"chevronClicked($event)\">\n            </div>                        \n        </div>\n\n        <div *ngIf=\"expanded\" class=\"panel-body\">\n            <ng-content></ng-content>\n        </div> \n    </div>                    \n    ",
                    inputs: ['title', 'content']
                })
            ], ZippyComponent);
            exports_1("ZippyComponent", ZippyComponent);
        }
    };
});
//# sourceMappingURL=zippy.component.js.map