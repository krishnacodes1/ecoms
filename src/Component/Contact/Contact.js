import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font bg-white relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                // <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14374.19033906709!2d82.67487455423439!3d25.752470787719858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d25.751066899999998!2d82.6807449!4m5!1s0x39903bcda1663335%3A0xaf234622dfe84502!2skila%20jaunpur!3m2!1d25.7496188!2d82.6885064!5e0!3m2!1sen!2sin!4v1695463762612!5m2!1sen!2sin"
                // style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Veer Bahadur Singh Purvanchal University, Jaunpur
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:example@email.com"
                    className="text-indigo-500 leading-relaxed"
                  >
                    krishnasahu000537@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+91 8416954767</p>
                </div>
              </div>
            </div>
            <form action="https://formspree.io/f/mwkdraqj" method="POST" className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                We will reply you soon
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                We're available during our business hours: <br></br> Mon-Fri 10
                AM to 4 PM<br></br>
                Delhi, India
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label><br></br>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full input input-bordered input-accent bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className=" peer w-full nput input-bordered input-accent  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                 <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label><br></br>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full nput input-bordered input-accent  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
              <p className="text-xs text-gray-500 mt-3">
                we will try to resolve your issues as soon as possible
              </p>
            </form>
          </div>
        </section>

        <div className="bg-white text-black">
          <h3> Flipkart Help Centre: Get All Shopping Solutions Here </h3>
          Once you place your order on any online shopping store, the next
          obvious thing to do is wait for your product to arrive. This wait can
          be quite anxiety-ridden if you do not get updates about your order or
          do not receive support post-delivery of your order. However, with the
          Flipkart Help Centre, your wait becomes exciting, and your shopping
          experience becomes joyful, thanks to all the support it provides
          related to your order. With websites, like Flipkart, the entire
          shopping experience has gone through a major change. Now, you can
          conveniently shop any time, from anywhere, and anything that you want.
          These websites are one-stop destinations for all your needs and
          requirements. From skincare products to home appliances and groceries
          to baby care essentials, everything is just a few clicks away. These
          websites provide you convenience, at the same time, a bitter
          experience can make online shopping a nightmare for many. To ensure
          that your shopping experience is delightful, the Flipkart Help centre
          support offers every assistance that you need. From reporting specific
          delivered product-related issues to letting you manage your orders,
          the Flipkart Helpcentre has solutions to all your worries related to
          your orders. Furthermore, if you do not find a solution to your
          queries here, then you can use the Flipkart Help Centre number to get
          your issues solved. Keep reading to know more about Flipkart Help
          Centre and what all assistance you get here:
          <h1>24x7 Customer Care Support </h1>
          You can 24x7 Customer Care Support on the Flipkart Help Centre. Any
          query or issue that you may possibly have while shopping on Flipkart
          is taken care here. This page is easy to navigate, and you can get
          support almost immediately. Once you log onto your Flipkart account,
          this page shows you your recent orders and let you report any issue.
          By clicking on the specific order, you can raise your query. It also
          has a chat option to ensure that your queries and issues are taken
          care of. Similarly, there are other options on this page that are
          created to assist you and to make your shopping experience
          hassle-free. You can get support any time and get a satisfactory
          solution to your queries and issues within minutes.
          <h1>Types and Topics of Support in Flipkart Help Centre</h1>
          Apart from helping you with your orders and/or your delivered
          product-related issues, you can find various other support at Flipkart
          Help Centre. You can select from three types of issues here - help
          with your issues, help with your order, and help with other issues.
          You can track your orders here, manage your orders, get help with your
          returns and refunds issues, and even get help related to various other
          issues, such as offers, payment, Flipkart Plus, etc. There are also
          details about specific help topics, such as cancellations and returns,
          wallet, insurance, Flipkart Quick, SuperCoins, Gift Card, etc.
          available here. So, log on to your Flipkart account and shop without
          hassles and with complete help and support. The Flipkart Help Centre
          is available on the Flipkart site to help every Flipkart customer with
          any grievance that they may have. You can find solutions regarding the
          tracking of your order. It will also help edit your delivery date or
          address and more. All your issues will be addressed at any time of the
          day or night (24/7 service). This way, you can immediately get your
          grievances addressed. You can also get help regarding returns and
          refunds and many other issues through the Flipkart Help Centre. In
          case you're not satisfied with the solution given, you can seek
          further assistance. You can get in touch with a support assistant via
          the Flipkart Help Centre number. The next time you have any issue with
          your order or if you want more clarity regarding payment options,
          Flipkart Plus, account-related queries, and more, you can access
          Flipkart Help Centre support for further information. This way, you
          can shop without worry and have a satisfying shopping experience. The
          support centre will do all that it can to address your grievance until
          you’re completely satisfied. So, no matter the nature of your
          grievance, you must get in touch with the support forum. This way, you
          won’t have to compromise in any way.
        </div>
      </div>
    </>
  );
};

export default Contact;
