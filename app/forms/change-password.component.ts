import {Component} from 'angular2/core';
import{ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import{UsernameValidators} from 'validators/usernameValidators';

@Component({
    selector: 'changepassword-form',
    templateUrl: 'app/forms/change-password.template.html'

})
export class ChangePasswordFormComponent {

    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form =  fb.group({
            currentPassword: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
                ])],
            newPassword: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
                ]), UsernameValidators.shouldBeUnique],
            confirmPassword: ['',Validators.compose([
                Validators.required
                ])]
        });
    }

    changePasswordSubmit() {

        //var result = authService.login(this.form.value;)
        if (this.form.value.currentPassword != "1234") {
            this.form.find('currentPassword').setErrors({
                invalidPassword: true
            });
        } else{
            alert("Password Changed Successfully!");
        }
        console.log(this.form.value);
    }
}