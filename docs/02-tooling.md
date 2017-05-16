# Tooling

+ standard (linter)
+ npm scripts
+ webpack and es6 modules
  + webpack.config.js
+ babel

```json
// babel
{
    "presets": [
        "react",
        [
            "es2015",
            {
                "modules": false,
                "loose": true
            }
        ]
    ]
}
```

```js
// webpack.config.js
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
```