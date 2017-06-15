System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZippyService;
    return {
        setters: [],
        execute: function () {
            ZippyService = (function () {
                function ZippyService() {
                }
                ZippyService.prototype.getZippys = function () {
                    var zippyList = [{
                            "title": "Here is the title of my first Zippy",
                            "content": "Some generic Content"
                        },
                        {
                            "title": "Here is the title of my second zippy with no content",
                            "content": null
                        }];
                    return zippyList;
                };
                return ZippyService;
            }());
            exports_1("ZippyService", ZippyService);
        }
    };
});
//# sourceMappingURL=zippy.service.js.map