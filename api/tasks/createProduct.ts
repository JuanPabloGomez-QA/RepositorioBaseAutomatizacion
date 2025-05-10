import { Task } from '@serenity-js/core';
import request from 'supertest';

export const createProduct = ({ codigo, nombre, descripcion, codigoDeBarras }) =>
  Task.where(`#actor crea un producto`,
    async () => {
      await request('http://localhost:3000')
        .post('/productos/crear')
        .send({ codigo, nombre, descripcion, codigoDeBarras })
        .expect(200);
    }
  );