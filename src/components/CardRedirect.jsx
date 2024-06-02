import { createSignal } from "solid-js";

const CardRedirect = ({ icon, text, description, link }) => {
  const [newTab, setNewTab] = createSignal(false);

  const openNewTab = (url) => {
    window.open(url, "_blank");
    setNewTab(true);
  };

  const handleClick = () => {
    openNewTab(link);
  };

  return (
    <div
      class="w-auto h-auto min-h-32 bg-bg-300 flex flex-col p-4 text-white card-animation cursor-pointer hover:bg-bg-400 transition-colors duration-300 rounded-lg shadow-md"
      onClick={handleClick}
    >
      <div class="flex items-center mb-3">
        <svg class="w-6 h-6 fill-current mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d={icon} />
        </svg>
        <h3 class="text-lg font-semibold truncate">{text}</h3>
      </div>
      <p class="text-sm text-gray-300 line-clamp-3">{description}</p>
      {newTab()}
    </div>
  );
};

export default CardRedirect;