import { serveDir } from "https://deno.land/std@0.207.0/http/file_server.ts"

Deno.serve((req) =>  {serveDir(req, {
        fsRoot: "./public"
    });
});

// deno run --allow-net server.ts
