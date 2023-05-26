function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //VAMOS USAR UM DIFERENTE AO INVES DESSE MAS ESSE TBM TA CERTO var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {   
                //criança         
                img.setAttribute('src', 'imagens/crianca-m.png')                            
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.png')
                //jovem
            } else if (idade < 50 ) {
                img.setAttribute('src', 'imagens/adulto-m.png')
                //adulto
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
                //idoso
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'    //coloca a imagem no centro
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`    //resposta final
        res.appendChild(img)       //cria uma tag html dentro do codigo
    }


}