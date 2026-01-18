# Food Doctor - Quick Start Guide

## 🚀 Getting Started

### 1. Start the Development Server
```bash
cd "c:\AI Projects\Food-Doctor"
npm run dev
```

The application will be available at: **http://localhost:3000**

### 2. Ensure Backend is Running
Make sure your backend API is running at: **http://127.0.0.1:8000**

## 🎨 Feature Overview

### Theme Toggle
- Click the **flashlight icon** in the top-right to switch between dark/light mode
- Watch the animated light beam effect!
- Theme preference is automatically saved

### Settings
- Click the **gear icon** (top-left) to open settings
- Toggle "Print JSON on Error" for debugging
- Settings are persisted across sessions

### OCR Scan
- Click **"Scan Label"** button on the homepage
- Choose to either:
  - **Upload Image**: Select from your device
  - **Take Photo**: Use your device camera
- Image will be analyzed and results displayed

### Product Search
1. Select result limit (5, 10, 20, or 50)
2. Type product name in search bar
3. Press Enter or click Search
4. Click product cards to view:
   - **Analyze**: Full health analysis
   - **Ingredients**: Detailed ingredient breakdown

### Try Popular Products
- Scroll down to "Try these popular products"
- Click any product card to search for it
- Real product images loaded from Open Food Facts

### Health Resources
- Scroll to the bottom for curated health resource links
- FSSAI, WHO, and other trusted sources

## 🔧 Configuration

All API endpoints are in: `lib/config.ts`

To change the backend URL:
```typescript
// lib/config.ts
export const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:8000',  // Change this
  // ...
}
```

## 📱 Cross-Platform Testing

### Desktop
- Works on Windows, Mac, Linux
- All modern browsers (Chrome, Firefox, Safari, Edge)

### Mobile
- Fully responsive design
- Touch-optimized interactions
- Works on Android and iOS
- Test in both portrait and landscape

### Camera Access (OCR)
- Requires HTTPS in production
- Works on localhost during development
- Browser will ask for camera permission

## 🐛 Debugging

### Enable JSON Error Display
1. Click gear icon (Settings)
2. Toggle "Print JSON on Error" ON
3. Any API errors will now show raw JSON response

### Common Issues

**Theme not applying?**
- Clear browser cache and localStorage
- Refresh the page

**Images not loading?**
- Check internet connection
- Open Food Facts API might be slow

**Camera not working?**
- Ensure HTTPS or localhost
- Grant camera permissions in browser
- Some browsers block camera in insecure contexts

**API errors?**
- Verify backend is running at http://127.0.0.1:8000
- Check browser console for detailed errors
- Use Settings to enable JSON error display

## 🎯 Key Pages

### Homepage (`/`)
- Product search
- OCR scanning
- Popular products
- Health resources

### Analysis (`/analysis/[id]`)
- Health verdict
- Summary
- Hidden sugars
- Harmful additives
- Marketing alerts

### Ingredients (`/ingredients/[id]`)
- Full ingredient list
- Identified additives
- Hidden sugars
- Health implications

## 💾 Data Persistence

### What's Saved
- Theme preference (dark/light)
- Settings (JSON on error)
- Search results (session cache)
- Analyzed products (session cache)

### Where It's Saved
- localStorage: Theme and settings
- SessionStorage/Memory: API responses and product data

### Clear All Data
```javascript
// In browser console
localStorage.clear();
sessionStorage.clear();
location.reload();
```

## 🎨 Customization

### Change Theme Colors
Edit: `app/globals.css`
```css
:root {
  --primary: 142 76% 36%;  /* Green */
  --secondary: 210 40% 96.1%;  /* Light gray */
  /* ... */
}
```

### Add More Products to "Try These"
Edit: `lib/config.ts`
```typescript
export const TOP_PRODUCTS = [
  { name: 'Product Name', barcode: '1234567890' },
  // Add more...
];
```

### Add Health Resources
Edit: `lib/config.ts`
```typescript
export const HEALTH_RESOURCES = {
  NEW_RESOURCE: {
    name: 'Resource Name',
    url: 'https://example.com',
    description: 'Description here',
  },
};
```

## 📊 Performance Tips

1. **Images** are cached by browser
2. **API responses** are cached in memory
3. **Theme/Settings** load from localStorage
4. **Animations** use CSS for GPU acceleration

## 🌐 Browser Support

### Fully Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Partial Support
- ⚠️ IE11: Not supported (use modern browser)
- ⚠️ Older mobile browsers: May lack animations

## 🆘 Need Help?

Check these files:
- `IMPLEMENTATION_SUMMARY.md` - Full feature documentation
- `README.md` - Project overview
- `lib/config.ts` - All configuration
- Browser DevTools Console - For runtime errors

---

**Happy Food Analyzing! 🥗**
