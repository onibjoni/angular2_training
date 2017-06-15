import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'heart',
    template: `
        <i 
        class="glyphicon glyphicon-heart"
        [class.mypinkstyle]="highlighted"
        (click)="myClick($event)"> 
        </i><span> {{ count }} </span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .mypinkstyle{
            color: deeppink;
        }
    `],
    inputs:['count']
})
export class HeartComponent{
    highlighted: boolean = false;
    count:number = 0;

    myClick($event){

        this.highlighted = !this.highlighted;

        if(this.highlighted){
            this.count++;
        } else{
            this.count--;
        }
    }
}