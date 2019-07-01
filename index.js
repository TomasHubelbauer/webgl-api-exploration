window.addEventListener('load', async () => {
  const response = await fetch('README.md');
  const text = await response.text();
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('webgl');
  for (let key in context) {
    const keyHeading = document.createElement('h2');
    keyHeading.textContent = key;

    document.body.append(keyHeading);
  }
});
