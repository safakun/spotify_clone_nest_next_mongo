import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
   try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        app.enableCors();

        await app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
   } catch (e) {
       console.log(e)
   }
}

start();