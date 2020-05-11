const { getPeoples } = require('../for-forin/service') //extract functions with {} from module

main()

async function main()
{
    try {
        const { results } = await getPeoples('a')
        const familyLars = results.filter(function (item) {
            // false -> remove // true -> keep
            const result = item.name.toLowerCase().indexOf('lars') !== -1 //returns -1 if not found
            return result
        })

        const names = familyLars.map((item) => item.name)
        console.log(names)
    }
    catch(error) {
        console.error('Ops!', error)
    }
}