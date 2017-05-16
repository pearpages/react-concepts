const path = require('path');

module.exports = {
    entry: './src/app.js',
    devtool: 'eval',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.json']
    },
    stats: {
        color: true,
        resasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}