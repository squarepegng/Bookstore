// Netlify Function: add-book
// Adds a new book to Supabase. Requires ADMIN_PASSWORD in environment variables.

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('SUPABASE_URL or SUPABASE_ANON_KEY not set in Netlify environment')
}

const supabase = createClient(supabaseUrl, supabaseKey)

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }
  try {
    const body = JSON.parse(event.body || '{}')
    const adminPassword = body.adminPassword || (event.headers && (event.headers['x-admin-password'] || event.headers['X-Admin-Password']))
    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized: invalid admin password' }) }
    }

    // Accept both camelCase and snake_case field names from callers to be robust
    const {
      title,
      author,
      description = '',
      price,
      // support both imageUrl and image_url
      imageUrl = undefined,
      image_url = undefined,
      // support both paymentLink and payment_link
      paymentLink = undefined,
      payment_link = undefined
    } = body
    const finalImage = image_url ?? imageUrl ?? ''
    const finalPayment = payment_link ?? paymentLink ?? ''
    if (!title || !author || typeof price === 'undefined') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields: title, author, price' }) }
    }

    const { data, error } = await supabase
      .from('Books')
      .insert([
        {
          title,
          author,
          description,
          price: parseFloat(price),
          image_url: finalImage,
          payment_link: finalPayment
        }
      ])
      .select()

    if (error) throw error

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Book added', book: data[0] })
    }
  } catch (err) {
    console.error('add-book error', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
