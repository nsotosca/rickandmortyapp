const Header = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <header className="flex justify-center w-full px-6 py-4 align-middle bg-slate-600 text-zinc-50">
      {children}
    </header>
  );
};

export default Header;
