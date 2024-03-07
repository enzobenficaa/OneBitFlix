import express from "express"
import { sequelize } from "./database"
import { adminJs, adminJsRouter } from "./adminJs"

const app = express()
app.use(adminJs.options.rootPath,adminJsRouter)
app.use(express.static("public"))

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    sequelize.authenticate().then(()=>{
        console.log(`DB connection successfull`)
    })
    console.log(`Server started sucessfully at port ${PORT}`)
})