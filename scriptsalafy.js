document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Mode Terang' : 'Mode Gelap';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Wajib mengisi semua data');
    } else {
        document.getElementById('form-message').textContent = 'Data berhasil dikirim';
        this.reset(); 
    }
});

function selesai() {
  alert ("Syukron, Jazakallahu khairan sudah membeli buku ditoko ini, semoga dilancarkan rezekinya oleh Allah Subhanahu Wataala, Aamiinnn");
}
