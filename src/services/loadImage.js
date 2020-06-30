export default async function loadImage(url) {
  console.log(url);
  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
  return promise;
}
