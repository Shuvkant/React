import { string } from "../../node_modules/@types/prop-types/index.d.ts";

const conf = {
  appwriteUrl: string(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: string(import.meta.env.VITE_APPWRITE_URL),
  appwriteDatabaseid: string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: string(import.meta.env.VITE_APPWRITE_BUCKER_ID),
};

export default conf;
