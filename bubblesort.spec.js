describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("Un Arreglo desordenado que termine ordenado", function () {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it("Un Arreglo ordenado que debe mantenerse ordenado", function () {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado.", function () {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});

describe("probando spies", function () {
  it("El algoritmo para el arreglo dado deberia dar una vuelta", function () {
    spyOn(window, "swap").and.callThrough();
    // callThrough le dice al spy que utilice el método original chocolate['masticar'],
    // mientras que callFake haría una copia.
    let arr = [2, 1];
    window.bubbleSort(arr);
    expect(window.swap.calls.count()).toEqual(1);
  });
});
