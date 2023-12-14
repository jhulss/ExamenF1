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


});
