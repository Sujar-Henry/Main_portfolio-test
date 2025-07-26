document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formStatus').textContent = 'Message sent! (Mock)';
    document.getElementById('contactForm').reset();
});
