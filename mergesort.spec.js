describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([8, 6, 5, 3, 1, 2, 7, 4])).toEqual([
      [8, 6, 5, 3],
      [1, 2, 7, 4],
    ]);
  });
  it("es capaz de dividir el arreglo impar en dos partes", function () {
    expect(split([8, 6, 5, 3, 1, 2, 7, 4, 9])).toEqual([
      [8, 6, 5, 3],
      [1, 2, 7, 4, 9],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(Merge([3, 5, 6, 8], [1, 2, 4, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe("mergeSort", function () {
  it("genera una recursión que repite split y merge para desarmar el Arreglo y luego armarlo ordenadamente", function () {
    expect(mergeSort([8, 6, 5, 3, 1, 2, 7, 4])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });
});
