import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-500 text-center mb-8">Privacy Policy</h2>

        <div className="space-y-6">
          <section>
            <h1 className="text-2xl font-semibold mb-2">Who we are</h1>
            <p className="text-black">
              Our website address is:{" "}
              <a
                href="https://itsybizz.com"
                className="text-blue-400 hover:underline"
              >
                https://itsybizz.com
              </a>
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">Comments</h1>
            <p className="text-black">
              When visitors leave comments on the site, we collect the data
              shown in the comments form, and also the visitor’s IP address and
              browser user agent string to help spam detection. An anonymized
              string created from your email address (also called a hash) may be
              provided to the Gravatar service to see if you are using it. The
              Gravatar service privacy policy is available here:{" "}
              <a
                href="https://itsybizz.com/policy"
                className="text-blue-400 hover:underline"
              >
                https://itsybizz.com/policy
              </a>
              . After approval of your comment, your profile picture is visible
              to the public in the context of your comment.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">Media</h1>
            <p className="text-black">
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">Cookies</h1>
            <p className="text-black">
              If you leave a comment on our site, you may opt-in to saving your
              name, email address, and website in cookies. These are for your
              convenience so that you do not have to fill in your details again
              when you leave another comment. These cookies will last for one
              year.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">
              Embedded content from other websites
            </h1>
            <p className="text-black">
              Articles on this site may include embedded content (e.g., videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website. These websites may collect data about you, use
              cookies, embed additional third-party tracking, and monitor your
              interaction with that embedded content, including tracking your
              interaction with the embedded content if you have an account and
              are logged in to that website.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">
              Who we share your data with
            </h1>
            <p className="text-black">
              If you request a password reset, your IP address will be included
              in the reset email.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">
              How long we retain your data
            </h1>
            <p className="text-black">
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">
              What rights you have over your data
            </h1>
            <p className="text-black">
              If you have an account on this site or have left comments, you can
              request to receive an exported file of the personal data we hold
              about you, including any data you have provided to us.
            </p>
          </section>

          <section>
            <h1 className="text-2xl font-semibold mb-2">
              Where your data is sent
            </h1>
            <p className="text-black">
              Visitor comments may be checked through an automated spam
              detection service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
