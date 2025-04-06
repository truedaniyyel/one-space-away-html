import fs from 'fs/promises';
import path from 'path';

const headersPath = path.join(process.cwd(), 'dist', '_headers');

async function generateCSPHeader() {
  try {
    // Generate CSP header without inline and external script hashes
    const cspHeader =
      'Content-Security-Policy: ' +
      [
        "default-src 'self'",
        "object-src 'self'",
        "script-src 'self'", // Removed hash dependencies
        "connect-src 'self'",
        "style-src 'self'",
        "base-uri 'self'",
        "img-src 'self' https://ik.imagekit.io/truedaniyyel/ data:",
        "frame-ancestors 'none'",
        "worker-src 'self'",
        "manifest-src 'none'",
        "form-action 'self'",
      ].join('; ');

    // Read existing _headers file
    let headersContent = await fs.readFile(headersPath, 'utf-8');

    // Add the new CSP header
    headersContent += '\n  ' + cspHeader;

    // Write updated content back to _headers file
    await fs.writeFile(headersPath, headersContent);

    console.log('CSP header generated and _headers file updated successfully.');
  } catch (error) {
    console.error('Error generating CSP header:', error);
  }
}

generateCSPHeader();
