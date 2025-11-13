# 🔌 MCP Configuration Guide

## MCP Server Configuration

Your project now has **Supabase MCP** fully configured for direct database access!

## Configuration Files Created

### 1. `.mcp.json` (Root)
```json
{
  "mcpServers": {
    "supabase": {
      "url": "https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov"
    }
  }
}
```

### 2. `.vscode/settings.json`
VS Code configuration with:
- ✅ MCP enabled
- ✅ Supabase MCP server configured
- ✅ GitHub Copilot MCP integration
- ✅ Python formatting (bonus)

## How to Use

### In VS Code with GitHub Copilot

1. **Reload VS Code** - Cmd+Shift+P → "Reload Window"
2. **Use in Chat:**
   ```
   @supabase List all tables in my database
   @supabase Show me the Books table schema
   @supabase Insert sample data into Books
   ```

3. **Example Queries:**
   - "What columns are in the Books table?"
   - "Count how many books are in the database"
   - "Show me books priced under $15"

### Direct MCP Endpoint

```
https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov
```

### Supported MCP Operations

✅ **SELECT** - Query data
✅ **INSERT** - Add records
✅ **UPDATE** - Modify records
✅ **DELETE** - Remove records
✅ **ALTER TABLE** - Modify schema
✅ **CREATE TABLE** - New tables
✅ **View Columns** - Table structure

## Common Queries

### Get Table Info
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

### View Books Schema
```sql
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'Books'
ORDER BY ordinal_position;
```

### List All Books
```sql
SELECT id, title, author, price, created_at 
FROM "Books" 
ORDER BY created_at DESC;
```

### Add New Book
```sql
INSERT INTO "Books" (title, author, price, description, image_url, payment_link)
VALUES ('New Book', 'Author Name', 29.99, 'Description', 'https://image.url', 'https://buy.url');
```

### Find Expensive Books
```sql
SELECT * FROM "Books" 
WHERE price > 20 
ORDER BY price DESC;
```

## Environment Integration

Your MCP works with:
- ✅ GitHub Copilot (Chat)
- ✅ VS Code Extensions
- ✅ IDE Terminal Commands
- ✅ AI Assistants
- ✅ Backend Code

## Testing MCP

### Via Terminal
```bash
# Check MCP endpoint is accessible
curl https://mcp.supabase.com/mcp?project_ref=ygiqbicywglcfernspov
```

### Via Your Code
```javascript
// Your backend already uses Supabase client
const { data } = await supabase.from('Books').select('*');
```

### Via GitHub Copilot Chat
Just ask questions about your database!

## Security Notes

✅ MCP uses authenticated requests
✅ Your project_ref is public (that's ok)
✅ Real authentication happens on Supabase side
✅ Credentials stored securely in `.env`
✅ RLS policies protect data

## Troubleshooting

**MCP not connecting?**
- Verify internet connection
- Check project_ref is correct: `ygiqbicywglcfernspov`
- Reload VS Code (Cmd+Shift+P → Reload Window)

**Queries not returning results?**
- Check table name case: `Books` (capital B)
- Verify columns exist in table
- Check RLS policies allow your queries

**Can't add/modify data?**
- RLS might be blocking writes
- Use Supabase dashboard to check policies
- Or temporarily disable RLS for testing

## Next Steps

1. ✅ MCP configured
2. ✅ `.mcp.json` created
3. ✅ VS Code settings added
4. ⏳ Reload VS Code
5. ⏳ Test in Copilot Chat
6. ⏳ Deploy to Netlify

## Resources

- **MCP Docs:** https://mcp.supabase.com/
- **Your Project:** https://app.supabase.com/project/ygiqbicywglcfernspov
- **Supabase Dashboard:** https://ygiqbicywglcfernspov.supabase.co
- **Project Config:** `.mcp.json`
- **VS Code Config:** `.vscode/settings.json`

---

**MCP is ready to use!** 🚀

Reload VS Code and start querying your database directly!
