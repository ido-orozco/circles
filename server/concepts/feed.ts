import { ObjectId } from "mongodb";
import DocCollection, { BaseDoc } from "../framework/doc";
// import errors

export interface FeedDoc extends BaseDoc {
    post: ObjectId
}

export default class FeedConcept {
    public readonly allPosts = new DocCollection<FeedDoc>("feed");
}

