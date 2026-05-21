# LinkedIn Job URL Builder

A minimal single-page React app to build precise LinkedIn job search URLs with all supported parameters — including time filters (5 min, 15 min, 30 min, 1 hr), skills, work mode, job type, experience level, and more.

> Built for personal use. No backend, no auth, no tracking — just a URL builder.

---

## Tech Stack

- **React 18** + **Vite 5**
- No UI library — pure CSS with CSS variables
- No state management library — React `useState` only
- Deployed on **Vercel**, custom domain optional

---

## Local Development

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- npm (comes with Node)

### Steps

```bash
# 1. Clone your repo
git clone https://github.com/YOUR_USERNAME/linkedin-job-search.git
cd linkedin-job-search

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

Output goes into the `/dist` folder. Preview it locally:

```bash
npm run preview
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite. Done.

### Option B — Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework preset: **Vite** (auto-detected)
5. Click **Deploy**

Vercel will give you a URL like `https://linkedin-job-search.vercel.app`

---

## Connect a Custom Domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `jobs.yourdomain.com`)
3. Copy the CNAME or A record Vercel gives you
4. Add it in your domain registrar's DNS settings
5. Wait a few minutes for DNS propagation

---

## Project Structure

```
linkedin-job-search/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main UI + URL builder logic
│   ├── index.css           # Global styles + CSS variables
│   ├── constants.js        # All LinkedIn parameters & skill IDs
│   └── components/
│       └── SkillSelector.jsx  # Multi-select skill picker
```

---

## Supported LinkedIn URL Parameters

| Parameter | Description | Field in App |
|---|---|---|
| `keywords` | Job title / keywords | Job Title (required) |
| `location` | City, country, or region | Location |
| `f_TPR` | Time posted (e.g. `r3600` = last hour) | Posted Within |
| `f_WT` | Work mode (remote/hybrid/on-site) | Work Mode |
| `f_JT` | Job type (full-time, contract, etc.) | Job Type |
| `f_E` | Experience level | Experience Level |
| `sortBy` | Sort order (recent vs relevant) | Sort By |
| `f_SB2` | Salary range | Salary Range |
| `f_I` | Industry | Industry |
| `f_CS` | Company size | Company Size |
| `f_C` | Company LinkedIn ID | Company ID |
| `f_SK` | Skill IDs (comma-separated) | Skills |
| `geoId` | LinkedIn geographic region ID | Geo ID |
| `distance` | Radius in km around location | Distance |

### Time Values Reference

| Value | Meaning |
|---|---|
| `r300` | Last 5 minutes |
| `r900` | Last 15 minutes |
| `r1800` | Last 30 minutes |
| `r3600` | Last 1 hour |
| `r7200` | Last 2 hours |
| `r21600` | Last 6 hours |
| `r86400` | Last 24 hours |
| `r604800` | Last week |

---

## How to Find a Company's LinkedIn ID

1. Go to the company's LinkedIn page
2. View page source (`Ctrl+U`) and search for `"companyId"`
3. Or: click **Jobs** tab on the company page — the URL will contain `f_C=XXXXX`

## How to Find a Geo ID

1. Search jobs on LinkedIn with a location
2. The URL will contain `geoId=XXXXXXXXX` — copy that number

---

## Hourly Job Monitoring (Manual)

1. Build your URL with **Posted Within = Last 1 hour**
2. Bookmark it in your browser
3. Open the bookmark every hour to see fresh listings
4. Or use this script to auto-open it:

```python
# auto_open.py
import webbrowser, schedule, time

URL = "YOUR_GENERATED_URL_HERE"

def check():
    webbrowser.open(URL)

schedule.every(1).hours.do(check)
check()  # open immediately on start

while True:
    schedule.run_pending()
    time.sleep(60)
```

Install: `pip install schedule` then run `python auto_open.py`

---

## Adding More Skills

Open `src/constants.js` and add entries to the `SKILLS` array:

```js
{ label: 'Your Skill', value: 'LINKEDIN_SKILL_ID', category: 'Category' }
```

To find a skill's LinkedIn ID:
1. Go to LinkedIn Jobs → All Filters → Skills
2. Select the skill
3. Check the URL for `f_SK=XXXXX` — that number is the skill ID

---

## License

MIT — personal use, free to fork and modify.
