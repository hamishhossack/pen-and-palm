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
              <h1>Pen &amp; Palm Order Terms &amp; Conditions</h1>
              <p>
                By placing an order with Pen &amp; Palm you are accepting and are bound by these
                Terms and Conditions. Please ensure that you have read these terms and are happy
                with them before placing your order.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>QUOTES</h2>
              <p>
                Quotes are valid for 30 days from the date it was sent to you, and may be accepted
                at any time during this 30 day period. On acceptance of the quote, a 50%
                non-refundable deposit is required before any work will commence. The remaining 50%
                is due once your order is ready to be shipped.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>TIMING</h2>
              <p>
                For invitation suites, we work within a 3–4 week timescale, depending on final
                requirements. Timescales will be provided on receipt of the deposit but are subject
                to change. Circumstances outside of our control can cause delays. If we request
                details by a certain date, we cannot be held responsible for any problems that occur
                (including late delivery) if you do not respond in the required time.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>DESIGN + PROCESS</h2>
              <p>
                You must provide all details for your order in a typed manner, provided on email or
                Word document. Three rounds of amendments are included within the Design Fee. If
                further amendments are required, these will be charged for at an hourly rate.
              </p>
              <p>
                Due to variables with all printed products, it is impossible to guarantee that the
                final product will match exactly what is shown on your computer screen. The colour
                in the PDF proofs may appear differently in person and we can’t guarantee that they
                will be an accurate representation of final items printed.
              </p>
              <p>
                If you require extra stationery later, we cannot guarantee exact colour matching to
                your original order.
              </p>
              <p>
                All products are designed, printed and finished by hand and as a result slight
                variations and irregularities may occur. Whilst all designs are Pen &amp; Palm’s the
                use of stock imagery or graphic elements are permitted.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>PROOF READING</h2>
              <p>
                Pen &amp; Palm is not responsible for proofreading and will not take any
                responsibilities for any errors – please proofread everything provided three times!
                All orders are subject to written approval of a final proof by you, which includes
                spelling, grammar and text size. Any mistakes that are found after approval will be
                subject to re-printing (or calligraphy re-do) costs.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>RENTALS</h2>
              <p>
                Mirror rental and/or other props rented out by Pen &amp; Palm are subject to an
                additional “safety” deposit (such amount dependent on the quote total of such
                rentals but no less than £100). Provided rentals are returned to Pen &amp; Palm
                without damage, the safety deposit will be refunded. No other monies will be
                returned.
              </p>
              <p>
                In the case of damage to any rentals all or a portion of such safety deposit shall
                be retained by Pen &amp; Palm to cover repairs/replacement costs, at Pen &amp;
                Palm&amp;s sole discretion.
              </p>
              <p>
                You are responsible for the cost and organisation of returning rentals to Pen &amp;
                Palm.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>DELIVERY + COLLECTION</h2>
              <p>Collection from Surrey, GU26 is free.</p>
              <p>
                All complete orders which are not being collected, will be sent by Royal Mail or
                DPD, depending on the weight of the parcel. All parcels are appropriately packaged,
                can be tracked and will require signing for. Delivery charges will be added onto
                your invoice. Pen &amp; Palm are not responsible for any delay, loss or damage, that
                are outside of reasonable control.
              </p>
              <p>
                We are not responsible for any delivery issues as a result of your error (e.g.
                incorrect address, deliveries left in “safe spaces”).
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>CANCELLATION</h2>
              <p>
                All orders are non-refundable. Cancellations will only be accepted before final
                proofs are approved and in such cases the Design Fee is non-refundable as it covers
                work undertaken in developing your design. Once orders have gone to print (or
                hand-lettered) we will not accept cancellations.
              </p>
              <p>
                If there is a problem with your order, please notify us within 2 working days of
                receipt.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h2>OWNERSHIP</h2>
              <p>
                All designs and photos are the property of Pen &amp; Palm. Any reproduction is
                prohibited unless given written permission by us. You will use reasonable endeavours
                to ensure that Pen &amp; Palm are credited in any approved reproduction. Pen &amp;
                Palm can display materials and final prints created for you online, on social media,
                at trade fairs or similar events as marketing and promotional material. Personal
                details will be protected and not disclosed.
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
