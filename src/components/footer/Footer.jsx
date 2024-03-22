import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

import facebookIcon from '../../../public/1.png';
import instagramIcon from '../../../public/2.png';
import twitterIcon from '../../../public/3.png';
import youtubeIcon from '../../../public/4.png';


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Apurbwa. All rights reserved</div>
      <div className={styles.social}>
        <Image className={styles.icon} src={facebookIcon} alt="" />
        <Image className={styles.icon} src={instagramIcon} alt="" />
        <Image className={styles.icon} src={twitterIcon} alt="" />
        <Image className={styles.icon} src={youtubeIcon} alt="" />
      </div>
    </div>
  )
}

export default Footer