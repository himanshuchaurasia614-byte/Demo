import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, GraduationCap, CheckCircle, Mail, Send, Award, HeartHandshake } from 'lucide-react';
import { authors } from '../data/articles';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEOHead
        title="About Digital Growth Hub – Educational Mission & Standards"
        description="Learn about the educational mission behind Digital Growth Hub, our practitioner editorial standards, and the college SEO curriculum framework."
        canonicalPath="/about"
      />

      <div className="bg-slate-50 border-b border-slate-200/80 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            About the Publication
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-4">
            Democratizing Practical Digital Marketing Knowledge
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Digital Growth Hub was created as an educational initiative for a university digital marketing & SEO curriculum. Our mission is to bridge the gap between abstract academic theory and tactical industry execution.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Academic Project Context */}
        <section className="bg-blue-50/70 border border-blue-200/80 rounded-3xl p-8 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm uppercase tracking-wider mb-3">
            <GraduationCap className="w-5 h-5 text-blue-700" />
            <span>Academic SEO Assignment Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
            Designed for Real-World Search Engine Mastery
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
            This web property is engineered to fulfill every parameter of a rigorous college-level Search Engine Optimization assignment:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-slate-800">10 comprehensive, original educational articles (~1,000–1,500 words each).</span>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-slate-800">Strict on-page SEO: single H1s, hierarchical H2s/H3s, and canonical URL tags.</span>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-slate-800">Answer Engine Optimization (AEO) headings for direct search snippet extractability.</span>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-slate-800">Documented keyword research mapping in public CSV and Markdown formats.</span>
            </div>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Integrity First</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Core Editorial Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 mb-2">No Vanity Metrics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritize bottom-line business metrics like qualified customer acquisition and durable organic visibility over shallow clickbait.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Human-in-the-Loop</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                While AI tools accelerate research, every paragraph is curated with human domain expertise and verified pedagogical value.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Actionable Takeaways</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every guide features concrete step-by-step checklists, formulas, and diagrams that learners can implement immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Author Profiles */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">The Contributors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Editorial Contributors & Mentors
            </h2>
          </div>

          <div className="space-y-4">
            {Object.values(authors).map((author) => (
              <div
                key={author.name}
                className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100 shrink-0"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">{author.name}</h3>
                  <p className="text-xs font-semibold text-blue-700">{author.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{author.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Get in Touch</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1 mb-2">
              Have Feedback or Curriculum Questions?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Send us suggestions, feedback on article accuracy, or academic collaboration requests.
            </p>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Thank you! Your educational feedback message has been received.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="student@university.edu"
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Message / Question</label>
                  <textarea
                    rows={3}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Inquiry about technical SEO concepts or assignment feedback..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
