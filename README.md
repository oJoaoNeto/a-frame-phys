# Física do Barco e Personagem

## Introdução
Este projeto utiliza a biblioteca [A-Frame](https://aframe.io) para criar uma cena em 3D com simulação física. A cena contém um barco, um plano representando o chão e esferas para testar a interação física. Tentamos implementar o modelo do personagem, mas não conseguimos a tempo.

## Dificuldades Encontradas

### 1. Compatibilidade da Física
- A biblioteca `aframe-physics-system` só funciona corretamente em versões antigas do A-Frame. Versões acima da 1.2 geram dois problemas principais:
  1. **Erro ao acessar a biblioteca online**: 
     - O sistema não consegue localizar a biblioteca como se ela não estivesse disponível.
  2. **Erro ao carregar a física localmente**: 
     - Ao baixar e usar o arquivo localmente, outro erro é gerado, e não foi possível resolvê-lo a tempo.

### 2. Implementação das Cores no Barco
- Enfrentamos uma pequena dificuldade na implementação das cores, pois o A-Frame não consegue modificar diretamente objetos no formato `gltf`. Foi necessário implementar um código adicional para lidar com isso, mas conseguimos resolver rapidamente utilizando a documentação oficial.

### 3. Implementação do Personagem
- Durante o desenvolvimento, tivemos dificuldades na modelagem do personagem para o jogo. Isso impediu sua inclusão no código final.

