
import {Component} from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/forms/subscription-form.template.html'
})
export class SubscriptionFormComponent { 

    mylength : number = 3;
    frequencyOptions : string[] = ["Daily", "Weekly", "Monthly"];
    
    onSubmit(form){
        console.log(form);
    }

}
