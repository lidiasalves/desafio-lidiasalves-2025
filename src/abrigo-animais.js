
class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    // animais válidos
    const animaisValidos = [
      'Rex', 'Mimi', 'Fofo', 'Zero', 'Bola', 'Bebe', 'Loco'
    ];
    // brinquedos válidos
    const brinquedosValidos = [
      'RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'
    ];

    // função que verifica duplicados
    function temDuplicados(arr) {
      return new Set(arr).size !== arr.length;
    }

    // validação dos animais
    const ordemAnimaisArr = ordemAnimais.split(',').map(a => a.trim());
    if (temDuplicados(ordemAnimaisArr) || ordemAnimaisArr.some(a => !animaisValidos.includes(a))) {
      return { erro: 'Animal inválido' };
    }

    // validação dos brinquedos
    const brinquedos1Arr = brinquedosPessoa1.split(',').map(b => b.trim());
    const brinquedos2Arr = brinquedosPessoa2.split(',').map(b => b.trim());
    const todosBrinquedos = [...brinquedos1Arr, ...brinquedos2Arr];
    if (temDuplicados(brinquedos1Arr) || temDuplicados(brinquedos2Arr) || todosBrinquedos.some(b => !brinquedosValidos.includes(b))) {
      return { erro: 'Brinquedo inválido' };
    }
    // animais e seus brinquedos favoritos
    const dadosAnimais = {
      'Rex':     { tipo: 'cão',    brinquedos: ['RATO', 'BOLA'] },
      'Mimi':    { tipo: 'gato',   brinquedos: ['BOLA', 'LASER'] },
      'Fofo':    { tipo: 'gato',   brinquedos: ['BOLA', 'RATO', 'LASER'] },
      'Zero':    { tipo: 'gato',   brinquedos: ['RATO', 'BOLA'] },
      'Bola':    { tipo: 'cão',    brinquedos: ['CAIXA', 'NOVELO'] },
      'Bebe':    { tipo: 'cão',    brinquedos: ['LASER', 'RATO', 'BOLA'] },
      'Loco':    { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
    };

    // função que verifica se brinquedos favoritos aparecem na ordem correta
    function contemBrinquedosNaOrdem(brinquedosPessoa, brinquedosFavoritos, ignorarOrdem = false) {
      if (ignorarOrdem) {
        // para Loco, só precisa ter todos os brinquedos favoritos
        return brinquedosFavoritos.every(b => brinquedosPessoa.includes(b));
      }
      let idx = 0;
      for (let i = 0; i < brinquedosPessoa.length; i++) {
        if (brinquedosPessoa[i] === brinquedosFavoritos[idx]) {
          idx++;
        }
        if (idx === brinquedosFavoritos.length) return true;
      }
      return false;
    }

    // contador de animais por pessoa
    let adotadosPessoa1 = 0;
    let adotadosPessoa2 = 0;
    let lista = [];

    ordemAnimaisArr.sort(); // saída em ordem alfabética
    for (const animal of ordemAnimaisArr) {
      const info = dadosAnimais[animal];
      let podePessoa1 = contemBrinquedosNaOrdem(brinquedos1Arr, info.brinquedos, animal === 'Loco');
      let podePessoa2 = contemBrinquedosNaOrdem(brinquedos2Arr, info.brinquedos, animal === 'Loco');

      // gatos não dividem brinquedos: só pode adotar se todos brinquedos favoritos estão juntos e na ordem
      if (info.tipo === 'gato') {
        podePessoa1 = contemBrinquedosNaOrdem(brinquedos1Arr, info.brinquedos);
        podePessoa2 = contemBrinquedosNaOrdem(brinquedos2Arr, info.brinquedos);
      }

      // se ambos podem adotar, animal fica no abrigo
      if (podePessoa1 && podePessoa2) {
        lista.push(`${animal} - abrigo`);
        continue;
      }
      // limite de 3 animais por pessoa
      if (podePessoa1 && adotadosPessoa1 < 3) {
        lista.push(`${animal} - pessoa 1`);
        adotadosPessoa1++;
        continue;
      }
      if (podePessoa2 && adotadosPessoa2 < 3) {
        lista.push(`${animal} - pessoa 2`);
        adotadosPessoa2++;
        continue;
      }
      // se ninguém pode adotar, animal fica no abrigo
      lista.push(`${animal} - abrigo`);
    }
    return { lista };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
