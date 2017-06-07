var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
  devtool: 'eval-source-map',
  output: {
    path: __dirname + "/public",//�������ļ���ŵĵط�
    filename: "bundle.js"//���������ļ����ļ���
  },
  module: {
    rules: [
      {
		test: /\.json$/,
        loader: "json-loader"
	  },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
	  {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public",//���ط����������ص�ҳ�����ڵ�Ŀ¼
    colors: true,//�ն���������Ϊ��ɫ
    historyApiFallback: true,//����ת
	port: "9090",
	historyApiFallback: true,
    inline: true//ʵʱˢ��
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"//new һ����������ʵ������������صĲ���
    }),
	new webpack.HotModuleReplacementPlugin()//�ȼ��ز��
  ]  
}