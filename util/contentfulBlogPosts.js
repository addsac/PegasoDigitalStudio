const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchBlogPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost"
  })

  if (entries) return entries
  
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchBlogPosts }
