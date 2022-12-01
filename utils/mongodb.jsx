const { MongoClient, ServerApiVersion } = require('mongodb');


async function getPokemon(client){
    const db = await client.db('Pokemons')
    const Pokemon = await db.collection('Pokemon').find({}).forEach(ele => console.log(ele))

}  
 

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    
    const uri = "mongodb+srv://StreatRazor:G8jzcGJuKBlZyfl5@pokefight.y38z2e2.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  getPokemon(client)
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);