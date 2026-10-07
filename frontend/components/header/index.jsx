const Header = ({ logo, menu }) => (
  <header className="relative overflow-hidden bg-[#0050A4] text-white shadow-lg">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(0,169,224,0.45),transparent_45%)]" />
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
      <div className="min-w-0">{logo}</div>
      <div className="flex items-center justify-end">{menu}</div>
    </div>
  </header>
);

export default Header;
