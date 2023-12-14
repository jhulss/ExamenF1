class ocurrencia{

  contarPalabras(frase) {
    if (frase === '') {
      return {};
    }

    const palabras = frase.toLowerCase().match(/\b\w+(?:[-',;.]\w+)*\b/g);
    const conteo = {};
  
    palabras.forEach(palabra => {
      if (conteo[palabra]) {
        conteo[palabra]++;
      } else {
        conteo[palabra] = 1;
      }
    });
  
    return conteo;
  }

}

export default ocurrencia;
