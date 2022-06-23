import React from "react";
import { Header, Sidebar, Video } from "../components";

const Event: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};

export { Event };
