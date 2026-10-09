const Header = ({ logo, menu }) => (
  <header className="nttdata-header relative overflow-hidden text-white shadow-lg">
    <div className="nttdata-header__glow" />
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-8">
      <div className="nttdata-header__brand shrink-0">{logo}</div>
      <div className="flex shrink-0 items-center justify-end">{menu}</div>
    </div>
  </header>
);

export default Header;
