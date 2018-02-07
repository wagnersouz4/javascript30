const inputs = document.querySelectorAll('.controls input'); // NodeList

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
};

const addListeners = input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
};

inputs.forEach(addListeners);