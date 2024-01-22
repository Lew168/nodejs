const fs = require('fs');
const  sourceMap = require("source-map");


module.exports = {
    /** 根据行和列，从sourcemap中定位源码的位置 */
    stack: async function (file, stack) {
        const sourceMapContent = JSON.parse(file);
        // const raw = fs.readFileSync(file, 'utf-8')
        // console.log(111222)
        // const line = 20;
        // const column = 30;
        // const consumer = await sourcemap.SourceMapConsumer.with(raw, null);
        // const str = consumer.originalPositionFor({ line, column });
        console.log(sourceMapContent, 9999)
    }
}