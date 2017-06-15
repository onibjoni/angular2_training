
export class ZippyService{
    getZippys() : any {

        var zippyList = [{ 
                "title" : "Here is the title of my first Zippy",
                "content" : "Some generic Content"
                  }, 

                    {
                "title" : "Here is the title of my second zippy with no content",
                "content" : null
                    }];

        return zippyList;
    }
}