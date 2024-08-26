const NavBar = () => {
  return (
    <div className="flex w-full max-w-[125rem] justify-between px-6 py-4 fixed">
      {/* left NavBar _____________________________*/}
      <div className="flex">
        <div className="">Home</div>
      </div>

      {/* right NavBar ____________________________*/}
      <div className="flex gap-4">
        <div className="">Search</div>
        <div className="">Account</div>
        <div className="">Cart</div>
      </div>
    </div>
  );
};

export default NavBar;
