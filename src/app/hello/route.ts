import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"

export async function GET(request: Request){

    const remaining = await limiter.removeTokens(1)
    console.log('remaining', remaining)

    const origin = request.headers.get('origin') 

    if(remaining < 0 ){
        return new NextResponse(null,{
        status:429,
        statusText: "Bus kar bhai",
        headers:{
            'Access-Control-Allow-Origin' : origin || '*',
            'Content-Type':'text/plain'
        }
        })
    }
    return new Response('Hello, Next.js!')

}







// import { NextResponse } from "next/server"
// import { limiter } from "../config/limiter"

// export async function GET(request: Request){

//     const remaining = await limiter.removeTokens(1)
//     console.log('remaining', remaining)

//     const origin = request.headers.get('origin') 

//     if(remaining < 0 ){
//         return new NextResponse(null,{
//         status:429,
//         statusText: "Bus kar bhai",
//         headers:{
//             'Access-Control-Allow-Origin' : origin || '*',
//             'Content-Type':'text/plain'
//         }
//         })
//     }
//     return new Response('Hello, Next.js!')

// }