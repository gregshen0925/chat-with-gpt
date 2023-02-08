import NewChat from "../NewChat";

const SideBar = () => {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div>
          <NewChat />
        </div>
      </div>
      <div>{/* ModelSelection */}</div>
      {/* Map through the ChatRows */}
    </div>
  );
};

export default SideBar;
