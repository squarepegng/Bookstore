// Netlify Function: get-books
// Returns all books from Supabase

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('SUPABASE_URL or SUPABASE_ANON_KEY not set in Netlify environment')
}

const supabase = createClient(supabaseUrl, supabaseKey)

exports.handler = async function (event, context) {
  try {
    const { data, error } = await supabase
      .from('Books')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
  } catch (err) {
    console.error('get-books error', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
