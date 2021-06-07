module.exports={
  presets:[
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-typescript',{allowNamespaces: true}],
    '@babel/preset-flow'
  ],
  plugins:[
    [module-resolver,{
      alias:{
          "@config":"./src/config",
          "@database":"./src/database",
          "@model":"src/model",
          "@views":"src/views",
          "@controllers":"./src/controllers",
        
      }
    }],
    "babel-plugin-transform-typescript-metadata"
  ],
}