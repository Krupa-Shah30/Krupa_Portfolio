export default function ImageGallery({ images }: { images: string[] }) {
  // TODO: implement lightbox with Dialog
  return (
    <div className="flex gap-4 flex-wrap">
      {images.map((src) => (
        <img key={src} src={src} alt="Gallery" className="w-40 h-32 object-cover rounded-2xl" />
      ))}
    </div>
  );
}
