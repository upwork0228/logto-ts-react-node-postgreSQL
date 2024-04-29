import { useState, useRef } from 'react';

import ContactIcon from '@/assets/icons/contact-us.svg';
import DynamicT from '@/ds-components/DynamicT';
import { onKeyDownHandler } from '@/utils/a11y';

import ContactModal from './ContactModal';
import * as styles from './index.module.scss';

function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={anchorRef}
        tabIndex={0}
        className={styles.helpButton}
        role="button"
        onKeyDown={onKeyDownHandler(() => {
          setIsContactOpen(true);
        })}
        onClick={() => {
          setIsContactOpen(true);
        }}
      >
        <ContactIcon className={styles.icon} />
        <span>
          <DynamicT forKey="topbar.help" />
        </span>
      </div>
      <ContactModal
        isOpen={isContactOpen}
        onCancel={() => {
          setIsContactOpen(false);
        }}
      />
    </>
  );
}

export default Contact;
