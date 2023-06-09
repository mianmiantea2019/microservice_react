import request from 'supertest';
import app from '../index';


describe('POST /posts', () => {
  beforeEach(() => {
    const db = [];
  });

  it('should create a new post', async () => {
    const response = await request(app)
      .post('/posts')
      .send({ title: 'My new post' });
      
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title', 'My new post');
  });
});