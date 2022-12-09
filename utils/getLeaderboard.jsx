const { MongoClient} = require('mongodb');

const uri = "mongodb+srv://StreatRazor:G8jzcGJuKBlZyfl5@pokefight.y38z2e2.mongodb.net/?retryWrites=true&w=majority";
const database = 'Pokemons'
const collection = 'leaderboards'




async function getPokemon(client){
    const db = await client.db(database)
    const cursor = await db.collection(collection).find({})
    const allValues = await cursor.toArray()
    return allValues
}  
 

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Client Connected')
        // Make the appropriate DB calls
        return allValues = await getPokemon(client)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();

    }
}

module.exports = {main}














