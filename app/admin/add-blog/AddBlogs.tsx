"use client";
import React, { FC, useState } from "react";
import MainLayout from "@/components/Admin/MainLayout";
import { Card, CardBody, CardHeader } from "@/ui/Card";
import { EditIcon } from "@/icons";
import Editor from "./Editor";

const AddBlogs: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = async () => {
    try {
      const response = await fetch(
        "https://goldrate.creationnext.com/api/goldblog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: content,
            visibility: 1,
            published: 1,
          }),
        }
      );

      if (response.status === 200) {
        console.log("Blog post created successfully!");
      } else {
        console.error("Failed to create a blog post.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <React.Fragment>
      <MainLayout>
        <div className="m-4">
          <Card className="my-4">
            <CardHeader>Add New Blog</CardHeader>
            <CardBody>
              <div className="newblog">
                <div className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-8">
                    <input
                      type="text"
                      id="title"
                      className="w-[20vw] rounded-md border border-[#BEBEBE] mb-5 px-2 py-2 text-lg text-[#BEBEBE] placeholder:font-semibold focus:outline-none"
                      placeholder="Enter Title here"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* editor */}
                    <Editor content={content} setContent={setContent} />
                  </div>

                  <div className="col-span-4">
                    <div className="status bg-[#F9F9F9] px-5 py-8 ">
                      <h2 className="border-b-2 text-2xl font-semibold leading-10">
                        Publish
                      </h2>

                      <div className="mt-10 flex justify-between">
                        <a href="/">
                          <button className="text-md rounded-full border-2 py-2 px-5 text-[#8D8888] ">
                            Status Draft
                          </button>
                        </a>

                        <a href="/">
                          <button className="text-md rounded-full border-2 py-2 px-8 text-[#8D8888] ">
                            Preview
                          </button>
                        </a>
                      </div>

                      <div className="mt-10 pl-5 pr-2 2xl:pr-32">
                        <div className="flex justify-between  border-b-2 pl-2 pr-5">
                          <h2 className="text-xl text-[#8D8888]">
                            Status:
                            <span className=" ml-1  font-bold">Draft</span>
                          </h2>

                          <EditIcon />
                        </div>
                      </div>

                      <div className="mt-10 pl-5 pr-2 2xl:pr-32">
                        <div className="flex justify-between  border-b-2 pl-2 pr-5">
                          <h2 className="text-xl text-[#8D8888]">
                            Visibility:
                            <span className=" ml-1  font-bold">Public</span>
                          </h2>

                          <EditIcon />
                        </div>
                      </div>

                      <div className="mt-10 pl-5 pr-2 2xl:pr-32">
                        <div className="flex justify-between  border-b-2 pl-2 pr-5">
                          <h2 className="text-xl text-[#8D8888]">
                            Publish:
                            <span className=" ml-1  font-bold">
                              Immediately
                            </span>
                          </h2>

                          <EditIcon />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#E8E8E8] py-8 px-10">
                      <a href="/">
                        <button className="text-lg font-semibold text-[#8D8888] underline ">
                          Delete
                        </button>
                      </a>

                      <button
                        className="rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 py-2 px-8 text-lg text-white"
                        onClick={handlePublish}
                      >
                        Publish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </MainLayout>
    </React.Fragment>
  );
};

export default AddBlogs;
