const request = require('supertest')
var chai = require('chai')
chai.use(require('chai-json-schema'))

const assert = chai.assert  
const fs = require('fs') 

describe('API test for "reqres.in"', () => {
    it('Test - GET User Details by User Id', async () => {
        const response = await request("https://reqres.in").get("/api/users/9")
        console.log(response.statusCode);
        console.log(response.body);

        assert.equal(response.statusCode, 200);
        assert.equal(response.body.data.id, "9")
        assert.equal(response.body.data.email, "tobias.funke@reqres.in")

        const schemaPath =  "resources/get-user-details-schema.json"
        const responseJsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'))
        assert.jsonSchema(response.body, responseJsonSchema)
    });
    
    it('Test - POST Create New User', async () => {
        const body = {
            "name": "morpheus",
            "job": "leader"
        }
        const response = await request("https://reqres.in").post("/api/users").send(body)
        console.log(response.statusCode);
        console.log(response.body);

        assert.equal(response.statusCode, 201);
        assert.equal(response.body.name, "morpheus")
        assert.equal(response.body.job, "leader")

        const schemaPath =  "resources/post-create-user-schema.json"
        const responseJsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'))
        assert.jsonSchema(response.body, responseJsonSchema)
    });
});