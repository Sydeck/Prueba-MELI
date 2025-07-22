import React from 'react';
import clsx from 'clsx';
import { useSmoothCollapse } from '@/hooks/useSmoothCollapse';
import { columns, bottomLinks, legalText } from '@/config/moreInfo.data';
import { InfoColumn } from '@/types/footer.data';
import { ToggleButton } from './ToggleButton';
import { ColumnsGrid } from './ColumnsGrid';
import { BottomLinks } from './BottomLinks';
import { LegalNotice } from './LegalNotice';

/**
 * Props allow injecting data (Open/Closed Principle)
 */
export interface MoreInfoProps {
  columnsData?: InfoColumn[];
  bottomLinksData?: string[];
  legal?: string;
  initiallyOpen?: boolean;
}

export default function MoreInfo({
  columnsData = columns,
  bottomLinksData = bottomLinks,
  legal = legalText,
  initiallyOpen = false,
}: MoreInfoProps): JSX.Element {
  const { open, toggle, panelRef } = useSmoothCollapse({
    initiallyOpen,
    scrollAfterOpen: true,
    scrollBlock: 'end',
  });

  return (
    <section className="w-full mt-6">
      <ToggleButton open={open} onClick={toggle} />

      {/* Animated panel */}
      <div
        ref={panelRef}
        className={clsx(
          'moreinfo-panel overflow-hidden opacity-0 max-h-0 transition-[max-height,opacity] duration-300 ease-in-out'
        )}
      >
        <ColumnsGrid columns={columnsData} centerOnMobile={true} />
      </div>

      <BottomLinks links={bottomLinksData} />
      <LegalNotice text={legal} />
    </section>
  );
}
