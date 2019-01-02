const fs = require("fs");

const names = []

fs.readdir(__dirname + "/aaany/src/components/images/2018", function(err, items) {
    console.log("[");
    for (var i = 0; i < items.length; i++) {
        console.log("{ original: require('../images/2018/" + items[i] + "') }, ");
    }
    console.log("]");
})
