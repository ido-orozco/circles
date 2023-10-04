import { ObjectId } from "mongodb";
import { BaseDoc } from "../framework/doc";
// import errors

export interface LikeDoc extends BaseDoc {
    post: ObjectId
    user: ObjectId
}

export default class LikeConcept {

}