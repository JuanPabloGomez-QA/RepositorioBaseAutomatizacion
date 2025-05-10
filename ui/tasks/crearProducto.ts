import { Task } from '@serenity-js/core';

export const crearProductoEnUI = (page, { codigo, nombre, descripcion, codigoDeBarras }) =>
  Task.where(`#actor crea un producto en la UI`,
    async () => {
      await page.goto('http://localhost:3000/productos/crear');
      await page.fill('#codigo', codigo);
      await page.fill('#nombre', nombre);
      await page.fill('#descripcion', descripcion);
      await page.fill('#codigoDeBarras', codigoDeBarras);
      await page.click('#guardar');
    }
  );