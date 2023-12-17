import { ObjectId } from "mongoose";

export class CreateCommentDto {
    readonly _id: ObjectId;
    readonly username: string;
    readonly text: string;
    readonly trackId: ObjectId;
}