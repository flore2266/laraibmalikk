export default function Index() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Laraib Malik
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-pink-600"></div>
                <div className="w-full h-0.5 bg-pink-600"></div>
                <div className="w-full h-0.5 bg-pink-600"></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-pink-100">
              <div className="flex flex-col space-y-3 pt-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-rose-200 rounded-full blur-lg opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full blur-md opacity-25 animate-pulse delay-500"></div>

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
            <Button
              onClick={() =>
                (window.location.href =
                  "mailto:laraibmalik084@gmail.com?subject=Let's Work Together - SEO Project Inquiry")
              }
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 text-lg"
            >
              Let's Work Together
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-3 text-lg"
            >
              View Services
            </Button>
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
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  Technical SEO
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  Content Strategy
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  Link Building
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  Analytics
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  Local SEO
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-700"
                >
                  E-commerce SEO
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-pink-100">
                <CardContent className="p-0">
                  <Search className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    SEO Audits
                  </h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive technical and content audits
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-pink-100">
                <CardContent className="p-0">
                  <TrendingUp className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Growth Strategy
                  </h4>
                  <p className="text-sm text-gray-600">
                    Data-driven growth and optimization plans
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-pink-100">
                <CardContent className="p-0">
                  <Target className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Keyword Research
                  </h4>
                  <p className="text-sm text-gray-600">
                    Strategic keyword analysis and targeting
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-pink-100">
                <CardContent className="p-0">
                  <BarChart3 className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Performance Tracking
                  </h4>
                  <p className="text-sm text-gray-600">
                    Detailed reporting and ROI analysis
                  </p>
                </CardContent>
              </Card>
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Technical SEO
                </h3>
                <p className="text-gray-600 mb-4">
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
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-rose-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Content Strategy
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategic content planning and optimization to attract,
                  engage, and convert your target audience effectively.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Content Gap Analysis</li>
                  <li>• SEO Content Creation</li>
                  <li>• Content Optimization</li>
                  <li>• Editorial Calendar Planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Link Building
                </h3>
                <p className="text-gray-600 mb-4">
                  High-quality, white-hat link building strategies to boost
                  domain authority and search rankings.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Strategic Outreach Campaigns</li>
                  <li>• Guest Posting Opportunities</li>
                  <li>• Digital PR & Brand Mentions</li>
                  <li>• Competitor Backlink Analysis</li>
                </ul>
              </CardContent>
            </Card>
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
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">
                      laraibmalik084@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">03141671053</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-600" />
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

            <Card className="border-pink-100">
              <CardContent className="p-8">
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
                  <Button
                    onClick={() =>
                      (window.location.href =
                        "mailto:laraibmalik084@gmail.com?subject=Project Inquiry&body=Hi Laraib, I would like to discuss a project with you.")
                    }
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
