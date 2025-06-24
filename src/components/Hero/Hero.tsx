import styles from './Hero.module.scss';
import { Heading } from '../ui/Heading/Heading';
import { Label } from '../ui/Label/Label';
import { ArticleSM } from '../ui/ArticleSM/ArticleSM';
import bgVideo from '../../assets/video/6013748_Nature_Misty_3840x2160.mp4';
import img13 from '../../assets/img/13.webp';
import img14 from '../../assets/img/14.webp';
import img15 from '../../assets/img/15.webp';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t, i18n } = useTranslation();

  const labels = [
    `hero.labels.label1`,
    `hero.labels.label2`,
    `hero.labels.label3`,
    `hero.labels.label4`,
    `hero.labels.label5`,
  ];

  const articles = [
    {
      img: img13,
      heading: 'hero.articles.article1.heading',
      txt: 'hero.articles.article1.txt',
      slug: 'how-to-choose-eco-products',
    },
    {
      img: img14,
      heading: 'hero.articles.article2.heading',
      txt: 'hero.articles.article2.txt',
      slug: 'recycling-packaging-process',
    },
    {
      img: img15,
      heading: 'hero.articles.article3.heading',
      txt: 'hero.articles.article3.txt',
      slug: '5-eco-friendly-habits',
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <Heading tag='h1'>{t(`hero.heading`)}</Heading>
        <ul className={styles.labels}>
          {labels.map(key => (
            <Label key={key}>{t(key)}</Label>
          ))}
        </ul>
        <ul className={styles.articles}>
          {articles.map(article => (
            <ArticleSM
              key={article.heading}
              link={`/articles/${article.slug}`}
              src={article.img}
              heading={t(article.heading)}
              txt={t(article.txt)}
            />
          ))}
        </ul>
      </div>

      <video className={styles.bg} loop playsInline autoPlay muted>
        <source src={bgVideo} type='video/mp4' />
      </video>
    </section>
  );
};
