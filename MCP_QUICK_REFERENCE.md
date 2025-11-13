# 🔌 MCP Quick Reference Card

## Your MCP Endpoint

```
https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov
```

## Configuration Location

- **Root:** `.mcp.json`
- **VS Code:** `.vscode/settings.json`

## Quick Start in GitHub Copilot

### Chat Examples

**"@supabase List all my tables"**
```
Returns: public, auth, storage (and any custom tables)
```

**"@supabase How many books are in the database?"**
```
Returns: Count of records in Books table
```

**"@supabase Show the Books table schema"**
```
Returns: All columns with data types
```

**"@supabase Add a test book"**
```sql
INSERT INTO "Books" (title, author, price)
VALUES ('Test Book', 'Test Author', 9.99);
```

**"@supabase Get expensive books over $50"**
```sql
SELECT * FROM "Books" WHERE price > 50;
```

## SQL Templates

### Query All Books
```sql
SELECT id, title, author, price, created_at 
FROM "Books" 
ORDER BY created_at DESC 
LIMIT 10;
```

### Insert Sample Data
```sql
INSERT INTO "Books" (title, author, price, description, image_url, payment_link)
VALUES 
  ('The Great Gatsby', 'F. Scott Fitzgerald', 12.99, 'A classic', 'https://images.unsplash.com/photo-1543002588-d4d27c30c898', 'https://buy.example.com/gatsby'),
  ('1984', 'George Orwell', 13.99, 'Dystopian', 'https://images.unsplash.com/photo-1507842217343-583f7270bfba', 'https://buy.example.com/1984');
```

### Update Book
```sql
UPDATE "Books"
SET price = 14.99, image_url = 'https://new.url'
WHERE id = 1;
```

### Delete Book
```sql
DELETE FROM "Books" WHERE id = 1;
```

### Check Table Structure
```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'Books'
ORDER BY ordinal_position;
```

### Add Missing Columns
```sql
ALTER TABLE "Books"
ADD COLUMN IF NOT EXISTS price DECIMAL(10, 2),
ADD COLUMN IF NOT EXISTS image_url TEXT,
ADD COLUMN IF NOT EXISTS payment_link TEXT;
```

## Common Operations

| Operation | Command |
|-----------|---------|
| List tables | `@supabase show all tables` |
| Show schema | `@supabase describe Books table` |
| Count records | `@supabase how many books exist` |
| Add record | `@supabase insert a new book` |
| Update record | `@supabase update book with id 1` |
| Delete record | `@supabase delete book with id 1` |
| Search | `@supabase find books by author` |

## Tips & Tricks

✅ Use natural language - MCP understands context
✅ Ask for SQL - MCP will generate it
✅ Request explanations - MCP will explain queries
✅ Get sample data - Ask for test data
✅ Schema help - Ask about table structure

## Integration Points

- **GitHub Copilot Chat** - Native MCP support
- **VS Code Extensions** - Via settings.json
- **Your Backend** - Already using Supabase client
- **Frontend** - API calls work as-is
- **CI/CD** - Can be added to workflows

## Reload VS Code

After adding MCP, reload:
1. Press: `Cmd+Shift+P`
2. Type: `Reload Window`
3. Press: `Enter`

Now MCP is active!

## Test MCP

Open GitHub Copilot Chat and type:
```
@supabase What's the schema of my Books table?
```

MCP will respond with the exact table structure!

## More Resources

- MCP Docs: https://mcp.supabase.com/
- Project Dashboard: https://app.supabase.com/project/ygiqbicywglcfernspov
- Configuration: `.mcp.json`

---

**MCP is active! Start querying your database!** 🚀
