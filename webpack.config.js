module.exports = {
 entry: ['./react-client/src/index.jsx'],
 output: {
   filename: 'bundle.js',
   path: './react-client/dist/'
 },
 module: {

   loaders: [
     {
       test: [/\.jsx$/],
       include: './react-client/src',
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 }
}
