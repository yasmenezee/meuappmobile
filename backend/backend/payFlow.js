// controllers/payFlow.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

// ✅ Correct PagBank Sandbox endpoint (new API)
const SANDBOX_URL = 'https://sandbox.api.pagseguro.com/checkouts';
const TOKEN = process.env.PAGSEGURO_SANDBOX_TOKEN;

/**
 * Create a PagBank Checkout session
 */
export async function createCheckout(req, res) {
  try {
    const { referenceId, customer, items, redirectUrls } = req.body;

    // Validate required fields
    if (!referenceId || !customer || !items || items.length === 0) {
      console.error('Missing required fields:', { referenceId, customer, items, redirectUrls });
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    if (!TOKEN) {
      console.error('❌ PAGSEGURO_SANDBOX_TOKEN not set in .env');
      return res.status(500).json({ success: false, message: 'PagBank API token missing' });
    }

    const payload = {
      reference_id: referenceId,
      customer,
      items,
      notification_urls: [process.env.PAGSEGURO_NOTIFICATION_URL],
      redirect_urls: {
        success: "http://localhost:3001/reserva/concluida",
        failure: "http://localhost:3001/reserva/concluida" // Assuming same URL for failure, adjust if needed
      },
    };

    console.log('📦 Sending payload to PagBank API:\n', JSON.stringify(payload, null, 2));

    const response = await fetch(SANDBOX_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    // Try to parse JSON — fallback to HTML log if not possible
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseErr) {
      console.error('⚠️ PagBank returned non-JSON (likely an HTML error page):');
      console.error(text);
      return res.status(502).json({
        success: false,
        message: 'Invalid response from PagBank (HTML instead of JSON)',
      });
    }

    console.log('✅ PagBank API response:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('❌ PagBank API returned error:', data);
      return res.status(response.status).json({ success: false, data });
    }

    // Extract checkout URL
    const checkoutUrl = data.links?.find(l => l.rel === 'PAY')?.href || null;

    if (!checkoutUrl) {
      console.warn('⚠️ No checkout URL returned by PagBank.');
    }

    return res.status(200).json({
      success: true,
      checkoutUrl,
      data,
    });
  } catch (error) {
    console.error('💥 Error in createCheckout:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

/**
 * Handle PagBank payment notifications
 */
export async function handleNotification(req, res) {
  try {
    const notification = req.body;
    console.log('📩 Received PagBank notification:', JSON.stringify(notification, null, 2));

    // TODO: Update your database (e.g., set reservation as "paid")
    // using notification.reference_id and notification.status

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('💥 Notification handler error:', error);
    res.status(500).json({ success: false });
  }
}
