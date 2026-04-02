// "use cache"

// import { cacheLife } from "next/cache"

// export default async function Page() {
//   cacheLife({
//     stale: 5,
//     revalidate: 10,
//   })

//   const data = await fetch("https://api.example.com/posts").then(r => r.json())

//   return <pre>{JSON.stringify(data, null, 2)}</pre>
// }