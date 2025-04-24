document.addEventListener('DOMContentLoaded', () => {
    const newGameBtn = document.getElementById('new-game-btn');
    const continueBtn = document.getElementById('continue-btn');

    newGameBtn.addEventListener('click', () => {
        alert('¡Empezando un nuevo juego!');
        // Aquí irá la lógica para iniciar un nuevo juego
    });

    continueBtn.addEventListener('click', () => {
        alert('¡Continuando el juego!');
        // Aquí irá la lógica para cargar el juego guardado
    });
});
