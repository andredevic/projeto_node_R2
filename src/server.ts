import { app } from './app'
import { env } from './env'
app
  .listen({
    port: env.PORT,
    host: '0.0.0.0', // ⬅️ ISSO É ESSENCIAL!
  })
  .then(() => {
    console.log(`HTTP Server Running on port ${env.PORT}`)
  })
