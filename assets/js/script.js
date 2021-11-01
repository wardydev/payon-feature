const btnBuy = document.querySelectorAll('.game-btn')

btnBuy.forEach(btn => {
    btn.addEventListener('click', modalEffect)
})

function modalEffect() {
    // add active class
    const modalDetail = document.querySelector('.modal-detail')
    const closeModal = document.querySelector('.close-modal')
    const bg = document.querySelector('.bg')

    const nominal = this.previousElementSibling.firstElementChild.innerHTML;
    const provider = this.previousElementSibling.firstElementChild.nextElementSibling.innerHTML;
    const harga = this.previousElementSibling.lastElementChild.innerHTML;
    const idUser = document.querySelector('.input-id-user').value

    // console.log(provider)

    changeValue(nominal, provider, harga, idUser)
    modalDetail.classList.add('active')
    bg.classList.add('active')

    // loading
    const modalBtn = document.querySelector('.modal-btn')
    modalBtn.addEventListener('click', function() {
        this.innerHTML = 'loading...'
    })
    
    // close modal
    closeModal.addEventListener('click', function() {
        modalDetail.classList.remove('active')
        bg.classList.remove('active')
        modalBtn.innerHTML = 'Beli Sekarang'
        
        document.querySelector('.input-id-user').value = ''
        document.querySelector('.input-phone-number').value = ''
    })
    bg.addEventListener('click', function() {
        modalDetail.classList.remove('active')
        bg.classList.remove('active')
        modalBtn.innerHTML = 'Beli Sekarang'

        document.querySelector('.input-id-user').value = ''
        document.querySelector('.input-phone-number').value = ''
    })

}

function changeValue(nominal, provider, harga, idUser, nomorHP) {
    const elNominal = document.querySelector('.nominal')
    const elProvider = document.querySelector('.provider')
    const elHarga = document.querySelectorAll('.harga')
    const elIdUser = document.querySelector('.id-user')

    elNominal.innerHTML = nominal
    elProvider.innerHTML = provider
    elHarga.forEach(price => {
        price.innerHTML = harga
    })
    elIdUser.innerHTML = idUser
}