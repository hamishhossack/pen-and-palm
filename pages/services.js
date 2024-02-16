import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ServicesBlock from '../components/services/ServicesBlock';
import ServiceHero from '../components/services/ServiceHero';

const Services = () => (
  <Root>
    <Head>
      <title>Services | Pen & Palm - Wedding Invitations, Stationery, Signage</title>
    </Head>
    <div>
      <ServiceHero />
      <ServicesBlock bg="bg-brand400" img={['wedding-1', 'wedding-2']}>
        <h3 className="mb-4 font-family-secondary">Wedding Invitations</h3>
        <p>
          Your wedding invitations are likely to be the first glimpse into your wedding day that
          your guests will see. I can help you make a lasting impression, by injecting your
          personality and vision into your invites, whether that&apos;s by using bold colours and
          typography, or including personalised elements like venue illustrations or monograms. We
          can also explore a range of printing techniques (think metallic foiling, letterpress,
          digital printing) and tactile elements, such as handmade paper or vellum as well as extra
          embellishments like wax seals and silk ribbon.
        </p>
      </ServicesBlock>
      <ServicesBlock
        otherBg="bg-brand400"
        img={['stationary-1', 'stationary-2', 'stationary-3', 'stationary-4']}
        imgLeft
      >
        <h3 className="mb-2 font-family-secondary">On the day stationery</h3>
        <p>
          From place cards to table names and everything in between! I can work with almost any
          material to create the look you require.
        </p>
      </ServicesBlock>
      <ServicesBlock
        bg="bg-brand600"
        img={[
          'hand-painted-1',
          'hand-painted-2',
          'hand-painted-3',
          'hand-painted-4',
          'hand-painted-5',
        ]}
      >
        <h3 className="mb-4 font-family-secondary">Hand painted Signage</h3>
        <p>
          When you&pos;re after something super special - hand painted signage is so striking on
          your wedding day and then is perfect to keep afterwards in your home.
        </p>
        <h5 className="my-2 font-family-secondary">Wood</h5>
        <p>
          All of my wooden signage is hand painted and comes in 2 different stains or can even be
          painted to create a blackboard or painted in a colour to suit your wedding theme. I only
          use FSC certified wood.
        </p>
        <h5 className="my-2 font-family-secondary">Acrylic</h5>
        <p>
          I use recycled and fully recyclable acrylic (Green Cast) for hand-painted signage and you
          can choose from clear, frosted or coloured acrylic to suit your needs.
        </p>
        <h5 className="my-2 font-family-secondary">Mirror</h5>
        <p>
          I can hand-paint your own mirrors or alternatively I do have a few that can be hired. The
          paint I use is durable but it can be removed. This is a super sustainable way of
          displaying signage at your wedding, by using everyday items you already have.
        </p>
      </ServicesBlock>
      <ServicesBlock bg="bg-white" otherBg="bg-brand600" img={['misc-1', 'misc-2']} imgLeft>
        <h3 className="mb-4 font-family-secondary">Miscellaneous</h3>
        <p>
          As a calligrapher, I love to apply beautiful calligraphy to anything I can get my hands
          on! I can create lots of little extras for your special day or event, and even
          personalised gifts, which are always so well-received. Think personalised hangers for your
          wedding party, guestbooks, bridal leather or denim jackets - the list is endless!
        </p>
      </ServicesBlock>
    </div>
    <Footer />
  </Root>
);

export default Services;
