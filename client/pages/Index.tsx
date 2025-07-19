export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Laraib Malik
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-rose-200 rounded-full blur-lg opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full blur-md opacity-25 animate-pulse"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-800 bg-clip-text text-transparent mb-6 leading-tight">
              Laraib Malik
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
              SEO Expert & Digital Marketing Strategist
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Helping businesses dominate search results and achieve sustainable
              growth through strategic SEO and data-driven digital marketing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="mailto:laraibmalik084@gmail.com?subject=Let's Work Together - SEO Project Inquiry"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 text-lg rounded-lg font-semibold text-center inline-block transition-all duration-300"
            >
              Let's Work Together
            </a>
            <a
              href="#services"
              className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-3 text-lg rounded-lg font-semibold text-center inline-block transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate SEO expert with proven track record of driving organic
              growth and delivering measurable results for businesses across
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                My Expertise
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With years of experience in SEO and digital marketing, I
                specialize in creating comprehensive strategies that not only
                improve search rankings but drive real business growth. My
                approach combines technical SEO excellence with content strategy
                and user experience optimization.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">150+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600">95%</div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Technical SEO
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Content Strategy
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Link Building
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Analytics
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Local SEO
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  E-commerce SEO
                </span>
              </div>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8872492/pexels-photo-8872492.jpeg"
                alt="Laraib Malik - Professional SEO Expert"
                className="w-full max-w-sm mx-auto h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-pink-50 to-rose-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              My Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO and digital marketing services tailored to your
              business goals and growth objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                🌐
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Technical SEO
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Complete technical optimization including site speed,
                mobile-friendliness, crawlability, and indexability
                improvements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Site Architecture Optimization</li>
                <li>• Core Web Vitals Improvement</li>
                <li>• Schema Markup Implementation</li>
                <li>• Technical Audit & Fixes</li>
              </ul>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                👥
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Content Strategy
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Strategic content planning and optimization to attract, engage,
                and convert your target audience effectively.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Content Gap Analysis</li>
                <li>• SEO Content Creation</li>
                <li>• Content Optimization</li>
                <li>• Editorial Calendar Planning</li>
              </ul>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                🏆
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Link Building
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                High-quality, white-hat link building strategies to boost domain
                authority and search rankings.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Strategic Outreach Campaigns</li>
                <li>• Guest Posting Opportunities</li>
                <li>• Digital PR & Brand Mentions</li>
                <li>• Competitor Backlink Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to boost your online presence? Let's discuss how I can help
              your business achieve its SEO goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                I'm always excited to work on new projects and help businesses
                grow their online presence. Let's start a conversation about
                your SEO needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">
                      laraibmalik084@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 text-xl">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">03141671053</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Location</div>
                    <div className="text-gray-600">
                      DHQ Civil line jhang sadar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-pink-100 bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Quick Contact
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <a
                  href="mailto:laraibmalik084@gmail.com?subject=Project Inquiry&body=Hi Laraib, I would like to discuss a project with you."
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-3 px-4 rounded-lg font-semibold text-center inline-block transition-all duration-300"
                >
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
            Laraib Malik
          </div>
          <p className="text-gray-400 mb-6">
            SEO Expert & Digital Marketing Strategist
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-6"></div>
          <p className="text-gray-500">
            © 2025 Laraib Malik. All rights reserved. | Boosting businesses
            through strategic SEO.
          </p>
        </div>
      </footer>
    </div>
  );
}
