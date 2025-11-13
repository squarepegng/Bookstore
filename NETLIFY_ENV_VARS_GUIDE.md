# 🔐 How to Add Environment Variables on Netlify - Complete Guide

## Visual Step-by-Step Guide

### Step 1: Go to Netlify Dashboard
1. Open: https://app.netlify.com/
2. Log in with your GitHub account
3. You should see your sites listed

---

### Step 2: Select Your Site

After you've deployed your Bookstore:
1. Look for your site in the list (name like "your-site-name.netlify.app")
2. Click on it to open the site dashboard
3. You should see a dashboard with tabs at the top

**What you'll see:**
```
┌─────────────────────────────────────────────────────────┐
│  Your Site Name                                         │
│  your-site-name.netlify.app                             │
├─────────────────────────────────────────────────────────┤
│ Overview | Deploys | Analytics | Settings | etc         │
│          [click: Settings]                              │
└─────────────────────────────────────────────────────────┘
```

---

### Step 3: Open Site Settings

1. Click the **Settings** tab at the top
2. You'll see a sidebar on the left with options

---

### Step 4: Find Environment Variables

In the left sidebar, look for:
- **Build & deploy** (usually near the top)

Click on **Build & deploy** → You'll see sub-options:
- General
- Environment
- Build hooks
- etc.

**Click on: Environment** ← This is what you need!

**Visual:**
```
Site settings
├─ General
├─ Domain management
├─ Build & deploy
│  ├─ General
│  ├─ Environment .......... CLICK HERE ⭐
│  ├─ Build hooks
│  └─ Builds
├─ Functions
└─ etc.
```

---

### Step 5: Add Environment Variables

Once you're in the Environment section, you should see:

**"Environment variables" section**

There should be a button like:
- **Edit variables** OR
- **Add variable** OR  
- **+ New variable**

Click this button!

---

### Step 6: Enter Your Variables

You'll see a form like this:

```
┌────────────────────────────────────────────────────────┐
│ Environment Variables                                  │
├────────────────────────────────────────────────────────┤
│                                                        │
│ Key                  | Value                           │
│ ─────────────────────|────────────────────────────────│
│ [Enter key here]     | [Enter value here]              │
│ ─────────────────────|────────────────────────────────│
│                                                        │
│ + Add another        [Save]                            │
└────────────────────────────────────────────────────────┘
```

---

### Step 7: Enter Each Variable

Add these THREE variables:

#### Variable 1: SUPABASE_URL
```
Key:   SUPABASE_URL
Value: https://ygiqbicywglcfernspov.supabase.co
```

#### Variable 2: SUPABASE_ANON_KEY
```
Key:   SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaXFiaWN5d2dsY2Zlcm5zcG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMzYxNjEsImV4cCI6MjA3ODYxMjE2MX0.9oec1BwpqtMoxqABXyv3GwsMJlB0OzKXOn1T8PR6qP4
```

#### Variable 3: ADMIN_PASSWORD
```
Key:   ADMIN_PASSWORD
Value: your_secure_password_here
```

---

### Step 8: Get Your Keys

**Where to find SUPABASE_ANON_KEY:**

1. Open your Supabase project: https://app.supabase.com/project/ygiqbicywglcfernspov
2. Go to: **Settings** → **API**
3. Copy the **anon public** key
4. Paste into Netlify

**Or simply copy from your local `.env` file:**
```bash
# In your local project:
cat backend/.env
# Copy the value of SUPABASE_ANON_KEY
```

---

### Step 9: Save Variables

After entering all three variables:

1. Click **Save** button
2. You should see a success message
3. Variables are now saved!

---

### Step 10: Trigger New Deploy

Now you need to redeploy so the new environment variables are used:

1. Go to **Deploys** tab
2. Find your latest deploy
3. Look for a button like **Trigger deploy** or **Redeploy**
4. Click it!

**The site will rebuild** with your new environment variables.

---

## Screenshots (Text Version)

### Location 1: Main Dashboard
```
https://app.netlify.com/

[Your Site] ← Click here after deploying
```

### Location 2: Site Dashboard Tabs
```
your-site.netlify.app
[Overview] [Deploys] [Analytics] [Settings] ← Click Settings
```

### Location 3: Settings Sidebar
```
SITE SETTINGS
├─ General
├─ Domain management  
├─ Build & deploy ← Expand this
│  ├─ General
│  ├─ Environment ← Click this ⭐⭐⭐
│  ├─ Build hooks
│  └─ Builds
└─ etc.
```

### Location 4: Add Variables
```
ENVIRONMENT VARIABLES

[Edit variables] button ← Click this

Then fill in:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- ADMIN_PASSWORD
```

---

## Quick Navigation Path

```
1. https://app.netlify.com/
2. Click your site
3. Click [Settings] tab
4. Left sidebar: [Build & deploy]
5. Click [Environment]
6. Click [Edit variables]
7. Add your 3 variables
8. Click [Save]
9. Go to [Deploys] tab
10. Trigger new deploy
```

---

## If You Can't Find It

### Try This:
1. Look at the top navigation bar of your site
2. You should see tabs like:
   - Overview
   - Deploys
   - Analytics
   - Settings

3. **Settings** → **Build & deploy** → **Environment**

### Alternative Path:
If you see "Deploys" at the top:
1. In the left sidebar
2. Look for "Build settings" or "Build & deploy"
3. Should have "Environment" option

---

## Common Issues

### "I don't see Environment option"
- Make sure you're in **Settings** tab
- Make sure you expanded **Build & deploy** section
- Scroll down in the sidebar if needed

### "I can't find Edit variables button"
- Look for **+ Add variable** button instead
- Or look for a pencil/edit icon next to the variables section

### "Variables are grayed out"
- You might not have permission
- Ask site owner to add them
- Or check if you're logged in correctly

---

## After Adding Variables

**Important:** After you add environment variables:

1. ✅ Click **Save**
2. ✅ Go to **Deploys** tab
3. ✅ Click **Trigger deploy** to rebuild with new variables
4. ✅ Wait for deploy to complete
5. ✅ Test your site!

The environment variables won't take effect until you trigger a new deploy!

---

## Testing Variables Work

After deploy completes:

1. Visit your site URL
2. Try adding a book via admin form
3. Use your admin password
4. Book should save to Supabase
5. Reload page - book should still be there

If books don't show up → Check that all 3 variables are set correctly!

---

## Quick Reference

| Variable | Value | Where from |
|----------|-------|-----------|
| `SUPABASE_URL` | `https://ygiqbicywglcfernspov.supabase.co` | Given |
| `SUPABASE_ANON_KEY` | Long key starting with `eyJ...` | Supabase → Settings → API |
| `ADMIN_PASSWORD` | Any secure password you choose | You create this |

---

## Still Can't Find It?

Try this URL directly (replace YOUR_SITE with your site name):
```
https://app.netlify.com/sites/YOUR_SITE/settings/build
```

Or ask in Netlify support:
- Go to: https://app.netlify.com/
- Click your profile icon
- Click "Support"

---

**You're almost there!** 🎉

Once you add these variables and trigger a deploy, your Bookstore will be fully live!
