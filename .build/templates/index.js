(function(dust){dust.register("index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<div data-role=\"page\" id=\"intro\">").p("layouts/header",ctx,{}).w("<div role=\"main\" class=\"ui-content\"><p>Yes! I would like to apply as a/an</p><button class=\"ui-btn js-application-type\" data-applicationtype=\"developer\">Code Ninja</button><button class=\"ui-btn js-application-type\" data-applicationtype=\"intern\">Intern</button><p>Click to proceed</p></div></div><div data-role=\"page\" id=\"upload\">").p("layouts/header",ctx,{}).w("<div role=\"main\" class=\"ui-content\"><h2>Upload your resume</h2><form id=\"uploadform\" name=\"uploadform\" enctype=\"multipart/form-data\"><input type=\"hidden\" id=\"applicationtype\" name=\"applicationtype\" /></form><button class=\"ui-btn\" id=\"camerahero\">Camera</button><fieldset class=\"ui-grid-a hide\" id=\"uploadcontrols\"><div class=\"ui-block-solo\" id=\"thumbnails\"></div><div class=\"ui-block-a\"><button class=\"ui-btn\" id=\"camera\">Camera</button></div><div class=\"ui-block-b\"><button class=\"ui-btn\" id=\"submit\">Submit</button></div></fieldset></div></div><div data-role=\"page\" id=\"summary\">").p("layouts/header",ctx,{}).w("<div role=\"main\" class=\"ui-content\"><p>Your resume has been successfully uploaded!</p><p>We will review your application and contact you if there's a match</p><p>Thank you!</p></div></div>");}body_1.__dustBody=!0;return body_0;})(dust);