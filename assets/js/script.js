const btnBuy = document.querySelectorAll('.game-btn')

btnBuy.forEach(btn => {
    btn.addEventListener('click', modalEffect)
})

function modalEffect() {
    // add active class
    const modalDetail = document.querySelector('.modal-detail')
    const closeModal = document.querySelector('.close-modal')

    const nominal = this.previousElementSibling.firstElementChild.innerHTML;
    const provider = this.previousElementSibling.firstElementChild.nextElementSibling.innerHTML;
    const harga = this.previousElementSibling.lastElementChild.innerHTML;

    // console.log(provider)

    changeValue(nominal, provider, harga)
    modalDetail.classList.add('active')
    
    // close modal
    closeModal.addEventListener('click', function() {
        modalDetail.classList.remove('active')
    })

}

function changeValue(nominal, provider, harga) {
    const elNominal = document.querySelector('.nominal')
    const elProvider = document.querySelector('.provider')
    const elHarga = document.querySelector('.harga')

    elNominal.innerHTML = nominal
    elProvider.innerHTML = provider
    elHarga.innerHTML = harga
}