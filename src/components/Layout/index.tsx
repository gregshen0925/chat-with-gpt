import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const SideBar = dynamic(() => import("./SideBar"), { suspense: true });

const toastOptions = {
  style: {
    background: "rgb(0, 0, 0)",
    color: "white",
  },
  success: {
    className: "border border-green-500",
    iconTheme: {
      primary: "#10B981",
      secondary: "white",
    },
  },
  error: {
    className: "border border-red-500",
    iconTheme: {
      primary: "#EF4444",
      secondary: "white",
    },
  },
  loading: { className: "border border-yello-300" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Chat with GPT</title>
        <meta name="description" content="Created by InJoy Labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Toaster position="bottom-right" toastOptions={toastOptions} />
        <Suspense
          fallback={
            <div className="flex h-screen w-full items-center justify-center">
              Loading...
            </div>
          }
        >
          <div className="h-screen max-w-xs overflow-y-auto bg-[#202123] md:min-w-[20rem]">
            <SideBar />
          </div>
          <div className="flex-1 bg-black">{children}</div>
        </Suspense>
      </div>
    </>
  );
}
