const TermsAndCondition = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Terms and Conditions – Bid&Buy
      </h1>

      <p className="mb-6">
        Bid&Buy is a product of <strong>bidnbuyglobal.com</strong> designed to deliver value
        to customers through auctioning. Thus herein contains the Terms and Conditions.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">General Terms</h2>
        <p>
          Online terms and conditions are in addition to any general onsite auction terms and
          conditions. Bidder and Auctioneer/Vendor agree that the terms listed below shall govern
          each online auction sale. Bid&Buy auction will be conducted within the framework of the
          rules listed below plus any other provision that may be added from time to time by
          bidnbuyglobal.com.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Registration & Eligibility</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All registration information the Bidder and Vendor provides to bidnbuyglobal.com must
            be current, complete and accurate.
          </li>
          <li>Bidders below the age of 18 must be under the supervision of a guardian.</li>
          <li>
            To be legitimate to bid or use the buy-now option, you must be a registered member and
            hold a percentage of the item’s value in your Bid&Buy wallet.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Auction Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Vendors are authorized to accept final bids while Bid&Buy holds payment in escrow
            until delivery is confirmed.
          </li>
          <li>
            Winning bidders must pay within the specified timeframe; failure may result in
            suspension or penalties.
          </li>
          <li>
            All bids may start at ₦5,000. Reserved items require bids equal to or greater than the
            reserve price to be considered won.
          </li>
          <li>
            Outright purchase options may be offered where available.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Payments & Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Full payment of the hammer price, VAT (7.5%), and Bid&Buy platform fee (3%) is
            required. Fees may change without prior notice.
          </li>
          <li>
            Payments can be made to specified bank accounts or through Paystack or other approved
            platforms.
          </li>
          <li>
            Invoices will be registered on the bidder’s account under <em>My Bids</em>.
          </li>
          <li>
            Failure to pay may result in forfeiture of items and a 10% penalty.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Refunds & Returns</h2>
        <p>
          Generally, <strong>No Refunds</strong>. Items awarded to the highest bidder are the
          bidder’s property upon final payment. Exceptions apply only if an item is mis-described
          and confirmed by a certified appraiser within 2 working days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Bans & Violations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Providing false information (name, contact details) may lead to permanent ban.
          </li>
          <li>
            Winning and failing to honor bids is illegal and may lead to prosecution in Nigeria.
          </li>
          <li>
            Users may be banned for defaulting payments or fraudulent activity.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Liability & Warranties</h2>
        <p>
          All items are sold “<strong>as-is, where-is</strong>.” Bidnbuyglobal.com disclaims all
          warranties, including merchantability and fitness for purpose. Bidders are encouraged to
          inspect items prior to bidding.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Miscellaneous</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bid increments may vary per auction.</li>
          <li>Bidnbuyglobal.com does not ship items.</li>
          <li>
            Auctioneer decisions are final in all matters, including technical malfunctions.
          </li>
          <li>
            Arbitration in Nigeria will resolve disputes under applicable Nigerian law.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>
          For inquiries, email us at{" "}
          <a
            href="mailto:info@bidnbuyglobal.com"
            className="underline text-blue-400"
          >
            info@bidnbuyglobal.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndCondition;
