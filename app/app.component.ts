import {Component} from 'angular2/core';
import {TweetComponent} from 'tweet/tweet.component';
import {FavoriteComponent} from 'favorite/favorite.component';
import {ZippyComponent} from 'zippy/zippy.component';
import {ZippyService} from 'zippy/zippy.service';
import{ContactFormComponent} from 'forms/contact-form.component';
import{SubscriptionFormComponent} from 'forms/subscription-form.component'; 
import {SignUpFormComponent} from 'forms/signup-form.component';
import {ChangePasswordFormComponent} from 'forms/change-password.component';

@Component({
    selector: 'my-app',
    template: `
                <!-- My tweet application
                    <tweet></tweet>
                -->
                <!-- My Zippy Application
                <div *ngFor="#zips of zippys" >
                    <zippy [title] ="zips.title" [content]="zips.content">
                        {{ zips.content }}
                    </zippy>
                </div>
                -->
                <!-- My Form component 
                <contact-form></contact-form>
                -->
                <!-- My Form component                     
                <subscription-form></subscription-form>
                -->
                <changepassword-form></changepassword-form>
               `,
    directives: [TweetComponent, FavoriteComponent, 
                ZippyComponent, ContactFormComponent, 
                SubscriptionFormComponent, SignUpFormComponent,
                ChangePasswordFormComponent],
    providers: [ZippyService]
})
export class AppComponent { 

    zippys : string[] = [];
    constructor(zippyService: ZippyService){
        this.zippys = zippyService.getZippys();
    }

}
