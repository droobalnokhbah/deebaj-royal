import { NextResponse } from 'next/server';

function hasFirebaseConfig() {
  return Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  );
}

async function saveOrderToFirebase(order: any, orderId: string) {
  if (!hasFirebaseConfig()) {
    return false;
  }

  try {
    const { initializeApp, getApps } = await import('firebase/app');
    const { getFirestore, doc, setDoc } = await import('firebase/firestore');

    const app =
      getApps().length > 0
        ? getApps()[0]
        : initializeApp({
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
            measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
          });

    const db = getFirestore(app);
    await setDoc(doc(db, 'orders', orderId), {
      ...order,
      orderId,
      createdAt: new Date().toISOString(),
    });

    return true;
  } catch (error) {
    console.error('Firebase order save skipped:', error);
    return false;
  }
}

export async function POST(request: Request) {
  const order = await request.json();
  const orderId = `DR-${Date.now()}`;
  const saved = await saveOrderToFirebase(order, orderId);

  return NextResponse.json({
    ok: true,
    orderId,
    saved,
  });
}
