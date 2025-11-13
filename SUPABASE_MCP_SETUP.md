# Supabase MCP Integration Guide

## What is MCP?

**MCP (Model Context Protocol)** is a protocol that allows AI assistants to interact with external systems like Supabase directly. With Supabase MCP, you can:

- ✅ Query the database in real-time
- ✅ Execute SQL commands
- ✅ Manage tables and columns
- ✅ View and modify data
- ✅ Check table schema

## Your Supabase MCP Server

**MCP Endpoint:**
```
https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov
```

**Project Reference:** `ygiqbicywglcfernspov`

## Integration Options

### Option 1: Use with VS Code + Copilot (Recommended)

1. **Install Supabase Extension** in VS Code:
   - Open VS Code Extensions
   - Search: "Supabase"
   - Install official Supabase extension

2. **Configure MCP in VS Code:**
   - Open Settings (Cmd+,)
   - Search: "MCP"
   - Add this configuration:

```json
{
  "mcp.servers": {
    "supabase": {
      "url": "https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov"
    }
  }
}
```

3. **Restart VS Code**

### Option 2: Use with Cursor/IDE

Add to your IDE's MCP configuration:

```yaml
supabase:
  url: https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov
```

### Option 3: Direct Command Line

```bash
# Query database via MCP
curl -X POST https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov \
  -H "Content-Type: application/json" \
  -d '{"query": "SELECT * FROM Books"}'
```

## What You Can Do

### Query Database
```sql
SELECT * FROM "Books" ORDER BY created_at DESC;
```

### Add Columns
```sql
ALTER TABLE "Books"
ADD COLUMN IF NOT EXISTS price DECIMAL(10, 2);
```

### Insert Data
```sql
INSERT INTO "Books" (title, author, price)
VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 12.99);
```

### View Schema
```sql
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'Books';
```

## Integration Benefits

✅ **Real-time database access** without leaving your IDE
✅ **Execute SQL directly** through chat interface
✅ **No context switching** between VS Code and Supabase dashboard
✅ **AI assistance** for complex queries
✅ **Version control** for schema changes

## Your Current Database

**Database:** PostgreSQL on Supabase
**Project URL:** https://ygiqbicywglcfernspov.supabase.co
**Tables:**
- `Books` - Main bookstore table
- `auth.users` - User authentication (default)

## Quick Commands via MCP

### Check if Books table exists
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

### See all columns in Books table
```sql
DESCRIBE "Books";
```

### Count books
```sql
SELECT COUNT(*) as total_books FROM "Books";
```

### Find books by author
```sql
SELECT * FROM "Books" WHERE author = 'F. Scott Fitzgerald';
```

## Troubleshooting

**Can't connect?**
- Verify project_ref is correct: `ygiqbicywglcfernspov`
- Check MCP URL is formatted correctly
- Ensure Supabase project is active

**Permission denied?**
- Check your Supabase credentials
- Verify RLS policies allow your operations
- Try with service role key for admin operations

**MCP not loading?**
- Restart your IDE/VS Code
- Check network connectivity
- Verify MCP endpoint is accessible

## Resources

- Supabase MCP Docs: https://mcp.supabase.com/
- Supabase Dashboard: https://app.supabase.com/
- Your Project: https://app.supabase.com/project/ygiqbicywglcfernspov

## Next Steps

1. ✅ Copy your MCP endpoint
2. ⏳ Add to your IDE configuration
3. ⏳ Test with a simple SQL query
4. ⏳ Use for database management
