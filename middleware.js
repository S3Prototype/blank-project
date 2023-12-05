
export default function handler(request, context) {
  context.waitUntil(getAlbum().then((json) => console.log({ json })));
 
  return new Response(`Hello there, from ${request.url} I'm an Edge Function!`);
}
 
export const config = {
  matcher: '/',
};

const wait = (number) => new Promise((resolve) => setTimeout(resolve, ms));
 
async function getAlbum() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1');
  await wait(10000);
  return res.json();
}