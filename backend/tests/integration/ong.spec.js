const request = require('supertest');
const app = require('../../src/app');
const connection = require ('../../src/database/connection');


describe('ONG', () =>{
    beforeEach(async () =>{
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });


    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"Ong de test 2",
                email: "contato@asdas.com",
                whatsapp: "51985831741",
                city: "Osório",
                uf: "RS"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});