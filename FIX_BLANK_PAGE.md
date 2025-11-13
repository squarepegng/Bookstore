# 🔍 Fix: Page Goes Blank/White Immediately

## Problem Diagnosis

When the page loads but then goes blank, it usually means:
- ❌ JavaScript error in console (check DevTools)
- ❌ API call fails and crashes the component
- ❌ Missing environment variable
- ❌ CSS issue hiding content

---

## Step 1: Check Browser Console for Errors

### How to Open Console:
1. **On Mac:** Press `Cmd + Option + J` 
2. **On Windows/Linux:** Press `Ctrl + Shift + J`
3. **Or:** Right-click → **Inspect** → Click **Console** tab

### What to Look For:
- 🔴 **Red text** = JavaScript errors (this is what we need!)
- 🟡 Yellow text = warnings (usually okay)
- 🔵 Blue text = info (usually okay)

---

## Step 2: Known Issue - Image URL Field Name

**The Problem:**
In `Admin.jsx`, the form uses `imageUrl` (camelCase), but:
- Supabase expects `image_url` (snake_case)
- BookList expects `image_url` (snake_case)

When you try to add a book, the API fails, and the error crashes the app.

**The Fix:**

Open `frontend/src/components/Admin.jsx` and change:

### Find this (around line 8):
```jsx
const [form, setForm] = useState({ title: '', author: '', description: '', price: '', imageUrl: '', paymentLink: '' })
```

### Change to:
```jsx
const [form, setForm] = useState({ title: '', author: '', description: '', price: '', image_url: '', payment_link: '' })
```

### Find this (around line 21):
```jsx
<input placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
<input placeholder="Payment link" value={form.paymentLink} onChange={(e) => setForm({ ...form, paymentLink: e.target.value })} />
```

### Change to:
```jsx
<input placeholder="Image URL" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
<input placeholder="Payment link" value={form.payment_link} onChange={(e) => setForm({ ...form, payment_link: e.target.value })} />
```

### Find this (around line 16):
```jsx
setForm({ title: '', author: '', description: '', price: '', imageUrl: '', paymentLink: '' })
```

### Change to:
```jsx
setForm({ title: '', author: '', description: '', price: '', image_url: '', payment_link: '' })
```

---

## Step 3: Commit and Redeploy

After fixing the file:

```bash
# In your project folder
git add -A
git commit -m "Fix: Change imageUrl to image_url in Admin form"
git push origin main
```

Then in Netlify:
1. Go to **Deploys** tab
2. Your new deploy should start automatically
3. Wait for it to complete (green checkmark)
4. Refresh your site

---

## Step 4: Test Again

After redeploy:
1. Visit your site
2. Should load with content visible
3. Try adding a book
4. Refresh page - book should be there

---

## Other Common Causes of Blank Page

### If the fix above doesn't work, check these:

#### Cause 1: Missing Environment Variable

**Check:**
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for error like: `Cannot read property 'from' of undefined`

**Fix:**
1. Go to Netlify Settings → Build & deploy → Environment
2. Verify all 3 variables are there:
   - SUPABASE_URL ✅
   - SUPABASE_ANON_KEY ✅
   - ADMIN_PASSWORD ✅
3. Trigger new deploy if missing any

---

#### Cause 2: API Call Fails

**Check:**
1. Open DevTools (F12)
2. Go to **Network** tab
3. Refresh page
4. Look for requests to `/.netlify/functions/get-books`
5. Click it, check **Response** tab

**Expected response:**
```json
[]
```
or
```json
[{"id":1,"title":"Book",...}]
```

**Problem response:**
```json
{"error":"Something went wrong"}
```
or
```
401 Unauthorized
```

**Fix:**
- Check Netlify function logs (see below)
- Check environment variables again

---

#### Cause 3: CSS Issue

**Check:**
1. Right-click on blank area → **Inspect**
2. Look at the HTML (should show `<h1>Simple Bookstore</h1>`)
3. If you see content in HTML but not on page = CSS hiding it

**Fix:**
1. Check that `frontend/src/styles.css` is properly loaded
2. Check if body has `display: none` or `visibility: hidden`

---

## Step 5: Check Netlify Function Logs

If adding a book still fails:

1. Go to **https://app.netlify.com/**
2. Click your site
3. Go to **Functions** tab
4. Click on `add-book` function
5. Look at recent invocations

**Look for:**
- ✅ "Successful" = Good
- ❌ "Error" = Problem - click to see details

**Common errors:**
- `SUPABASE_ANON_KEY is undefined` → Environment variable not set
- `Error: relation "Books" does not exist` → Table name wrong
- `401 Unauthorized` → Wrong Supabase key

---

## Quick Debug Checklist

Run through these in order:

```
□ Open DevTools (F12)
□ Check Console tab for red errors
□ Try to add a book - does form work?
□ Check Network tab - are API calls succeeding?
□ Check if HTML is there but hidden (Inspect)
□ Check Netlify environment variables (all 3 set?)
□ Check Netlify function logs for errors
□ Trigger new deploy
□ Clear browser cache (Shift + Cmd + R on Mac)
```

---

## If You Still See Blank Page

Try this nuclear option:

```bash
# Clear browser cache completely
# Then do a hard refresh

# On Mac: Cmd + Shift + R
# On Windows: Ctrl + Shift + R
# Or in DevTools: Right-click refresh button → "Empty cache and hard refresh"
```

---

## Fast Fix Summary

1. **Fix the file:** Change `imageUrl` to `image_url` in Admin.jsx
2. **Commit:** `git add . && git commit -m "Fix" && git push`
3. **Wait for deploy** in Netlify (2-3 minutes)
4. **Refresh site:** Hard refresh (Cmd+Shift+R)
5. **Test:** Try adding a book

If that doesn't work → Check browser console for specific error message!

---

## Need More Help?

If you're still stuck, share the **exact error message** from your browser console:

1. Open DevTools (F12)
2. Go to Console
3. Look for red error text
4. Copy the full error message
5. Tell me what it says!

That error message will tell us exactly what's wrong.

---

**The page going blank usually means an error happened. Find the error, and we can fix it! 🔍**
