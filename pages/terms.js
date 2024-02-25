import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Terms = () => {
  return (
    <Root>
      <Head>
        <title>Terms and Conditions | Pen & Palm</title>
      </Head>
      <div className="section-container py-md-5">
        <div className="custom-container py-md-5">
          <div className="row py-5">
            <div className="col-12">
              <h3>Our contact details Ilona Smyth t/a Pen and Palm</h3>

              <p>High Grove, Clovelly Road Hindhead GU26 6RW</p>

              <a href="mailto:info@penandpalm.com">info@penandpalm.com</a>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <p>
                <i>Privacy policy updated 24th February 2024</i>
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h3>The type of personal information we collect</h3>

              <p>We currently collect and process the following information:</p>

              <p>Personal identifiers, contacts and characteristics (name and contact details) </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h3>How we get the personal information and why we have it</h3>

              <p>
                Most of the personal information we process is provided directly by you for one of
                the following reasons:
              </p>

              <p>You have filled in my contact form on my website</p>

              <p>You have signed up to my mailing list</p>

              <p>
                We also receive personal information indirectly, from the following sources in the
                following scenarios:
              </p>

              <p>
                We use the information that you have provided in order to create, supply and deliver
                wedding stationery, and to produce guest invitations and deliver these where
                required
              </p>

              <p>We may share address information with Royal Mail or other chosen courier.</p>

              <p>
                Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely
                on for processing this information are:
              </p>

              <p>Your consent.</p>

              <p>
                You are able to remove your consent at any time. You can do this by contacting
                <a href="mailto:info@penandpalm.com">info@penandpalm.com</a>
              </p>

              <p>Legitimate interests.</p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h3>How I store your personal information</h3>

              <p>Your information is securely stored.</p>

              <p>
                We keep your details on file for 6 months after the date of your wedding for wedding
                commissions. We will then dispose of your information and guest information by
                deleting this from the server.
              </p>

              <p>
                Invoices and financial documents are returned for 6 years (and such documents may
                contain personal information e.g. your name and address).{' '}
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h3>Your data protection rights</h3>

              <p>Under data protection law, you have rights including:</p>

              <p>
                <strong>Your right of access -</strong> You have the right to ask us for copies of
                your personal information.
              </p>

              <p>
                <strong>Your right to rectification -</strong> You have the right to ask us to
                rectify personal information you think is inaccurate. You also have the right to ask
                us to complete information you think is incomplete.
              </p>

              <p>
                <strong>Your right to erasure -</strong> You have the right to ask us to erase your
                personal information in certain circumstances.
              </p>

              <p>
                <strong>Your right to restriction of processing -</strong> You have the right to ask
                us to restrict the processing of your personal information in certain circumstances.
              </p>

              <p>
                <strong>Your right to object to processing -</strong> You have the the right to
                object to the processing of your personal information in certain circumstances.
              </p>

              <p>
                <strong>Your right to data portability -</strong> You have the right to ask that we
                transfer the personal information you gave us to another organisation, or to you, in
                certain circumstances.
              </p>

              <p>
                You are not required to pay any charge for exercising your rights. If you make a
                request, we have one month to respond to you.
              </p>

              <p>
                Please contact us at <a href="mailto:info@penandpalm.com">info@penandpalm.com</a> if
                you wish to make a request.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h3>How to complain</h3>

              <p>
                If you have any concerns about our use of your personal information, you can make a
                complaint to us at <a href="mailto:info@penandpalm.com">info@penandpalm.com</a>.
              </p>

              <p>
                You can also complain to the ICO if you are unhappy with how we have used your data.
              </p>

              <p>The ICO&rsquo;s address:</p>

              <p>Information Commissioner&rsquo;s Office</p>

              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>

              <p>Helpline number: 0303 123 1113</p>

              <p>
                ICO website: <a href="https://www.ico.org.uk">https://www.ico.org.uk</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Root>
  );
};

export default Terms;
