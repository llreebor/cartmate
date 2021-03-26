function modal(modal, modalBtn, modalClose) {
    modal = document.querySelector(modal)
    modalBtn = document.querySelector(modalBtn)
    modalClose = document.querySelector(modalClose)

    modalBtn.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
        } 
    })
}
modal('.modal__wrapper', '.modal__btn', '.modal__close')