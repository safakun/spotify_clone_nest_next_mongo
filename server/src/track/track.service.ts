import {Injectable } from "@nestjs/common";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model, ObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Comment } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<Track>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>
    ) {}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0});
        return track;
    }

    async getAll(): Promise<Track[]> {
       const tracks = this.trackModel.find();
       return tracks;
    }

    async getOne(id: ObjectId): Promise<Track> {
        const track = this.trackModel.findById(id);
        return track;
    }

    async delete(id: ObjectId): Promise<string> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return 'Track was deleted';
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto});
        track.comments.push(comment.id);
        await track.save();
        return comment;
    }
}