const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { app, server } = require('../server');

describe('File Upload', () => {

    it("should upload a file successfully", async () => {
        const filePath = path.join(__dirname, 'testData/TestImage.png');
        const res = await request(app)
            .post('/upload')
            .attach('file', filePath);
            expect(res.status).toBe(200);
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