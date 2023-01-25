import { client } from "../index.js";
export async function moviesUpdateById(id, data) {
  return await client
    .db("movies")
    .collection("movies")
    .updateOne({ _id: id }, { $set: data });
}
export async function moviesDeleteById(id) {
  return await client
    .db("movies")
    .collection("movies")
    .deleteOne({ _id: id });
}
export async function moviesPost(data) {
  return await client.db("movies").collection("movies").insertMany(data);
}
export async function moviesGet(request) {
  return await client
    .db("movies")
    .collection("movies")
    .find(request.query)
    .toArray();
}
export async function moviesGetById(id) {
  return await client
    .db("movies")
    .collection("movies")
    .findOne({ _id: id });
}
