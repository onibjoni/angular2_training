
export class TweetService{
    getTweets() : any {

        var tweetList = [{ 
                "tweetUrl" : "http://lorempixel.com/100/100/people?1",
                "tweetCaption" : "Like this comment if you like me??",
                "likeCount" : 10,
                "author" : "Augustine",
                "handle" : "@oniRocks"
                  }, 
                    {    
                "tweetUrl" : "http://lorempixel.com/100/100/people?20",
                "tweetCaption" : "Here are other reasons why projects fail",
                "likeCount" : 20,
                "author" : "Raye",
                "handle" : "@rayeshines"
                    },
                    {
                "tweetUrl" : "http://lorempixel.com/100/100/people?30",
                "tweetCaption" : `2 Reasons why Web projects fail:
                                <br>
                                <ul>
                                    <li>People dont practice</li>
                                    <li>People just google</li>                                 
                                </ul>`,
                "likeCount" : 100,
                "author" : "Ryan",
                "handle" : "@princessryry"
                    }];

        return tweetList;
    }
}