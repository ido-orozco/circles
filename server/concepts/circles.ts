import DocCollection, { BaseDoc } from "../framework/doc";
import { FriendshipDoc } from "./friend";
// import errors

export interface CirclesDoc extends BaseDoc {
    name: string;
    friends: Array<FriendshipDoc>
}

export default class CirclesConcept {
    public readonly circles = new DocCollection<FriendshipDoc>("circles");

}