const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    devtool: 'eval-source-map',
    
    entry:{
        app:'./src/index.js',
        print:'./src/js/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },            
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            }
        ]
    },
    
    plugins:[
        new  HtmlWebpackPlugin({
            title:'输出'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:9000
    }
    
}

module.exports = config;
