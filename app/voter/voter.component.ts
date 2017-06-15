import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'voter',
    template: `
        <div class="voter">
        <i 
        class="glyphicon glyphicon-menu-up vote-button"
        [class.highlighted]="myvote == 1"
        (click)="upClicked($event)"> 
        </i>
        <br/>
        <span> {{ voteCount + myvote }} </span>
        <br/>
        <i 
        class="glyphicon glyphicon-menu-down vote-button"
        [class.highlighted]="myvote == -1"
        (click)="downClicked($event)"> 
        </i>
        </div>
    `,
    styles: [`
        .highlighted {
            color: orange;
        } 
        .voter{
            width: 20px;
            text-align: center;
            color: 999;
        }
        .vote-button{
            cursor: pointer;
        }
    `],
    inputs: ['voteCount', 'myvote'],
    outputs: ['change']
})
export class VoterComponent {

    //input variables
    voteCount: number = 0;   
    myvote: number = 0;

    //output variables
    change = new EventEmitter();

    upClicked($event) {

        if (this.myvote == 1)
        return;

        this.myvote++;

        this.change.emit({newValue: this.myvote });
    }

    downClicked($event) {

        if(this.myvote == -1)
        return;

        this.myvote--;

        this.change.emit({newValue: this.myvote }); 
        
    }


}