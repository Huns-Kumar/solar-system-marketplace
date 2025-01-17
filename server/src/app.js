import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

//common middlewares
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit :"16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//import routes
import healthCheckRouter from "./routes/healthcheck.route.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/products.routes.js";
// import { errorHandler } from "./middlewares/error.middlewares.js";


// routes
app.use("/api/v1/healthCheck", healthCheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)


// app.use(errorHandler)
export {app}