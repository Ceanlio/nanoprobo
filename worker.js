// Enhanced Cloudflare Worker to serve static files with proper headers
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let targetPath = url.pathname;
    
    // Handle root path
    if (targetPath === '/') {
      targetPath = '/index.html';
    }
    
    // Handle paths without extensions (but not API routes)
    if (!targetPath.includes('.') && !targetPath.startsWith('/api/')) {
      targetPath += '.html';
    }
    
    // Try to fetch from the static files
    try {
      const targetUrl = `https://a8c6a7ff.nanoprobo.pages.dev${targetPath}`;
      console.log('Fetching:', targetUrl);
      
      const response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Cloudflare-Worker/1.0',
        },
      });
      
      if (response.ok) {
        // Create a new response with proper headers
        const newResponse = new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            ...response.headers,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        });
        
        return newResponse;
      } else {
        console.log('Response not ok:', response.status, response.statusText);
        // Return a simple HTML response for now
        return new Response(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Nanoprobo - AI Solutions</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
              <h1>Nanoprobo</h1>
              <p>AI Solutions Platform</p>
              <p>Worker is running but having issues fetching static files.</p>
              <p>Target URL: ${targetUrl}</p>
              <p>Response Status: ${response.status}</p>
            </body>
          </html>
        `, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
          }
        });
      }
    } catch (error) {
      console.error('Error fetching static file:', error);
      
      // Return a simple HTML response for errors
      return new Response(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Nanoprobo - AI Solutions</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <h1>Nanoprobo</h1>
            <p>AI Solutions Platform</p>
            <p>Worker is running but encountered an error.</p>
            <p>Error: ${error.message}</p>
          </body>
        </html>
      `, {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        }
      });
    }
  }
};
