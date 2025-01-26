const request = require('supertest');
const path = require('path');
const { app, server } = require('../src/app/server');

describe('File Upload', () => {

    it("should upload a file successfully", async () => {
        const filePath = path.join(__dirname, 'testData/TestImage.png');
        const res = await request(app)
            .post('/upload')
            .attach('file', filePath);
            expect(res.status).toBe(200);
        });

  it('try upload without file', async () => {
    const response = await request(app)
      .post('/upload');

    expect(response.status).toBe(400);
  });
});

describe('File Download', () => {

     it('should fetch the list of files', async () => {
            const response = await request(app)
                .get('/files');

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);

            // Check if the response contains expected file names
            const fileList = response.body;

            // log the file names to see them
            console.log('Fetched files:', fileList);
        });

});

afterAll((done) => {
  server.close(done);
});