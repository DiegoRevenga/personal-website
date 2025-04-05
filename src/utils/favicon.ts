export default async function cropFavicon() {
  const faviconUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHAuDjmUwKVzw/profile-displayphoto-shrink_800_800/B4DZUV._h5HwAc-/0/1739830589979?e=1749081600&v=beta&t=Vq2pmlc_YrfB6-0qSY_dE4reym0Nfhp_QFiXnytWQ-8";
  const img = new Image();
  img.crossOrigin = 'anonymous'; // Allow cross-origin image loading
  img.src = faviconUrl;

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Define the crop dimensions (e.g., center crop)
    const cropSize = 700; // Desired size of the cropped favicon
    canvas.width = cropSize;
    canvas.height = cropSize;

    // Crop the canvas into a circle
    ctx?.beginPath();
    ctx?.arc(cropSize / 2, cropSize / 2, cropSize / 2, 0, Math.PI * 2);
    ctx?.closePath();
    ctx?.clip();

    const startX = (img.width - cropSize) / 2;

    ctx?.drawImage(img, startX, 0, cropSize, cropSize, 0, 0, cropSize, cropSize);

    // Convert the canvas to a data URL
    const croppedFaviconUrl = canvas.toDataURL('image/png');

    // Update the favicon
    const faviconElement = document.querySelector('link[rel="icon"]');
    if (faviconElement) {
      (faviconElement as HTMLLinkElement).href = croppedFaviconUrl;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = croppedFaviconUrl;
      document.head.appendChild(newFavicon);
    }
  };

  img.onerror = () => {
    console.error('Failed to load favicon image.');
  };
};
