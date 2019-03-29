/**
 * webpack config
 */

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LessFunc = require('less-plugin-functions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getTimeStr = require('ijijin_builder/nodebuild/lib/util/util').getTimeStr;
const PurifyCssPlugin = require('purifycss-webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CONFIG = require('./package.json');

// top banner
const MY_BANNER = `
  ${CONFIG.name}
  @version: ${CONFIG.version}
  @description: ${CONFIG.description}
  @author: ${CONFIG.author}
  @task: ${CONFIG.task || ''}
  @build time: ${ getTimeStr() }
`;
const BROWSERS_VERSION_SET = {	// for autoprefixer
	browsers: [
		'last 2 versions',
		'android 4', 
		'ios 8'
	]
	// pc: ['ie 6-8', 'Firefox > 20', 'cover 99.5%']
};
const IMAGE_LIMIT = 5000;	// base64 limit

module.exports = (options = {}) => {
    const entries = glob.sync('./src/**/enter.js');
    const entryJSList = {};
    const entryHtmlList = [];

    for (const path of entries) {
        const chunkName = path.slice('./src/js/'.length, -'/enter.js'.length);
        entryJSList[chunkName] = path;

        entryHtmlList.push(new HtmlWebpackPlugin({
            template: './src/' + chunkName + '.html',
            filename: chunkName + '.html',
            chunks: ['manifest', 'vendor', chunkName, 'commons'],
            minify: {
                removeAttributeQuotes: false
            }
        }));
    }

    let plugins = [
        ...entryHtmlList,
        
		
        new webpack.optimize.SplitChunksPlugin({
          names: "commons"
        }),

        new VueLoaderPlugin(),

        new PurifyCssPlugin({
            styleExtensions: [path.join(__dirname, 'src/less/*')],
            paths: glob.sync(path.join(__dirname, 'src/*.(html|vue)'))
        }),

        new MiniCssExtractPlugin({
            filename: `css/[name]${options.dev ? '' : '.[chunkhash:8]'}.css`,
            chunkFilename: `[id].css`
        })
    ];
    if (!options.dev) plugins.push(new webpack.IgnorePlugin(/mock\/*/));    // ignore mock
	if (options.prod) {		// add banner description
		plugins.push(new webpack.BannerPlugin(MY_BANNER));
	}

    return {
        entry: entryJSList,

        resolve: {
            extensions: ['.js', '.css', 'less'],
            alias: {
                '~': path.resolve(__dirname, '../'),
                '@': path.resolve(__dirname, 'src'),
                'mock': path.resolve(__dirname, 'src/mock'),
                'lib': path.resolve(__dirname, 'src/js/lib'),
                'css': path.resolve(__dirname, 'src/css'),
				'less': path.resolve(__dirname, 'src/less')
            }
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: options.dev ? '[name].js' :
                //'js/[name].js',
                'js/[name].[chunkhash:8].js',
            chunkFilename: '[id].js?[chunkhash:8]'
        },
		
		devtool: options.dev && 'cheap-module-source-map' || (options.prod ? false : 'source-map'),

        module: {
            rules: [
                // js
                {
                    test: /\.js$/,
					exclude: /ijijin_builder/,
                    use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['babel-preset-env']
							}
						}
                        ,'eslint-loader'
                    ]
                },

                // html
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            root: path.resolve(__dirname, 'src'),
                            attrs: ['img:src']
                        }
                    }
                },

                // css
                {
                    test: /\.css$/,
                    use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')(BROWSERS_VERSION_SET)
                                ],
                                localIdentName: 'purify_[hash:base64:5]',
                                modules: true
                            }
                        }
					]
                },

                // less
                {
                    test: /\.less$/,
                    use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')(BROWSERS_VERSION_SET)
                                ],
                                localIdentName: 'purify_[hash:base64:5]',
                                modules: true
                            }
                        },
						{
							loader: 'less-loader',
							options: {
								strictMath: true,
								plugins: [ new LessFunc() ],
                                localIdentName: 'purify_[hash:base64:5]',
                                modules: true
							}
						}
					]
                },

                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'less': [
                                'vue-style-loader',
                                'css-loader',
                                'less-loader'
                            ]
                        }
                    }
                },

                // image or font
                {
                    test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: IMAGE_LIMIT,
                            name: 'images/[hash].[ext]'
                        }
                    }]
                },

                {
                    test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../assets/font/',
                            outputPath: 'assets/font/'
                        }
                    }]
                }
            ]
        },



        optimization: {
            splitChunks: {
                name: true,
                chunks: "async",
                minSize: 2000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                cacheGroups: {
                    commons: {
                        test: /less/,
                        name: 'commons',    
                        chunks: 'initial',  
                        minChunks: 2,       
                        minSize: 2000
                    }
                }
            }
        },

        plugins: plugins,

        devServer: {
            port: 3000,
            hot: true,
            contentBase: path.join(__dirname, 'src'),
            overlay: true,
            historyApiFallback: {
                index: '/assets/',
                disableDotRule: true
            },
            inline: true
        },

        performance: {
            hints: options.dev ? false : 'warning'
        }
    }
};