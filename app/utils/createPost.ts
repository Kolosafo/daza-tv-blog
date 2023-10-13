import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
const postsCollectionRef = collection(db, "posts");
export const createPost = async (
  title: string,
  category: string,
  excerpt: string,
  postContentValue: string,
  coverImg: any,
  status: string
) => {
  await addDoc(postsCollectionRef, {
    title,
    category,
    excerpt,
    content: postContentValue,
    coverImg,
    status,
  });
  return "success";
};

export const LOGIN = {
  NAME: "nuruddeendaza",
  PASSWORD: "#daza@@",
};
