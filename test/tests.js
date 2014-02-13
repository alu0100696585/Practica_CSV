var assert = chai.assert; // Linea para realizar los asertos correspondientes

suite('Analizador CSV.', function() {
    test('Ejemplo completo ( matriz de 3*3 ):', function() {
        original.value =    "\"producto\", \"precio\"  \"fecha\"\n\"camisa\", \"4,3\", \"14/01\"\n\"libro de O\"Reilly\", \"7,2\" \"13/02\"";
        calculate();
        assert.deepEqual(finaltable.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr>  <td>producto</td>   <td>precio</td>   <td>fecha</td>   </tr>\n<tr>  <td>camisa</td>   <td>4,3</td>   <td>14/01</td>   </tr>\n<tr class="error">  <td>libro de O</td>   <td>Reilly</td>   <td>7,2</td>   <td>13/02</td>   </tr>\n</tbody></table>');
    });
    test('Una fila: (una matriz de solo una fila)', function() {
        original.value = "\"Loro\", \"Animal\" ";
        calculate();
        assert.deepEqual(finaltable.innerHTML,'<p>\n</p><table class="center" id="result">\n<tbody><tr>  <td>Loro</td>   <td>Animal</td>   </tr>\n</tbody></table>');
    });
    test('Error!, alerta ( si se ha producido un error al introducir la matriz)', function() {
        original.value = "hola, , \n adios";
        calculate();
        assert.deepEqual(fallo.innerHTML, "");
    });
});