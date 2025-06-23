const stars = document.querySelectorAll('.star');
const output = document.getElementById('output');

let currentRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = parseInt(star.getAttribute('data-value'));
    highlightStars(val);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(currentRating);
  });

  star.addEventListener('click', () => {
    currentRating = parseInt(star.getAttribute('data-value'));
    output.textContent = `You rated: ${currentRating} star${currentRating > 1 ? 's' : ''}`;
    highlightStars(currentRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    star.classList.remove('selected', 'hovered');
    const val = parseInt(star.getAttribute('data-value'));
    if (val <= rating) {
      star.classList.add('selected');
    }
  });
}
