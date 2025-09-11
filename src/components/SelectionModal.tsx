import React, { useState, useEffect } from "react";

const SelectionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 1초 뒤에 모달 표시
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-11/12 mx-4 text-center transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-3xl font-light leading-none"
        >
          &times;
        </button>

        {/* 제목 */}
        <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 mt-4 px-8">
          🎉 Selection Complete!
        </h2>

        {/* 내용 */}
        <div className="text-gray-700 leading-relaxed mb-6">
          <p className="mb-4">
            Thank you for your interest in Korea-ASEAN Digital Academy. The
            selection process has been completed successfully.
          </p>

          <p className="mb-4">
            This bootcamp consists of 4 batches running until next year. If you
            were not selected for this batch, we encourage you to apply for the
            next batch.
          </p>
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={closeModal}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default SelectionModal;
