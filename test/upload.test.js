const request = require('supertest');
const { app, server } = require('../server');

describe('File Upload', () => {
  it('should upload a file successfully', async () => {
    const response = await request(app)
      .post('/upload')
      .attach('file', './testData/TestImage.png');

    expect(response.status).toBe(200);
    expect(response.text).toContain('File uploaded successfully');
  });

  it('should return an error if no file is uploaded', async () => {
    const response = await request(app)
      .post('/upload');

    expect(response.status).toBe(400);
  });
});

afterAll((done) => {
  server.close(done);
});