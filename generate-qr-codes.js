import QRCode from 'qrcode';
import { products } from './src/data/products.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base URL for the website (can be changed for production)
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

// Directory to save QR codes
const QR_DIR = join(__dirname, 'qr-codes');

async function generateQRCodes() {
  try {
    // Create qr-codes directory if it doesn't exist
    await mkdir(QR_DIR, { recursive: true });
    console.log(`Created directory: ${QR_DIR}`);

    // Generate QR code for each product
    for (const [productId, product] of Object.entries(products)) {
      const productUrl = `${BASE_URL}/#/${productId}`;
      const qrCodePath = join(QR_DIR, `${productId}-qr.png`);
      
      console.log(`Generating QR code for ${product.name}...`);
      console.log(`  URL: ${productUrl}`);
      
      await QRCode.toFile(qrCodePath, productUrl, {
        errorCorrectionLevel: 'H',
        type: 'png',
        width: 500,
        margin: 2,
        color: {
          dark: '#4A4A4A',
          light: '#FFFFFF'
        }
      });
      
      console.log(`  ✓ Saved to: ${qrCodePath}\n`);
    }

    console.log('✅ All QR codes generated successfully!');
    console.log(`📁 QR codes saved in: ${QR_DIR}`);
  } catch (error) {
    console.error('Error generating QR codes:', error);
    process.exit(1);
  }
}

generateQRCodes();

