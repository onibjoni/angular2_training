System.register(["angular2/core", "tweet/tweet.component", "favorite/favorite.component", "zippy/zippy.component", "zippy/zippy.service", "forms/contact-form.component", "forms/subscription-form.component", "forms/signup-form.component", "forms/change-password.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, tweet_component_1, favorite_component_1, zippy_component_1, zippy_service_1, contact_form_component_1, subscription_form_component_1, signup_form_component_1, change_password_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (zippy_service_1_1) {
                zippy_service_1 = zippy_service_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(zippyService) {
                    this.zippys = [];
                    this.zippys = zippyService.getZippys();
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n                <!-- My tweet application\n                    <tweet></tweet>\n                -->\n                <!-- My Zippy Application\n                <div *ngFor=\"#zips of zippys\" >\n                    <zippy [title] =\"zips.title\" [content]=\"zips.content\">\n                        {{ zips.content }}\n                    </zippy>\n                </div>\n                -->\n                <!-- My Form component \n                <contact-form></contact-form>\n                -->\n                <!-- My Form component                     \n                <subscription-form></subscription-form>\n                -->\n                <changepassword-form></changepassword-form>\n               ",
                    directives: [tweet_component_1.TweetComponent, favorite_component_1.FavoriteComponent,
                        zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent,
                        subscription_form_component_1.SubscriptionFormComponent, signup_form_component_1.SignUpFormComponent,
                        change_password_component_1.ChangePasswordFormComponent],
                    providers: [zippy_service_1.ZippyService]
                }),
                __metadata("design:paramtypes", [zippy_service_1.ZippyService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map