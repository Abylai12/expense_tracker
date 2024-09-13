"use client";

const CatModal = () => {
  return (
    <div className="">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full"
        onClick={() => {
          showModal();
        }}
      >
        +Record
      </button>

      {openModal && (
        <dialog open className="modal modal-middle">
          <div className="modal-box max-w-[800px] ">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Add Category</h3>
              <button className="btn-square" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-action justify-center">
              <button
                className={`font-normal text-base py-2 px-14 rounded-[20px]`}
              >
                Add Record
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default CatModal;
