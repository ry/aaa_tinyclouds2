addEventListener("fetch", (event) => {
  const json = JSON.stringify(Deno.env.toObject());

  event.respondWith(
    new Response(json, { headers: { "content-type": "application/json" } }),
  );
});
