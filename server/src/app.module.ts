import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";


@Module({
  imports: [TrackModule,
    MongooseModule.forRoot(`mongodb://root:rootpassword@localhost:27017/test?authSource=admin`),
    FileModule
  ]
})
export class AppModule {

}