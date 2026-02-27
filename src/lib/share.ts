export const shareProduct = async (productId: number, productName: string) => {
  const url = `${window.location.origin}/product/${productId}`;
  const text = productName;

  if (navigator.share) {
    try {
      await navigator.share({ title: text, url });
    } catch {
      // User cancelled
    }
  } else {
    await navigator.clipboard.writeText(url);
  }
};
