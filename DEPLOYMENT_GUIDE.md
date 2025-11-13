# 🚀 Deploy to Netlify - Supabase Edition

Your bookstore is ready to deploy! The backend is working and Supabase is connected.

## Step 1: Update Admin Password (Recommended)

Edit `backend/.env` and change `ADMIN_PASSWORD` to something secure:

```env
ADMIN_PASSWORD=MySecurePassword123!
```

## Step 2: Commit and Push to GitHub

```bash
cd "/Users/mac/Documents/Sam project/Bookstore"
git add .
git commit -m "Supabase integration complete"
git push origin main
```

## Step 3: Deploy Frontend to Netlify

1. Go to: https://app.netlify.com/
2. Click: **Add new site** → **Import an existing project**
3. Connect your GitHub `squarepegng/Bookstore` repo
4. Build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

## Step 4: Add Environment Variables to Netlify

After deployment starts:

1. Go to your site dashboard
2. Click: **Site settings** → **Build & deploy** → **Environment**
3. Click: **Edit variables**
4. Add these:

| Key | Value |
|-----|-------|
| SUPABASE_URL | https://ygiqbicywglcfernspov.supabase.co |
| SUPABASE_ANON_KEY | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |
| ADMIN_PASSWORD | Your secure password |

5. **Save**
6. Click **Deployments** → **Trigger deploy** → **Deploy site**

## Step 5: Test Your Live Site

1. Visit your Netlify URL (e.g., `https://your-site.netlify.app`)
2. You should see the bookstore app
3. Try adding a book via the Admin form
4. Refresh - book should appear!

## Troubleshooting

**Books not loading?**
- Check env vars are set in Netlify
- Verify Supabase is online
- Check browser console for errors

**Admin password doesn't work?**
- Ensure password matches in Netlify env vars
- Restart deployment

---

**Your app is ready for production! 🚀**

## Step 1: Prepare Your GitHub Repository

1. Create a new GitHub repository (or use an existing one):
   - Go to https://github.com/new
   - Name it `bookstore` (or any name you like)
   - Choose "Public" or "Private" (your preference)
   - Click "Create repository"

2. Push your local project to GitHub:
   ```bash
   cd "/Users/mac/Documents/Sam project"
   git init
   git add .
   git commit -m "Initial bookstore project"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bookstore.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

3. Verify the repo is pushed by opening https://github.com/YOUR_USERNAME/bookstore in your browser.

---

## Step 2: Set Up Backend on Render

1. Sign up at https://render.com (use GitHub or email).

2. Once logged in, click **New → Web Service**.

3. Click **Connect repository** and authorize GitHub. Select your `bookstore` repo.

4. In the deployment settings:
   - **Name:** `bookstore-backend` (or any name)
   - **Environment:** `Node`
   - **Build command:** `npm install` (leave as default or clear — Render handles this)
   - **Start command:** `npm start`
   - **Root Directory:** `backend` (important!)

5. Click **Advanced** and add Environment Variables:
   - Key: `MONGODB_URI`
     Value: `mongodb+srv://squarepegng_db_user:I7Zz32UN15GHJLMl@samcluster.qfvmunm.mongodb.net/bookstore?retryWrites=true&w=majority`
   - Key: `ADMIN_PASSWORD`
     Value: (choose a password, e.g., `securePassword123`)

6. Click **Create Web Service**. Render will deploy your backend. After ~2-3 minutes, you'll see:
   - A green "Live" status
   - A URL like `https://bookstore-backend.onrender.com`
   
   **Copy this backend URL** — you'll need it for the frontend.

7. (Optional) Seed sample data:
   - In Render service dashboard, go to **Shell** and run:
     ```bash
     npm run seed
     ```
   - Or wait until you deploy the frontend and use the Admin form to add books manually.

---

## Step 3: Deploy Frontend on Netlify

1. Sign up at https://app.netlify.com (use GitHub or email).

2. Once logged in, click **Add new site → Import an existing project**.

3. Click **Connect to Git** and authorize GitHub. Select your `bookstore` repo.

4. In the build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click **Advanced → New variable** and add:
   - Key: `VITE_API_URL`
     Value: (paste the Render backend URL you copied, e.g., `https://bookstore-backend.onrender.com`)

6. Click **Deploy site**. Netlify will build and deploy. After ~1-2 minutes:
   - You'll see a green checkmark and a URL like `https://your-site.netlify.app`
   - This is your live bookstore website!

---

## Step 4: Test Your Live Website

1. Open the Netlify URL in your browser (e.g., `https://your-site.netlify.app`).

2. You should see:
   - **Books list** on the left (if you ran seed, or empty if not).
   - **Book details** panel on the right.
   - **Admin form** at the bottom to add books.

3. Test the Admin form:
   - Enter the `ADMIN_PASSWORD` you set in Render.
   - Fill in book details (title, author, price, etc.).
   - Click "Add Book" — the book should appear in the list.

4. If books don't appear:
   - Check Render logs: go to Render service dashboard and click **Logs** to debug MongoDB connection.
   - Check Netlify logs: go to Netlify site dashboard and click **Deploys** → latest deploy → **View logs**.

---

## Step 5: Troubleshooting

**Frontend loads but no books appear:**
- Backend might not be connected to MongoDB. Check Render logs.
- VITE_API_URL in Netlify might be wrong. Verify it matches your Render backend URL exactly.

**Admin form doesn't work:**
- Wrong ADMIN_PASSWORD. Verify the password you set in Render matches what you enter in the form.
- Backend API error. Check Render logs for database or validation errors.

**Can't connect to MongoDB:**
- Check MongoDB Atlas IP whitelist: go to https://cloud.mongodb.com → Network Access and ensure your IP (or 0.0.0.0/0 for testing) is allowed.
- Verify MONGODB_URI in Render is correct (username, password, cluster host).

**CORS errors in browser console:**
- Backend should allow CORS (it does by default). If issues persist, check that the backend is running on Render (Render logs will show).

---

## Step 6: Keep Your Website Updated

Whenever you push changes to GitHub (`git push`):
1. Render will automatically redeploy the backend.
2. Netlify will automatically redeploy the frontend.

You don't need to do anything — just git push!

---

## Optional: Upgrade to Paid Plans (if needed)

- **Render:** Free tier has some sleep restrictions (services sleep after 15 min of inactivity). For a production site, upgrade to a paid plan (~$7/month for always-on).
- **Netlify:** Free tier is sufficient for most websites. Paid plans add team features and build minutes.
- **MongoDB Atlas:** Free tier is good for hobby projects. Production clusters start around $57/month but have much more resources.

---

## You're Done! 🎉

Your bookstore website is now live and globally accessible. Share the Netlify URL with anyone to show them your site!
