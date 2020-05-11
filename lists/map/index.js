const service = require('../for-forin/service');

main()

async function main()
{
    try {
        const result = await service.getPeoples('a')
        // const names = []

        // FOR EACH 
        // result.results.forEach(function (item) {
        //     names.push(item.name)
        // })

        // MAP (without external variables)
        // const names = result.results.map(function (item){
        //     return item.name
        // });

        //MAP ARROW FUNCTION
        const names = result.results.map((people, another) => people.name)

        console.log('names: ', names)
    }
    catch(error) {
        console.error('Ops!', error)
    }
}