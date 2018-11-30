
// (function()
// {
//     setTimeout(()=>
//                 { 
//                     perguntaSite(); 
//                 }, 5000);
//      setInterval(function()
//      {
//           alert(anuncioAleatorio()); 
//     }, 15000);
    

    
// })();

function carregarFatos()
{
    var fatos = new Array(
      "Todos são peças importantes no trabalho em equipe, cada um representa uma pequena parcela do resultado final, quando um falha, todos devem se unir, para sua reconstrução.",
      "Se quer ir rápido, vá sozinho. Se quer ir longe, vá em grupo.",
      "Liderança não te torna especial o especial é aquele grupo sem ou com o líder trabalhar em equipe, porque o dever do líder é fazer todos trabalharem juntos.",
      "Pessoas normais produzem resultados normais. Pessoas diferentes produzem resultados extraordinários",
      "Reunir-se é um começo, permanecer juntos é um progresso, e trabalhar juntos é um sucesso"  
    );
     
    sortearFato(fatos);
}

function sortearFato(lista)
{
    var indiceAleatorio = Math.floor(Math.random() * lista.length);
    var fatoSorteado = lista[indiceAleatorio];
    revelarFato(fatoSorteado);
}

function revelarFato(fato)
{
    document.getElementById("fatos").innerHTML = "<p id=\"fatos\" class=\"left-align light\">"+fato+"</p>";
    
}

function perguntaSite()
{
    var resposta = prompt("Você conchece alguém dessa página?...");

    if(resposta.toUpperCase()=="SIM")
    {
        avalienos();
    }
}

function avalienos()
{
    if(confirm("Gostaria de fazer uma avaliação sobre nós e/ou sobre o site?"))
    {
        location.href = "../avalie-nos/avalie-nos.html";
    }
}

function anuncioAleatorio()
{
    var anuncios = new Array("SERQ - Count on Us.... Count With Us",
                             "UTFPR - Não só uma Universidade... Mas sim Técnologica",
                             "TSI - O Curso feito pelos melhores programadores da região... Disponibilizado na UTFPR-GP",
                             "TECNOLINK - Senta que la vem problema... E nós temos a solução...");
    
    var indiceAleatorio = Math.floor(Math.random() * anuncios.length);
    var anuncioSorteado = anuncios[indiceAleatorio];
    return anuncioSorteado;
}