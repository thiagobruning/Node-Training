const service = require('./service');

main()

async function main()
{
    try {
        const result = await service.getPeoples('a');
        const names = []

        // FOR
        for(let i=0; i<result.results.length - 1; i++) {
            const people = result.results[i]
            names.push(people.name)
        }

        // FOR IN [BEST PERFORMANCE]
        for(let i in result.results) {
            const people = result.results[i]
            names.push(people.name)
        }

        // FOR OF
        for(people of result.results) {
            names.push(people.name)
        }

        console.log('names: ', names)
    }
    catch(error) {
        console.log('Ops!', error)
    }
}