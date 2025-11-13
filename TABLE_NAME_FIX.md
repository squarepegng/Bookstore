# Table Name Issue

## The Problem
Supabase is looking for `public.books` (lowercase) but your table might be named `Books` (capital B).

The error says:
```
Could not find the table 'public.books' in the schema cache
Perhaps you meant the table 'public.Books'
```

## Solution

### Option 1: Rename Your Table to Lowercase (Easiest)

1. Go to Supabase **SQL Editor**
2. Run this:

```sql
-- Rename table to lowercase
ALTER TABLE "Books" RENAME TO books;
```

3. Then restart backend

### Option 2: Update Backend Code to Use Correct Table Name

If your table is `Books` (capital), edit `backend/routes/books.js` and change:

```javascript
// Change from:
.from('books')

// To:
.from('Books')
```

### Which is Your Table Name?

Check your Supabase dashboard - Table Editor:
- Is it `books` (lowercase)? → Use Option 1
- Is it `Books` (capital)? → Use Option 2

## Quick Test in SQL Editor

Run this to see your table name:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

This will show you the exact name.
