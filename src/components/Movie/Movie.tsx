import React, { useState } from "react";
// import "node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
const Movie = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold">プロモーション</h2>
        <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
        <div className="container mx-auto mt-10 px-4 flex flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="flex-1">
            <div className="h-[400px] w-full">
              <img
                src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80"
                alt=""
                onClick={() => setShowModal(true)}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-base tracking-wide">
              この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。
              この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。
              <br />
              <br />
              この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。
              この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。この文章はダミーテキストです。
            </p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t"></div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton position="center" />
                  </Player>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Movie;
