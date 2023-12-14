import ocurrencia from "./sumador.js";
import sumar from "./sumador.js";

describe("Contar ocurrencias", () => {
  it("deberia devolver un recuento vacio ya que la frase está vacia", () => {
    const resp = new ocurrencia();
    expect(resp.contarPalabras('')).toEqual({});
  });
});
