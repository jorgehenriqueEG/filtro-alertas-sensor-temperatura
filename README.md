# filtro-alertas-sensor-temperatura

## Descrição do Problema
Um sistema de monitoramento de estufas gera leituras de temperatura em intervalos fixos. O objetivo é filtrar apenas as leituras que excedem o limite de segurança e calcular a média das leituras válidas.

## Requisitos
- Receber um array de leituras de temperatura.
- Filtrar leituras maiores que 30.0°C.
- Calcular a média aritmética das leituras remanescentes.

## Exemplo de Uso
const leituras = [25.5, 32.1, 28.0, 35.5, 29.0];
const resultado = processarLeituras(leituras);
console.log(resultado);

Saída:
{
  "alertas": [32.1, 35.5],
  "mediaValida": 27.5
}