import {Injectable } from "@nestjs/common";
import { Track } from "./schemas/track.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Comment } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<Track>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>
    ) {}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0});
        return track;
    }

    async getAll() {
       // return "All tracks"
    }

    async getOne() {

    }

    async delete() {
        
    }
}