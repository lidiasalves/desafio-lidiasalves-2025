
# Abrigo de Animais

Este projeto resolve o desafio de organizar a adoção de animais em um abrigo, aplicando regras específicas para cada animal e pessoa interessada.

## Objetivo
Encontrar pessoas aptas a adotar animais do abrigo, considerando preferências de brinquedos, restrições dos animais e regras de adoção.

## Funcionalidades
O método principal é `encontraPessoas`, que recebe:
- Brinquedos da pessoa 1 (string, separados por vírgula)
- Brinquedos da pessoa 2 (string, separados por vírgula)
- Ordem dos animais a serem considerados (string, separados por vírgula)

Exemplo de chamada:
```js
new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
```

## Regras de adoção 
- O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada
- Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada
- Gatos não dividem seus brinquedos
- Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal
- Uma pessoa não pode levar mais de três animais para casa
- Loco não se importa com a ordem dos seus brinquedos

## Estrutura do projeto
- Código principal: `src/abrigo-animais.js`
- Testes automáticos: `src/abrigo-animais.test.js`

## Como rodar?
1. Instalar o Node.js: https://nodejs.org/
2. No terminal, executar:
  ```
  npm install
  npm test
  ```
3. Os testes automáticos vão validar a solução.

## Exemplos de saída

Entrada válida:
```js
new AbrigoAnimais().encontraPessoas('RATO,BOLA','RATO,NOVELO', 'Rex,Fofo');
// Saída:
// { lista: ['Fofo - abrigo', 'Rex - pessoa 1'] }
```

Entrada inválida:
```js
new AbrigoAnimais().encontraPessoas('CAIXA,RATO','RATO,BOLA', 'Lulu');
// Saída:
// { erro: 'Animal inválido' }
```

## Testes
Os testes estão em `src/abrigo-animais.test.js` e podem ser executados com `npm test`.

## Observações
- O projeto utiliza Jest para testes automatizados.
- A estrutura de arquivos segue o padrão solicitado no desafio.

