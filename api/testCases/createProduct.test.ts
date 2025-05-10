import { actorCalled } from '../actors/actor';
import { createProduct } from '../tasks/createProduct';

describe('API Test - Crear Producto', () => {
  it('debería crear un producto exitosamente', async () => {
    await actorCalled('QA Tester').attemptsTo(
      createProduct({
        codigo: '123456',
        nombre: 'Producto de prueba',
        descripcion: 'Un producto para pruebas',
        codigoDeBarras: '7891011'
      })
    );
  });
});