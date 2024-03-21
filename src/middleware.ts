// import { NextResponse } from "next/server";

// export function middleware(request: Request){
    
//     console.log('Middleware!')
    
//     console.log(request.method)
//     console.log(request.url)

//     const origin = request.headers.get('origin')
//     console.log(origin)

//     return NextResponse.next()
// }

// /*
//  ✓ Ready in 7.5s
//  ○ Compiling /page ...
//  ✓ Compiled /page in 5.5s (484 modules)
//  ✓ Compiled in 696ms (234 modules)
//  ✓ Compiled /favicon.ico/route in 1176ms (500 modules)
//  ✓ Compiled /todos/[id]/route in 334ms (298 modules)
// Terminate batch job (Y/N)? 
// ^C
// PS D:\Nextjs\next08> 
//  *  History restored 


// > next08@0.1.0 dev
// > next dev

//   ▲ Next.js 13.5.4
//   - Local:        http://localhost:3000

//  ○ Compiling /page ...
//  ✓ Compiled /page in 6.7s (484 modules)        
//  ✓ Compiled in 1488ms (234 modules)

// Terminate batch job (Y/N)? Y
// PS D:\Nextjs\next08> cd ..
// PS D:\Nextjs>            
//  *  History restored 


// up to date, audited 329 packages in 2s
// 115 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS D:\Nextjs\next09> npm run dev

// > next08@0.1.0 dev
// > next dev

//   ▲ Next.js 13.5.4
//   - Local:        http://localhost:3000

//  ✓ Ready in 5.8s
//  ✓ Compiled /src/middleware in 1149ms (54 modules)
// Middleware!
// GET
// http://localhost:3000/
// null
//  ○ Compiling /page ...
//  ✓ Compiled /page in 6.9s (493 modules)
//  ✓ Compiled in 547ms (234 modules)
// Middleware!
// GET
// http://localhost:3000/vercel.svg
// null
// Middleware!
// GET
// http://localhost:3000/_next/static/css/app/layout.css?v=1696520983603
// null
// Middleware!
// GET
// http://localhost:3000/next.svg
// null
// Middleware!
// GET
// http://localhost:3000/_next/static/chunks/webpack.js?v=1696520983603
// null
// Middleware!
// GET
// http://localhost:3000/_next/static/chunks/main-app.js?v=1696520983603
// null
// Middleware!
// GET
// http://localhost:3000/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2
// http://localhost:3000
// Middleware!
// GET
// http://localhost:3000/_next/static/chunks/app-pages-internals.js
// null
// Middleware!
// GET
// http://localhost:3000/_next/static/chunks/app/page.js
// null
// Middleware!
// GET
// http://localhost:3000/favicon.ico
// null
//  ✓ Compiled /favicon.ico/route in 2.1s (500 modules)
// Middleware!
// GET
// http://localhost:3000/_next/static/webpack/601f544064ba1bb1.webpack.hot-update.json
// null
// Middleware!
// GET
// http://localhost:3000/_next/static/webpack/webpack.601f544064ba1bb1.hot-update.js
// null*/








// part-2
// import { NextResponse } from "next/server";

// export function middleware(request: Request){
    
//     console.log('Middleware!')
    
//     console.log(request.method)
//     console.log(request.url)

//     const origin = request.headers.get('origin')
//     console.log(origin)

//     return NextResponse.next()
// }

// export const config = {
//     //matcher: '/app/:path',// it include path a/d or a/c but not a/d/b or a/c/b
//     matcher: '/app/:path*',// it include path a/d/b or a/c/b
// }



import { NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'
? ['https://www.yoursite.com', 'https://yoursite.com']
: ['http://localhost:3000', 'https://www.google.com']

export function middleware(request: Request){
    
    const origin = request.headers.get('origin')
    console.log(origin)

    if(origin && !allowedOrigins.includes(origin)){
        return new NextResponse(null,{
            status:400,
            statusText:'Origin is not present',
            headers:{
                'Content-Type': 'text/plain'
            }
        })
    }
    
    console.log('Middleware!')
    
    console.log(request.method)
    console.log(request.url)


    return NextResponse.next()
}

export const config = {
    matcher: '/app/:path*',
}