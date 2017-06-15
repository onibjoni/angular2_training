import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `    
    
    <div class="glyphicon" 
        [ngClass]="{
            'glyphicon-star-empty': !isStarClicked,
            'glyphicon-star' : isStarClicked
        }"
     (click)="starClicked($event)">
    </div>
    
    `,
    inputs: ['isStarClicked:is-star-clicked'],
    outputs: ['change:favorite-change'],
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})
export class FavoriteComponent{
    isStarClicked: boolean = false;

    change = new EventEmitter();

    starClicked($event){
        //toggle isStarClicked variable
        this.isStarClicked = !this.isStarClicked;
        this.change.emit({newValue: this.isStarClicked });
    }
}