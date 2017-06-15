//Core Angular
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
    <div class="panel panel-default">        
        <div class="panel-heading">
            {{ title }}
            <div *ngIf="content != null" class="pull-right glyphicon" 
                [ngClass]="{
                     'glyphicon-chevron-down': !expanded,
                      'glyphicon-chevron-up' : expanded
                 }"
                  (click)="chevronClicked($event)">
            </div>                        
        </div>

        <div *ngIf="expanded" class="panel-body">
            <ng-content></ng-content>
        </div> 
    </div>                    
    `,
    inputs:['title' , 'content']
})
export class ZippyComponent{
    title: string = "This is some title";
    expanded: boolean = false;
    content: string;

    chevronClicked($event){
        this.expanded = !this.expanded;
    }
   
}