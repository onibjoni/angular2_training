import {Control, NgFormControl} from 'angular2/common';

export class UsernameValidators{

    // static passwordMustMatch(password1, password2){
       
    //     console.log("Checking Password......: " + password1 + " " + password2);
    //     if(password1 != password2 ){
    //         return {
    //             passwordMustMatch: true
    //         }
    //     } else{
    //         return null;
    //     }
    // }


    static shouldBeUnique(control: Control){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == "mosh"){
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
    
    static cannotContainSpace(control: Control){
        if(control.value.indexOf(' ') >= 0){
            return{
                cannotContainSpace: true
            };
        }
        //valid
        return null;
    }
}