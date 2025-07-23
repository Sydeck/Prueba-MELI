import React, { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import ZoomableImage from './ZoomableImage';

export interface ProductGalleryProps {
  images: string[];
  width: number;
  height: number;
  zoomContainerWidth: number;
  zoomContainerHeight: number;
  zoomScale: number;
}

export default function ProductGallery({
  images,
  width,
  height,
  zoomContainerWidth,
  zoomContainerHeight,
  zoomScale,
}: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const zoomProps = {
    width,
    height,
    zoomWidth: zoomScale,
    img: images[active],
    zoomPosition: 'right' as const,
    offset: { vertical: 0, horizontal: 10 },
    zoomLensStyle: `
      width: 20px;
      height: 20px;
      background-color: rgba(0,0,0,0.4);
      border: 2px solid rgba(0,0,0,0.3);
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      cursor: zoom-in;
    `,
    zoomStyle: `
      background-color: #fff;
      border: 1px solid rgba(0,0,0,0.15);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      border-radius: 8px;
      width: ${zoomContainerWidth}px;
      height: ${zoomContainerHeight}px;
    `,
  };

  return (
    <>
      <div className="flex justify-start max-w-[700px]  ml-4 ">
        {/* Thumbnails */}
        <div className="flex flex-col ml-2 mt-2">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-12 h-12 border ${
                idx === active ? 'border-ml-blue-main' : 'border-gray-300'
              } overflow-hidden rounded`}
            >
              <img src={src} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>

        {/* ReactImageZoom preview */}
        <div className="ml-4  cursor-pointer" onClick={() => setModalOpen(true)}>
          <ReactImageZoom {...zoomProps} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative overflow-visible"
            onClick={e => e.stopPropagation()}
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <ZoomableImage
              src={images[active]}
              alt={`Producto ${active + 1}`}
              className={`w-min-[${width}px] h-min-[${height}px] w-max-full h-max-full`}
              zoomFactor={2}
            />
            <button
              className="absolute top-1 right-1 text-gray-500 font-bold text-2xl rounded-full p-2"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
