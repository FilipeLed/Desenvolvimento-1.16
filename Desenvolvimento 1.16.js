const prompt = require("prompt-sync")();


function eleicao() {
    const msg = 'Digite o número do candidato que deseja votar (ou 0 para voto em branco).\nPara finalizar a votação, digite FIM.';
    const candidatos = {
      889: "candidato_X",
      847: "candidato_Y",
      515: "candidato_Z",
      0: "branco",
    };
  
    let votos = {
      candidato_X: 0,
      candidato_Y: 0,
      candidato_Z: 0,
      branco: 0,
      nulo: 0,
    };
  
    while (true) {
      console.log(msg)
      const voto = prompt("");
  
      if (voto.toUpperCase() === "FIM") {
        break;
      }
  
      const numeroVoto = parseInt(voto);
  
      if (isNaN(numeroVoto)) {
        console.log("Voto inválido. Por favor, digite apenas números ou 'FIM' para finalizar a votação.");
        continue;
      }
  
      if (numeroVoto === 0) {
        votos.branco++;
      } else if (numeroVoto in candidatos) {
        votos[candidatos[numeroVoto]]++;
      } else {
        votos.nulo++;
      }
    }
  
    console.log("--- Resultado da Eleição ---");
    for (const candidato in votos) {
      console.log(`${candidato}: ${votos[candidato]} votos`);
    }
  
    const vencedor = Object.keys(votos).reduce((a, b) => (votos[a] > votos[b] ? a : b));
    console.log(`Vencedor: ${vencedor}`);
  }
  
  // Chamada da função eleicao
  eleicao();

