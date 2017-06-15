System.register(["angular2/core", "favorite/favorite.component", "heart/heart.component", "voter/voter.component", "courses/course.service", "customdirective/auto-grow.directive"], function (exports_1, context_1) {
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
    var core_1, favorite_component_1, heart_component_1, voter_component_1, course_service_1, auto_grow_directive_1, CoursesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }
        ],
        execute: function () {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "The title of courses pages";
                    this.isStarClicked = false;
                    this.myFavorite = false;
                    this.totalLikes = 0;
                    this.myvotercount = 0;
                    this.mystartvote = 0;
                    this.courses = courseService.getCourses();
                    this.totalLikes = 20;
                    this.myvotercount = 20;
                    this.mystartvote = 1;
                }
                CoursesComponent.prototype.starClicked = function ($event) {
                    //toggle isStarClicked variable
                    this.isStarClicked = !this.isStarClicked;
                };
                CoursesComponent.prototype.myClick = function () {
                    this.title = "";
                };
                CoursesComponent.prototype.myInput = function ($event) {
                    this.title = $event.target.value;
                };
                CoursesComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                CoursesComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                return CoursesComponent;
            }());
            CoursesComponent = __decorate([
                core_1.Component({
                    selector: 'courses',
                    templateUrl: 'app/courses/courses.template.html',
                    providers: [course_service_1.CourseService],
                    directives: [auto_grow_directive_1.AutoGrowDirective, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, voter_component_1.VoterComponent]
                }),
                __metadata("design:paramtypes", [course_service_1.CourseService])
            ], CoursesComponent);
            exports_1("CoursesComponent", CoursesComponent);
        }
    };
});
//# sourceMappingURL=courses.component.js.map