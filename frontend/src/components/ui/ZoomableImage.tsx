import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import clsx from 'clsx';

export interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
  zoomFactor?: number;
}

export default function ZoomableImage({
  src,
  alt = '',
  className = 'w-full h-full',
  zoomFactor = 2,
}: ZoomableImageProps) {
  const [isZoomed, setZoomed] = useState(false);
  const [isDragging, setDragging] = useState(false);

  return (
    <TransformWrapper
      initialScale={1}
      minScale={1}
      maxScale={zoomFactor}
      wheel={{ disabled: true }}
      pinch={{ disabled: true }}
      doubleClick={{ disabled: true }}
      panning={{ disabled: !isZoomed, allowPan: true, allowLeftClickPan: true }}
      onTransformed={({ scale }) => {
        if (scale === 1 && isZoomed) setZoomed(false);
      }}
    >
      {({ zoomIn, resetTransform }) => {
        const handleClick = () => {
          if (!isZoomed) {
            zoomIn(zoomFactor);
            setZoomed(true);
          } else {
            resetTransform();
            setZoomed(false);
          }
        };

        /**
         * cursor animation
         */
        const cursorClass = isZoomed
          ? isDragging
            ? 'cursor-grabbing'
            : 'cursor-grab'
          : 'cursor-zoom-in';

        return (
          <div
            onClick={handleClick}
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            className={clsx('inline-block', cursorClass, 'overflow-visible')}
          >
            <TransformComponent>
              <img
                src={src}
                alt={alt}
                className={clsx(
                  className,
                  'object-contain',
                  isZoomed && 'pointer-events-none select-none'
                )}
                draggable={false}
              />
            </TransformComponent>
          </div>
        );
      }}
    </TransformWrapper>
  );
}
