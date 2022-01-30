require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("61ed0805708a124240e893b5").then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(`Remaining tasks: ${result}`)
// }).catch((e) => {
//     console.error(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed: false} )
    return count
}

deleteTaskAndCount("61ed07719bc3e6409b87c527").then((count) => {
    console.log(count) 
}).catch((e) => {
    console.error(e)
})