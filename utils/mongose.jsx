const mongoose = require('mongoose');
const Pokemon = require('./pokeSchema.jsx');

  



main().catch(err => console.log(err));
async function main() {
    const uri = "mongodb+srv://StreatRazor:G8jzcGJuKBlZyfl5@pokefight.y38z2e2.mongodb.net/?retryWrites=true&w=majority";
    const result = await mongoose.connect(uri);
    console.log(result.find())
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// console.log()