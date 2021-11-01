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
    const nomorHP = document.querySelector('.input-phone-number').value

    // console.log(provider)

    changeValue(nominal, provider, harga, idUser, nomorHP)
    modalDetail.classList.add('active')
    bg.classList.add('active')
    
    // close modal
    closeModal.addEventListener('click', function() {
        modalDetail.classList.remove('active')
        bg.classList.remove('active')

        document.querySelector('.input-id-user').value = ''
        document.querySelector('.input-phone-number').value = ''
    })
    bg.addEventListener('click', function() {
        modalDetail.classList.remove('active')
        bg.classList.remove('active')

        document.querySelector('.input-id-user').value = ''
        document.querySelector('.input-phone-number').value = ''
    })

}

function changeValue(nominal, provider, harga, idUser, nomorHP) {
    const elNominal = document.querySelector('.nominal')
    const elProvider = document.querySelector('.provider')
    const elHarga = document.querySelectorAll('.harga')
    const elIdUser = document.querySelector('.id-user')
    const elPhoneNumber = document.querySelector('.phone-number')

    elNominal.innerHTML = nominal
    elProvider.innerHTML = provider
    elHarga.forEach(price => {
        price.innerHTML = harga
    })
    elIdUser.innerHTML = idUser
    elPhoneNumber.innerHTML = nomorHP
}