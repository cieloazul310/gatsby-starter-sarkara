import * as React from 'react';
import {
  GatsbySarkaraLayout,
  H2,
  Paragraph,
  Paper,
  GatsbySeo,
} from '@cieloazul310/gatsby-theme-sarkara';

function AboutPage() {
  return (
    <GatsbySarkaraLayout
      title="About Sarkara"
      description="React components based on Chakra UI."
    >
      <Paper as="article">
        <H2>About Sarkara</H2>
        <Paragraph>Sarkara</Paragraph>
      </Paper>
    </GatsbySarkaraLayout>
  );
}

export default AboutPage;

export function Head() {
  return <GatsbySeo />;
}
