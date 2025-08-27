import express from 'express'
import employees from '#db/employees'

const employeesRouter = express.Router()
export default employeesRouter

employeesRouter.get('/', (req, res) => {
    res.status(200).send(employees)
})

employeesRouter.post('/', (req, res) => {
    // If there is no body or body.name return 400
    if (!req.body || !req.body.name) return res.sendStatus(400)

    employees.push({ id: employees.length + 1, name: req.body.name })
    res.status(201).send(employees[employees.length - 1])
})

employeesRouter.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length)
    res.send(employees[randomIndex])
})

employeesRouter.get('/:id', (req, res) => {
    const { id } = req.params

    const employee = employees.find((emp) => emp.id === +id)
    if (!employee) return res.status(404).send('Employee not found')

    res.send(employee)
})
