module.exports = {
  devServer: {
    proxy: {
<<<<<<< HEAD
      '/api': {
        target: 'http://localhost:9090',
=======
      '/ajax': {
        target: 'http://m.maoyan.com',
>>>>>>> feature/hebing
        changeOrigin: true
      }
    }
  }
}
