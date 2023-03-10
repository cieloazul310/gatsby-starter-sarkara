import * as React from 'react';
import {
  GatsbySarkaraLayout,
  H2,
  H3,
  H4,
  Paragraph,
  Paper,
  GatsbySeo,
  useAbsoluteUrl,
} from '@cieloazul310/gatsby-theme-sarkara';
import imageUrl from '../assets/bach.png';

function PageTwo() {
  return (
    <GatsbySarkaraLayout
      title="Page 2"
      sidebarContents={
        <Paper colorSchemes="secondary" as="aside">
          <H4>岡倉天心</H4>
          <Paragraph>
            岡倉 天心（おかくら てんしん、1863年2月14日（文久2年12月26日） -
            1913年（大正2年）9月2日）は、日本の思想家、文人。本名は岡倉
            覚三（かくぞう）。幼名は岡倉 角蔵。
          </Paragraph>
        </Paper>
      }
    >
      <Paper as="article">
        <H2>第一章 人情の碗</H2>
        <Paragraph>
          茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。茶道は日常生活の俗事の中に存する美しきものを崇拝することに基づく一種の儀式であって、純粋と調和、相互愛の神秘、社会秩序のローマン主義を諄々と教えるものである。茶道の要義は「不完全なもの」を崇拝するにある。いわゆる人生というこの不可解なもののうちに、何か可能なものを成就しようとするやさしい企てであるから。
        </Paragraph>
        <Paragraph>
          茶の原理は普通の意味でいう単なる審美主義ではない。というのは、倫理、宗教と合して、天人に関するわれわれのいっさいの見解を表わしているものであるから。それは衛生学である、清潔をきびしく説くから。それは経済学である、というのは、複雑なぜいたくというよりもむしろ単純のうちに慰安を教えるから。それは精神幾何学である、なんとなれば、宇宙に対するわれわれの比例感を定義するから。それはあらゆるこの道の信者を趣味上の貴族にして、東洋民主主義の真精神を表わしている。
        </Paragraph>
        <H2>第二章 茶の諸流</H2>
        <Paragraph>
          茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
        </Paragraph>
        <H2>第二章 茶の諸流</H2>
        <Paragraph>
          茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
        </Paragraph>
        <H3>岡倉天心</H3>
        <Paragraph>
          茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。茶道は日常生活の俗事の中に存する美しきものを崇拝することに基づく一種の儀式であって、純粋と調和、相互愛の神秘、社会秩序のローマン主義を諄々と教えるものである。茶道の要義は「不完全なもの」を崇拝するにある。いわゆる人生というこの不可解なもののうちに、何か可能なものを成就しようとするやさしい企てであるから。
        </Paragraph>
      </Paper>
    </GatsbySarkaraLayout>
  );
}

export default PageTwo;

export function Head() {
  const image = useAbsoluteUrl(imageUrl);
  return <GatsbySeo image={image} />;
}
