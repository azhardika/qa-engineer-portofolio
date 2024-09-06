const request = require('supertest')
var chai = require('chai')
chai.use(require('chai-json-schema'))

const assert = chai.assert  
const fs = require('fs') 

describe('API test for "reqres.in"', () => {
    it('Test - DELETE User by User Id', async () => {
        const response = await request("https://reqres.in").delete("/api/users/12")
        console.log(response.statusCode);
        console.log(response.body);

        assert.equal(response.statusCode, 204);
        assert.deepEqual(response.body, {})
    });
    
    it('Test - PUT Update User Details by User Id', async () => {
        const body = {
            "name": "morpheus junior",
            "job": "senior leader"
        }
        const response = await request("https://reqres.in").put("/api/users/9").send(body)
        console.log(response.statusCode);
        console.log(response.body);

        assert.equal(response.statusCode, 200);
        assert.equal(response.body.name, "morpheus junior")
        assert.equal(response.body.job, "senior leader")

        const schemaPath =  "resources/put-update-user-details-schema.json"
        const responseJsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'))
        assert.jsonSchema(response.body, responseJsonSchema)
    });
});