import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button
        className="cursor-pointer text-slate-600 hover:text-slate-900 active:scale-90"
        onClick={openModal}
      >
        <AiOutlineSearch size={24} />
      </button>

      <dialog className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/** if there is a button in form, it will close the modal **/}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Search;
