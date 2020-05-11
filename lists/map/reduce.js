const { getPeoples } = require('../for-forin/service')

main()

async function main()
{
    try {
        const { results } = await getPeoples('a')
        const heights = results.map((item) => parseInt(item.height)) // return height of each people
        
        console.log('Pesos: ', heights);
        
        const total = heights.reduce((previous, next) =>{
            return previous + next
        })

        console.log(total);
        
    }
    catch(error) {
        console.error('Ops!', error)
    }
}