import { ObjectId } from "mongodb";
import { BaseDoc } from "../framework/doc";
// import errors

export interface CommentDoc extends BaseDoc {
    post: ObjectId
    user: ObjectId
    content: string
}

export default class CommentConcept {

}