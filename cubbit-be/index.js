// Require the framework and instantiate it
const fastify = require('fastify')({logger: process.env.LOGGER | true})
const connectionString = "mysql://" + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + "@" + process.env.DATABASE_HOST + "/" + process.env.DATABASE_SCHEMA
const {uuid} = require('uuidv4');

fastify.register(require('fastify-mysql'), {
    connectionString
})

// Declare a route
fastify.get('/v1/files/:id', async (request, reply) => {
    fastify.mysql.query("SELECT * from files where id = ?", [request.params.id],
        function onResult(err, result) {

            if (err) {
                reply.code(500).send({error: "error.internal"})
            }

            if (result && result.length > 0) {
                reply.code(200).send(result[0]);
            } else {
                reply.code(404).send({error: "error.notFound"})
            }

        }
    )
})

const bodyJsonSchema = {
    type: 'object',
    required: ['name', 'content_type', 'size', 'content'],
    properties: {
        name: {type: 'string'},
        content_type: {type: 'string'},
        size: {type: 'integer'},
        content: {type: 'string'}
    }
}

const schema = {
    body: bodyJsonSchema
}

fastify.post('/v1/files', {schema}, async (request, reply) => {

    const newFileUUID = uuid()
    fastify.mysql.query("INSERT INTO files (id, content, name, size, content_type) values (?,?,?,?,?)", [
        newFileUUID,
        request.body.content,
        request.body.name,
        request.body.size,
        request.body.content_type
    ], function onResult(err, result) {

        if (err) {
            reply.code(500).send({error: "error.internal"})
        }

        if (result) {
            reply.code(201).send({id: newFileUUID})
        }

    });

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

start().then(r => {
})