import React from 'react';

import SectionLayout from '../../components/SectionLayout';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import ArticlesContainer from '../../components/ArticlesContainer/ArticlesContainer';
import Button from '../../components/Button/Button';

export default function Articles() {
  return (
    <SectionLayout id="articles" sectionTitle="Articles">
      <ArticlesContainer>
        <ArticleCard
          link="http://dev.to"
          title="Composition over Inheritance"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        />
        <ArticleCard
          link="http://dev.to"
          title="Best fonts for coding"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        />
        <ArticleCard
          link="http://dev.to"
          title="Intro to React Hooks"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        />
      </ArticlesContainer>
      <Button />
    </SectionLayout>
  );
}
