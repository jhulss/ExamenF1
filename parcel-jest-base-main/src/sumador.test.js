import ocurrencia from "./sumador.js";
import sumar from "./sumador.js";

describe("Contar ocurrencias", () => {
  it("deberia devolver un recuento vacio ya que la frase está vacia", () => {
    const resp = new ocurrencia();
    expect(resp.contarPalabras('')).toEqual({});
  });

  it("deberia devolver un objeto, teniendo como clave cada una de las palabras y el numero de ocurrencias de la misma", () => {
    const resp = new ocurrencia();
    expect(resp.contarPalabras('esta es una prueba')).toEqual({esta: 1, es: 1, una: 1, prueba: 1});
  });

  it("deberia contar las ocurrencias de una palabra aun si la palabra se repite y esta en mayuscula", () => {
    const resp = new ocurrencia();
    expect(resp.contarPalabras('esta es una prueba PRUEBA Prueba')).toEqual({esta: 1, es: 1, una: 1, prueba: 3});
  });

  it("deberia contar las ocurrencias de una palabra separada por guiones ", () => {
    const resp = new ocurrencia();
    expect(resp.contarPalabras('esta es una prueba - PRUEBA - Prueba')).toEqual({esta: 1, es: 1, una: 1, prueba: 3});
  });

  it("deberia contar las ocurrencias de una palabra separada por comas ", () => {
    const resp = new ocurrencia();
    expect(resp.contarPalabras('esta es una prueba, PRUEBA, Prueba')).toEqual({esta: 1, es: 1, una: 1, prueba: 3});
  });

});
