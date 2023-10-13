"use client";
import "./editorStyle.css"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RotatingTriangles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { LOGIN } from "../../utils/createPost";
import Navbar from "../Navbar/page";
import Login from "../Login";
const EditBlog = () => {
  const notify = (arg: any) => toast(arg);
  const navigate = useRouter();
  const params: any = useSearchParams();
  const [postContentValue, setPostContentValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImg, setCoverImg] = useState<any>("");
  const [isAuth, setIsAuth] = useState(false);
  const [status, setStatus] = useState("");
  const [blogId, setBlogId] = useState("");
  const [category, setCategory] = useState<any>("News");


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setCoverImg(reader.result);
      }
    };
  };
  const id = params.get("id");
  const docRef = doc(db, "posts", id);

  const handleUpdateBlog = async () => {
    setLoading(true);
    await setDoc(docRef, {
      title,
      excerpt,
      content: postContentValue,
      coverImg,
      category,
      status,
    });
    notify("Blog Updated");
    navigate.push("/allBlogs");
  };

  const getPrompt = () => {
    setLoading(true);
    if (username === LOGIN.NAME && password === LOGIN.PASSWORD) {
    console.log("CLIKCED")
    setIsAuth(true)
    } else {
    console.log("CLIKCED", username, password, LOGIN.NAME, LOGIN.PASSWORD)

      notify("Incorrect Credentials");
    }
  };
 
  const getPost = async () => {
  setLoading(true);
  const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const res = docSnap.data();

      setTitle(res.title);
      setExcerpt(res.excerpt);
      setPostContentValue(res.content);
      setCoverImg(res.coverImg);
      setStatus(res.status);
      setBlogId(id);
      setCategory(res.category);
      setLoading(false);
    } else {
      notify("Post Not Found");
    }
  };

  useEffect(() => {
    // console.log(postId);

    getPost();

 
  }, [params]);
  return (
    <>
      <Navbar />
      <ToastContainer />
      { !isAuth ? (
   <Login handleLogin={getPrompt} username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>
      ) : (
        <div className=" flex items-center flex-col mb-20">
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <div className="h-full w-[90%]">
            <form method="POST" className="h-full flex flex-col">
              <span style={{ fontWeight: "700" }}>Post Cover Image</span>
              {coverImg && (
                <Image
                  width={100}
                  height={100}
                  src={coverImg}
                  alt="cover_img_preview"
                  id="cover_image_preview"
                  style={{ width: "10%" }}
                />
              )}
              <input
                className="w-full"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={(e: any) => handleChange(e.target.files[0])}
              />
              <span>Title</span>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 h-[3rem] p-2 mb-10"
              />
              <span>Excerpt</span>
              <input
                type="text"
                name="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="border-2 h-[3rem] p-2 mb-10"
              />

              <h1>Content</h1>
              <ReactQuill
                theme="snow"
                value={postContentValue}
                onChange={setPostContentValue}
                style={{ backgroundColor: "white" }}
                className="mb-20 h-[25rem] blogFontFamily bg-white"
                modules={{
                  toolbar: {
                    container: [
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      ["bold", "italic", "underline", "strike", "code"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["image", "link", "code-block"],
                      [
                        {
                          color: [
                            "#000000",
                            "#e60000",
                            "#ff9900",
                            "#ffff00",
                            "#008a00",
                            "#0066cc",
                            "#9933ff",
                            "#ffffff",
                            "#facccc",
                            "#ffebcc",
                            "#ffffcc",
                            "#cce8cc",
                            "#cce0f5",
                            "#ebd6ff",
                            "#bbbbbb",
                            "#f06666",
                            "#ffc266",
                            "#ffff66",
                            "#66b966",
                            "#66a3e0",
                            "#c285ff",
                            "#888888",
                            "#a10000",
                            "#b26b00",
                            "#b2b200",
                            "#006100",
                            "#0047b2",
                            "#6b24b2",
                            "#444444",
                            "#5c0000",
                            "#663d00",
                            "#666600",
                            "#003700",
                            "#002966",
                            "#3d1466",
                          ],
                        },
                      ],
                    ],
                    // handlers: {
                    //   image: this.imageHandler,
                    // },
                  },
                }}
              />
              <h1>Category</h1>
              <select
                onChange={(e: any) => {
                  setCategory(e.target.value);
                }}
                className="border-2 h-[3rem] p-2 mb-10"
                value={category}
              >
                <option value={"News"}>News</option>
                <option value={"Comedy"}>Comedy</option>
                <option value={"Movies"}>Movies</option>
                <option value={"Lifestyle"}>Lifestyle</option>
                <option value={"Music"}>Music</option>
              </select>
              <h1>Status</h1>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className="border-2 h-[3rem] p-2 mb-10"
                value={status}
              >
                <option value="draft">draft</option>
                <option value="publish">publish</option>
              </select>

              <input
                type="submit"
                value="Save"
                className="cursor-pointer border-2 text-white bg-green-500 text-xl font-bold my-3 rounded-md p-5"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdateBlog();
                }}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBlog;
