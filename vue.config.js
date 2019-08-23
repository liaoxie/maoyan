module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true
      },
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }

    }
  }
}
