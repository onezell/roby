'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  type: z.enum(['project', 'course', 'info', 'other'])
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    content: 'roberta.migliori@atticstudio.games',
    link: 'mailto:roberta.migliori@atticstudio.games'
  },
  {
    icon: '💬',
    title: 'Discord',
    content: 'Join our community',
    link: 'https://discord.gg/3eajWBkGyD'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    content: 'Connect with us',
    link: 'https://linkedin.com'
  },
  {
    icon: '🐦',
    title: 'Twitter',
    content: 'Follow us',
    link: 'https://twitter.com'
  }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulazione invio form - sostituire con API reale
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form data:', data)

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-4 text-text-primary">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Whether you're interested in our games, mentorship program, or partnership opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="heading-3 text-text-primary mb-8">Contact Information</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background-tertiary/50 hover:bg-background-tertiary transition-colors group border border-neutral-800"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                      <p className="text-text-secondary">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-text-primary mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-background-tertiary rounded-lg flex items-center justify-center text-text-secondary hover:bg-gradient-to-br hover:from-secondary hover:to-accent hover:text-white transition-all border border-neutral-800"
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-background-tertiary rounded-2xl border border-neutral-800 p-8 md:p-12">
                <h2 className="heading-3 text-text-primary mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="input"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="label">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="input"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Type Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className="input"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label htmlFor="type" className="label">
                        Inquiry Type *
                      </label>
                      <select
                        {...register('type')}
                        id="type"
                        className="input"
                      >
                        <option value="project">New Project</option>
                        <option value="course">Course Information</option>
                        <option value="info">General Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="label">
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className="input"
                      placeholder="What would you like to discuss?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className="textarea"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 text-green-800 rounded-lg"
                    >
                      Message sent successfully! We'll get back to you as soon as possible.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-800 rounded-lg"
                    >
                      An error occurred. Please try again later.
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 text-center mb-12 text-text-primary">
              <span className="gradient-text">FAQ</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How much does game development cost?',
                  a: 'Cost depends on project complexity. We offer custom quotes after a free initial consultation.'
                },
                {
                  q: 'How long does development take?',
                  a: 'Timeline varies from 3 months for simple projects to 12+ months for complex multiplatform games.'
                },
                {
                  q: 'Do you offer post-launch support?',
                  a: 'Yes, we offer customized maintenance and update packages for all our projects.'
                },
                {
                  q: 'Can I join a course without experience?',
                  a: 'Absolutely! We have courses for all levels, from beginners to experienced developers.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-elevated rounded-lg p-6 border border-neutral-800"
                >
                  <h3 className="font-semibold text-lg mb-2 text-text-primary">{faq.q}</h3>
                  <p className="text-text-secondary">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}