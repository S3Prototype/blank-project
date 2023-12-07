
export default function handler(request, context) {
  return new Response(`Hello there, from ${request.url} mjs I'm an Edge Function!`);
}
 
export const config = {
  matcher: '/',
};