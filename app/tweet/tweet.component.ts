//Core Angular
import {Component, Input, Output, EventEmitter} from 'angular2/core'

//App Components
import {HeartComponent} from 'heart/heart.component'

// App Services
import {TweetService} from './tweet.service'


@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet/tweet.template.html',
    inputs:['count'],
    directives: [HeartComponent],
    providers: [TweetService]
})
export class TweetComponent{
    tweets:object = {};

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}