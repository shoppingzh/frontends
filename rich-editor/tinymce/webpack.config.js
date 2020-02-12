const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tinymce-demo',
            template: './public/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}
