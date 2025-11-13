# Add Missing Columns to Books Table

## Important: Run this SQL in Supabase

Your `Books` table is missing the following columns that the app needs:
- `price` - Book price
- `image_url` - Book cover image
- `payment_link` - Payment/purchase link

## How to Add Columns

1. Go to your Supabase dashboard
2. Click **SQL Editor**
3. Click **New Query**
4. Copy-paste this SQL:

```sql
ALTER TABLE "Books"
ADD COLUMN IF NOT EXISTS price DECIMAL(10, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS image_url TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS payment_link TEXT DEFAULT '';
```

5. Click **Run**
6. You should see success message

## That's it!

After running this SQL, your table will be complete and ready for the app.

Then tell me and I'll test the API again!
