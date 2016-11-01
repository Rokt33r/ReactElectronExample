'use strict'

const path = require('path')
const webpack = require('webpack')
const NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin')

const config = {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      // 직접 리프레시 타이밍을 선택하기 위해서 only-dev-server를 추가합니다.
      'webpack/hot/only-dev-server',
      // 부를지 말지 통제하는 코드입니다.
      'react-hot-loader/patch',
      './browser/main/index.js'
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'browser': path.join(__dirname, 'browser')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // 노드 기본 모듈은 전부 외부모듈로 다룹니다.
    new NodeTargetPlugin()
  ],
  // 더 빠른 빌드를 위해 웹팩 컴파일대상에서 제외합니다. 그리고 electron의 경우 electron환경에서만 부를 수 있으므로 생략해주셔야 합니다.
  // 일렉트론 환경에서 require를 사용시 일렉트론 환경에서는 복수의 리액트를 불러올 경우가 있으므로 저는 스크립트태그로 불러서 글로벌에서 가져오는 걸 선호합니다.
  externals: [
    'electron',
    'styled-components',
    {
      react: 'var React',
      'react-dom': 'var ReactDOM',
      'react-redux': 'var ReactRedux',
      'redux': 'var Redux'
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        // 로더는 분리시킵니다.
        use: [
          {
            loader: 'react-hot/webpack'
          },
          {
            loader: 'babel'
          }
        ],
        include: path.join(__dirname, 'browser')
      }
    ]
  },
  output: {
    // 컴파일설정은 나중에 들어갈 생각입니다
    path: path.join(__dirname, 'compiled'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    libraryTarget: 'commonjs2',
    // 웹서버에서 다음 URL로 호스팅합니다.
    publicPath: 'http://localhost:8080/assets/'
  },
  devtool: 'eval',
  devServer: {
    hot: true
  }
}

module.exports = config

