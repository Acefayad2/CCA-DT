
# Contact Form → Google Sheet Setup

Follow these steps so contact form submissions are saved to a Google Sheet.

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like "CCA Contact Form Submissions".
3. In row 1, add these column headers: **Timestamp** | **First Name** | **Last Name** | **Email** | **Phone** | **Message**

## 2. Add the Apps Script

1. In the sheet, go to **Extensions → Apps Script**.
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (disk icon) and name the project (e.g. "CCA Contact Form").

## 3. Deploy as Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** Contact form handler (or any name)
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Authorize the app when prompted (click through the permissions).
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/xxxxx/exec`).

## 4. Add the URL to Your Project

1. Create a `.env.local` file in your project root (if it doesn't exist).
2. Add:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Replace with the URL you copied.
3. Restart your dev server (`npm run dev`).

## 5. Deploy to Production

If you're using Vercel or similar:
- Add `GOOGLE_SCRIPT_URL` to your project's Environment Variables.
- Redeploy.

---

Submissions will now appear as new rows in your Google Sheet. The client (Devyn) can view them in real time and optionally share the sheet with their team.
