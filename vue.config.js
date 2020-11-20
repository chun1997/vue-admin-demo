const path = require('path')
function resolve(dir) {
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('src/components'))
        .set('views',resolve('src/views'))
        .set('assets',resolve('src/assets'))
        .set('api',resolve('src/api'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
    }
}