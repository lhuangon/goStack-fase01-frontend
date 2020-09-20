module.exports = {
  presets:[
    '@babel/preset-env', //converte o código para uma versão mais antiga do navegador
    '@babel/preset-react' //converte o código para que entenda o js dentro do html
  ],
  plugins: [
    '@babel/plugin-transform-runtime' //plugin para que os dados do back-end mostre no front assim que a função for executada
  ]
}