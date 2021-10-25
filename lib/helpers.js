// Helper function
export function getSlug(array) {
  if(!array) return null;
  let arr = []
  array.forEach(item => {
    arr.push(item.slug)
  })
  return arr
}


export function replaceURL (oldUrl) {
  const url = oldUrl
  if(url) {
    return url
      .replace('https://voidmade.local/', '/')
      .replace('https://staging.lucasmarohn.com/', '/')
  }
  return url
}