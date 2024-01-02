const artikelButton = document.getElementById('article-menu');
const fotoButton = document.getElementById('foto-menu');
const videoButton = document.getElementById('video-menu');
const mediaPhotos = document.querySelectorAll('.media-photo');
const mediaVideos = document.querySelectorAll('.media-video');

document.addEventListener('DOMContentLoaded', function () {
    // Menetapkan kelas .menu-tab-active pada tombol "Artikel" secara otomatis
    artikelButton.classList.add('menu-tab-active');

    // Menyembunyikan semua media-photo dan media-video
    hideAllMedia();
});

function toggleMenu(button) {
    const menuTab = document.querySelector('.menu-tab');

    menuTab.querySelectorAll('.article-menu').forEach(item => {
        item.classList.remove('menu-tab-active');
    });

    button.classList.add('menu-tab-active');

    // Menyembunyikan semua media-photo dan media-video
    hideAllMedia();

    // Menentukan media yang harus ditampilkan berdasarkan tombol yang ditekan
    if (button === artikelButton) {
        hideAllMedia();
    } else if (button === fotoButton) {
        showMedia('photo');
    } else if (button === videoButton) {
        showMedia('video');
    }
}

function hideAllMedia() {
    // Sembunyikan semua media-photo dan media-video
    mediaPhotos.forEach(photo => {
        photo.classList.add('hidden');
    });
    mediaVideos.forEach(video => {
        video.classList.add('hidden');
    });
}

function showMedia(type) {
    // Menentukan media yang harus ditampilkan berdasarkan tipe
    if (type === 'photo') {
        mediaPhotos.forEach(photo => {
            photo.classList.remove('hidden');
        });
    } else if (type === 'video') {
        mediaVideos.forEach(video => {
            video.classList.remove('hidden');
        });
    }
}
