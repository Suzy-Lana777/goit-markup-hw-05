(() => {
  константные ссылки = {
    // Добавить атрибуты data-modal-open на кнопку открытия
    openModalBtn: document.querySelector("[data-modal-open]"),
    //Добавить атрибуты data-modal-close на кнопку закрытия
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Добавляем атрибуты data-modal на бекдроп модалки
    модальный: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("щелчок", toggleModal);
  refs.closeModalBtn.addEventListener("щелчок", toggleModal);

  функция toggleModal() {
    // открыт этот класс, который нужно будет додать/запустить на бэкдропе при нажатии на кнопку
    refs.modal.classList.toggle("is-open");
  }
})();