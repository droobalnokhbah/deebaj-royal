# ════════════════════════════════════════════
# Deebaj Royal — Environment Variables
# ════════════════════════════════════════════
# Copy this file to .env.local and fill in real values
# DO NOT commit .env.local to git!

# ════════════════════════════════════════════
# Site Configuration
# ════════════════════════════════════════════
NEXT_PUBLIC_SITE_URL=https://deebajroyal.com
NEXT_PUBLIC_SITE_NAME="Deebaj Royal"
NEXT_PUBLIC_DEFAULT_LOCALE=ar

# ════════════════════════════════════════════
# Moyasar Payment Gateway
# Get keys from: https://dashboard.moyasar.com
# ════════════════════════════════════════════
# Test keys (for development)
NEXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY=pk_test_tYgsaUGn53rRpR8Ah2RAWjZn5QiEcpFrqqMpPBYG
MOYASAR_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

# Live keys (for production — uncomment when ready)
# NEXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY=pk_live_uuj26pbSaY4qKif7LLAKsJQP2TfEbFehZ9q4n1bo
# MOYASAR_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY

# ════════════════════════════════════════════
# Tabby (Buy Now Pay Later — 4 installments)
# Get keys from: https://merchant.tabby.ai
# ════════════════════════════════════════════
NEXT_PUBLIC_TABBY_PUBLIC_KEY=pk_test_YOUR_TABBY_PUBLIC_KEY
TABBY_SECRET_KEY=sk_test_YOUR_TABBY_SECRET_KEY
NEXT_PUBLIC_TABBY_MERCHANT_CODE=SAU

# ════════════════════════════════════════════
# Tamara (Buy Now Pay Later — 3 installments)
# Get keys from: https://partners.tamara.co
# ════════════════════════════════════════════
TAMARA_API_TOKEN=YOUR_TAMARA_API_TOKEN
TAMARA_NOTIFICATION_TOKEN=YOUR_TAMARA_NOTIFICATION_TOKEN
NEXT_PUBLIC_TAMARA_PUBLIC_KEY=YOUR_TAMARA_PUBLIC_KEY

# ════════════════════════════════════════════
# Firebase (Database + Authentication)
# Get config from: https://console.firebase.google.com
# Project: deebaj-royal
# ════════════════════════════════════════════
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAAdfTXpayiFiBx4tknU1kuHF0z1DUfueE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=deebaj-royal.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=deebaj-royal
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=deebaj-royal.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-LDHHK5K1ZM

# Firebase Admin SDK (server-side only)
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@deebaj-royal.iam.gserviceaccount.com

# ════════════════════════════════════════════
# Analytics & SEO
# ════════════════════════════════════════════
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LDHHK5K1ZM
NEXT_PUBLIC_CLARITY_PROJECT_ID=YOUR_CLARITY_ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=-5M_UiO8ipRTHxDz_1-afSQ-cFnHMAefrhO3myD3-Nk
NEXT_PUBLIC_BING_SITE_VERIFICATION=ECB64E82D17AEA829C219A6F23B9C0C9

# ════════════════════════════════════════════
# Email (Google Workspace)
# Use App Password (NOT Gmail password)
# Generate at: https://myaccount.google.com/apppasswords
# ════════════════════════════════════════════
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@deebajroyal.com
SMTP_PASSWORD=YOUR_APP_PASSWORD
SMTP_FROM_EMAIL=info@deebajroyal.com
SMTP_FROM_NAME="Deebaj Royal"

# ════════════════════════════════════════════
# WhatsApp Business
# ════════════════════════════════════════════
NEXT_PUBLIC_WHATSAPP_NUMBER=966580209346

# ════════════════════════════════════════════
# Shipping APIs (Optional — when contracts ready)
# ════════════════════════════════════════════
ARAMEX_API_KEY=
ARAMEX_ACCOUNT_NUMBER=
SMSA_API_KEY=
SMSA_PASSKEY=
DHL_API_KEY=

# ════════════════════════════════════════════
# Sentry Error Tracking (recommended)
# Get from: https://sentry.io
# ════════════════════════════════════════════
NEXT_PUBLIC_SENTRY_DSN=

# ════════════════════════════════════════════
# Webhooks Secret (for payment callbacks)
# Generate: openssl rand -hex 32
# ════════════════════════════════════════════
WEBHOOK_SECRET=GENERATE_RANDOM_32_HEX_STRING
