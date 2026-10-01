function processarLeituras(leituras) {
  const alertas = leituras.filter(l => l > 30.0);
  const validas = leituras.filter(l => l <= 30.0);
  
  let soma = 0;
  for (let i = 0; i < validas.length; i++) {
    soma = soma + validas[i];
  }
  
  let media = 0;
  if (validas.length > 0) {
    media = soma / validas.length;
  }
  
  return {
    alertas: alertas,
    mediaValida: media
  };
}