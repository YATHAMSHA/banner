import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head'; 
import fs from 'fs';
import path from 'path';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import styles from '../styles/Home.module.css';

interface HomePageProps {
  ads: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  }[];
}

const HomePage: React.FC<HomePageProps> = ({ ads: initialAds }) => {
  const [ads, setAds] = useState(initialAds);
  const [editingAd, setEditingAd] = useState<any>(null);

  const handleEdit = (index: number) => {
    setEditingAd({ ...ads[index], index });
  };

  const handleSave = (updatedAd: any) => {
    const updatedAds = [...ads];
    updatedAds[editingAd.index] = updatedAd;
    setAds(updatedAds);
    setEditingAd(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ad-Banner</title>
        <link rel="icon" href="/images/favicon.jpg" /> 
      </Head>
      <h1 className={styles.title}>Ad Banners</h1>
      {ads.map((ad, index) => (
        <BannerImageComp
          key={index}
          title={ad.title}
          description={ad.description}
          cta={ad.cta}
          image={ad.image}
          background={ad.background}
          onEdit={() => handleEdit(index)}
        />
      ))}
      {editingAd && (
        <EditBannerTemplateBs
          ad={editingAd}
          onSave={handleSave}
          onClose={() => setEditingAd(null)}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const adsFilePath = path.join(process.cwd(), 'public', 'ads.json');
  const adsData = fs.readFileSync(adsFilePath, 'utf-8');
  const ads = JSON.parse(adsData);

  return {
    props: {
      ads,
    },
  };
};

export default HomePage;
