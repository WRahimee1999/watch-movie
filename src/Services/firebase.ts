// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: only use analytics if you're in a browser environment
let analytics: ReturnType<typeof getAnalytics> | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
