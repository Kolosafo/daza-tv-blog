"use client";
import "../editBlog/editorStyle.css";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import { LOGIN, createPost } from "../utils/createPost";
import dotenv from "dotenv";
import Navbar from "../components/Navbar/page";

export enum BlogCategory {
  News = "News",
  Movies = "Movies",
  Music = "Music",
  Comedy = "Comedy",
  Lifestyle = "LifeStyle",
}
const CreateBlog = () => {
  dotenv.config();
  const navigate = useRouter();
  const [saveBlog, setSaveBlog] = useState("Save");
  const [saveLoading, setSaveLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [postContentValue, setPostContentValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<BlogCategory>(BlogCategory.News);
  const [excerpt, setExcerpt] = useState("");
  const [coverImg, setCoverImg] = useState<any>("");
  const [status, setStatus] = useState("draft");
  const notify = (arg: any) => toast(arg);

  const handleChange = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setCoverImg(reader.result);
      }
    };
  };

  const handleSave = async () => {
    setSaveLoading(true);
    setSaveBlog("Saving...");
    console.log(title, category, excerpt, postContentValue, coverImg, status);
    const response = await createPost(
      title,
      category,
      excerpt,
      postContentValue,
      coverImg,
      status
    );

    if (response === "success") {
      setSaveLoading(false);
      setSaveBlog("Saved!");
      notify("BLOG CREATED");
      setTimeout(() => {
        navigate.push("/allBlogs");
      }, 3000);
    }
  };

  useEffect(() => {
    const getPrompt = () => {
      const username = prompt("Enter username");
      const password = prompt("Enter password");
      if (username === LOGIN.NAME && password === LOGIN.PASSWORD) {
        setIsAuth(true);
      } else {
        notify("Incorrect Credentials");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    };
    getPrompt();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" flex items-center flex-col mb-20">
        <ToastContainer />
        {isAuth && (
          <>
            <h1 className="text-3xl font-bold">New Post</h1>
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
                  className="mb-20 h-[25rem] bg-white"
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
                >
                  <option value={BlogCategory.News}>News</option>
                  <option value={BlogCategory.Comedy}>Comedy</option>
                  <option value={BlogCategory.Movies}>Movies</option>
                  <option value={BlogCategory.Lifestyle}>Lifestyle</option>
                  <option value={BlogCategory.Music}>Music</option>
                </select>
                <h1>Status</h1>
                <select
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="border-2 h-[3rem] p-2 mb-10"
                >
                  <option value="draft">draft</option>
                  <option value="publish">publish</option>
                </select>

                <button
                  className="customBtn"
                  type="button"
                  onClick={handleSave}
                  disabled={saveLoading ? true : false}
                >
                  {saveBlog}
                  {saveLoading && (
                    <Oval
                      height={20}
                      width={30}
                      color="#fff"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="black"
                      strokeWidth={6}
                      strokeWidthSecondary={6}
                    />
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreateBlog;
