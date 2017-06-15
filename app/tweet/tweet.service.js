System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters: [],
        execute: function () {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    var tweetList = [{
                            "tweetUrl": "http://lorempixel.com/100/100/people?1",
                            "tweetCaption": "Like this comment if you like me??",
                            "likeCount": 10,
                            "author": "Augustine",
                            "handle": "@oniRocks"
                        },
                        {
                            "tweetUrl": "http://lorempixel.com/100/100/people?20",
                            "tweetCaption": "Here are other reasons why projects fail",
                            "likeCount": 20,
                            "author": "Raye",
                            "handle": "@rayeshines"
                        },
                        {
                            "tweetUrl": "http://lorempixel.com/100/100/people?30",
                            "tweetCaption": "2 Reasons why Web projects fail:\n                                <br>\n                                <ul>\n                                    <li>People dont practice</li>\n                                    <li>People just google</li>                                 \n                                </ul>",
                            "likeCount": 100,
                            "author": "Ryan",
                            "handle": "@princessryry"
                        }];
                    return tweetList;
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    };
});
//# sourceMappingURL=tweet.service.js.map