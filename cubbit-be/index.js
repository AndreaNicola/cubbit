// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const model = require("./model/model")

// Declare a route
fastify.get('/v1/files', async (request, reply) => {
    return { hello: 'world get' }
})

fastify.post('/v1/files', async (request, reply) => {
    return { hello: 'world post' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(5000, '0.0.0.0')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

model.init();
start()