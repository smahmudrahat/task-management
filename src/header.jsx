import Logo from "./assets/logo.svg";

//lws-logo-en.svg
export default function Header() {
  return (
    <nav className="py-4 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="mx-auto max-w-[1200px] px-4 flex items-center justify-between">
        <h1 className="text-[#FFA500] text-3xl font-bold">Tasker</h1>
        <a href="/">
          <img
            className="h-[45px] w-auto object-contain"
            src={Logo}
            alt="Learn with Sumit"
          />
        </a>
      </div>
    </nav>
  );
}
