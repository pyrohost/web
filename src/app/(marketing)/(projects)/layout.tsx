import type React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <div className="flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1">{children}</div>;
};

export default Layout;
