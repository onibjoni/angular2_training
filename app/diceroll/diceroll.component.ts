import {Component} from 'angular2/core'

@Component({
    selector: 'diceRoll',
    template: `<h2>Dice Roll</h2>
    {{ title }}
    <br><br>
    <button (click)="onRoll($event)">ROLL</button>
    <button (click)="onClear($event)">CLEAR</button>    
    <div>
       {{combos}}
    </div>
    `
})
export class DiceRollComponent{
    title: string = "Click Roll to figure out the combinations of a dice roll!";
    combos: string ="";

    onClear($event){
        $event.stopPropagation();
        console.log("Clear was clicked", $event);
        this.combos="";
    }

    onRoll($event){
        if(this.combos == ""){
        console.log("Roll was clicked");
        for(var i = 1; i < 7; i++){
            for(var j = 1; j < 7; j++){
                console.log("pushing...");
                this.combos +=["( " + i + " , " + j + " ) "];
            }
        }

    }

}

}