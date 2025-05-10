import { test } from '@playwright/test';
import { actorCalled } from '../actors/actor';
import { crearProductoEnUI } from '../tasks/crearProducto';

test('Crear producto en la UI', async ({ page }) => {
  await actorCalled('QA Tester').attemptsTo(
    crearProductoEnUI(page, {
      codigo: '123456',
      nombre: 'Producto UI',
      descripcion: 'Descripción UI',
      codigoDeBarras: '987654'
    })
  );
});