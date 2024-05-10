var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    resolve: {
        mainFiles: ['index', 'Index'],
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {

        // global app config object
        config: JSON.stringify({

            	// NOTE: FOR PRODUCTION ON AZURE!!!
                apiUrl: 'https://pso-express-react-orm-users.azurewebsites.net/' 
		 
		// REAL LOCAL BACKEND - FOR TESTING
                // apiUrl:'http://localhost:443'

               // apiUrl: 'http://localhost:4000'


        })
    }
}