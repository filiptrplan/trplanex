const alerts = document.querySelectorAll('.alert');

alerts.forEach((item, key) => {
    const alertButton = item.querySelector('.alert-close');
    alertButton.addEventListener('click', () => {
        item.remove();
    });
});