import React from "react";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main className="flex flex-col self-center flex-1 w-5/6 gap-4 p-4">
        {children}
      </main>
    </>
  );
};

export default Layout;
