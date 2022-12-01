const fs = require('fs');
const dirEntries = fs.readdirSync(__dirname);
const base = __dirname + '/';
const routers = {};

try {
    dirEntries.forEach(function(dirEntry) {
        const stats = fs.statSync(base + dirEntry);
        try {
            if (stats.isDirectory()) {

                const router = require(base + dirEntry + '/router');
                routers[dirEntry] = router;

            } else {
                const router = require(base + dirEntry);
                routers[dirEntry.replace(/.js$/,"")] = router;
            }
        } catch (err) {
            console.log('Could not get router for ' + dirEntry);
            console.log(err.toString() + err.stack);
        }
    });
} catch (err) {
    console.log('Error while loading routers');
    console.log(err.stack);
    routers = {}
} finally {
    module.exports = routers;
}