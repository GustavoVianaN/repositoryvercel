import { chefs } from "../../data/data";

export async function GET(){
    return Response.json(chefs);
}