# Kiwi Proxy - Ultraviolet Proxy for Render

A web proxy based on Ultraviolet, deployable to Render.

## Deployment Steps

### 1. Push to GitHub
```bash
cd C:\Users\archer.temnoff\Downloads\Proxy
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy to Render
1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** kiwi-proxy
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
5. Click "Create Web Service"

### 3. Access Your Proxy
Once deployed, your proxy will be at:
`https://kiwi-proxy.onrender.com`

## Local Development
```bash
npm install
npm start
```
Then visit `http://localhost:3000`

## How It Works
- Routes traffic through Render's servers
- Uses Ultraviolet for proxying
- Service worker handles page loading
- All requests go through the proxy server
