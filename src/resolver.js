// import { Dog } from "./models/dog";

// export const resolvers = {
//     Query: {
//         helloWorld:() => 'hello world',
//         getDogs: () => Dog.find()

//     },
//     Mutation: {
//         createDog: async(_, { name }) => {
//             const puppy = new Dog({ name });
//             await puppy.save();
//             return puppy;
//         }
//     }
// }

import { Dog } from "./models/dog";
import { connectDB } from './db';


export const resolvers = {
    Query: {
        helloWorld:() => 'hello world',
        getDogs: async () => {
            let db
            let dogs = []
            try {
                db = await connectDB()
                dogs = await db.collection('dogs').find().toArray()
            } catch (error) {
                
            }

            return dogs
        }

    },
    Mutation: {
        createDog: async(_, { name }) => {
            const puppy = new Dog({ name });
            await puppy.save();
            return puppy;
        }
    }
}