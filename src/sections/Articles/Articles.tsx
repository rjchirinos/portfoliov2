import React from 'react';

import SectionLayout from '../../components/SectionLayout';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import ArticlesContainer from '../../components/ArticlesContainer/ArticlesContainer';
import Button from '../../components/Button/Button';
import articlesList from './articlesList';

export default function Articles() {
  return (
    <SectionLayout id="articles" sectionTitle="Articles">
      <ArticlesContainer>
        {articlesList.map((article: any) => {
          return (
            <ArticleCard
              link={article.link}
              title={article.title}
              description={article.description}
            />
          );
        })}
      </ArticlesContainer>
      <Button btText="Show More" handleClick={() => alert('clicked')} />
    </SectionLayout>
  );
}
