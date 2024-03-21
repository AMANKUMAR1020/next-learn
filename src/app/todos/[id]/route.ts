// import { NextApiRequest, NextApiResponse } from "next";

// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// export default async function handler(request: NextApiRequest, response: NextApiResponse) {
//   const id = request.query.id;

//   const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
//   const todo = await res.json();

//   if (!todo.id) {
//     return response.status(404).json({
//       message: "Todo not found",
//     });
//   }

//   return response.status(200).json(todo);
// }








import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

    const todo: Todo = await res.json()

    if (!todo.id) return NextResponse.json({ "message": "Todo not found" })

    return NextResponse.json(todo)
}