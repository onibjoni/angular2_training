import {Component} from 'angular2/core'
import {FavoriteComponent} from 'favorite/favorite.component'
import {HeartComponent} from 'heart/heart.component'
import {VoterComponent} from 'voter/voter.component'
import {CourseService} from 'courses/course.service'
import {AutoGrowDirective} from 'customdirective/auto-grow.directive'

@Component({
    selector: 'courses',
    templateUrl: 'app/courses/courses.template.html',
    providers: [CourseService],
    directives: [AutoGrowDirective, FavoriteComponent, HeartComponent, VoterComponent] 
})
export class CoursesComponent{
    title: string = "The title of courses pages";
    isStarClicked: boolean = false;
    courses;
    myFavorite: boolean = false;
    totalLikes: number = 0;
    myvotercount: number = 0;
    mystartvote: number = 0; 

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
        this.totalLikes = 20;
        this.myvotercount = 20;
        this.mystartvote = 1;
    }

    starClicked($event){
        //toggle isStarClicked variable
        this.isStarClicked = !this.isStarClicked;
    }

    myClick(){
        this.title = "";
    }

    myInput($event){
        this.title = $event.target.value;
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onVoteChange($event){
        console.log($event);
    }
}