const { client } = require('pg')
const { client } = new client()
await client.connect()
const res = await client.query('SELECT $1::text as message', ['hello this is thefirst project'])
console.log(res.rows[0].message)
await client.end()

// const { Client } = require('pg')
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()