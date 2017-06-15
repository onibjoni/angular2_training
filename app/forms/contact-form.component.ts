
import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/forms/contact-form.template.html'
})
export class ContactFormComponent { 

    mylength : number = 3;

    onSubmit(form){
        console.log(form);
    }

}
