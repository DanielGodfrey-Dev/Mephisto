const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module: {
        rules: [
    //_________________beginning of rules____________________________________________
            // used to implement CSS modules in React
            {
              test: /\.css$/,
              include: SRC_DIR,
              exclude: /node_modules/,
              use: [
                // [style-loader](/loaders/style-loader)
                { loader: 'style-loader' },
                // [css-loader](/loaders/css-loader)
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                }
              ]
            },

    //________________________________________________________________________________
            // used for building in React (jsx -> js)
            {
                test: /\.(jsx|js)$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                use: [{
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', {
                        "targets": "defaults" 
                      }],
                      '@babel/preset-react'
                    ]
                  }
                }]
            }
    //_________________________end of rules____________________________________________
        ]
    }
};