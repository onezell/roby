'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Il nome deve contenere almeno 2 caratteri'),
  email: z.string().email('Email non valida'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'L\'oggetto deve contenere almeno 5 caratteri'),
  message: z.string().min(20, 'Il messaggio deve contenere almeno 20 caratteri'),
  type: z.enum(['project', 'course', 'info', 'other'])
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    content: 'info@atticstudio.com',
    link: 'mailto:info@atticstudio.com'
  },
  {
    icon: '📱',
    title: 'Telefono',
    content: '+39 02 1234567',
    link: 'tel:+390212345678'
  },
  {
    icon: '📍',
    title: 'Indirizzo',
    content: 'Via Roma 123, 20121 Milano',
    link: '#'
  },
  {
    icon: '🕒',
    title: 'Orari',
    content: 'Lun-Ven 9:00-18:00',
    link: '#'
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
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-4">
              Iniziamo a <span className="gradient-text">Collaborare</span>
            </h1>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              Hai un progetto in mente? Parliamone insieme e trasformiamo la tua idea in realtà
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
              <h2 className="heading-3 mb-8">Informazioni di Contatto</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary-200 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{info.title}</h3>
                      <p className="text-neutral-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-neutral-900 mb-4">Seguici sui Social</h3>
                <div className="flex gap-3">
                  {['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
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
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="heading-3 mb-8">Inviaci un Messaggio</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">
                        Nome Completo *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Mario Rossi"
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
                        placeholder="mario@esempio.com"
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
                        Telefono
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className="input"
                        placeholder="+39 123 456 7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="type" className="label">
                        Tipo di Richiesta *
                      </label>
                      <select
                        {...register('type')}
                        id="type"
                        className="input"
                      >
                        <option value="project">Nuovo Progetto</option>
                        <option value="course">Informazioni Corsi</option>
                        <option value="info">Informazioni Generali</option>
                        <option value="other">Altro</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="label">
                      Oggetto *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className="input"
                      placeholder="Di cosa vuoi parlare?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label">
                      Messaggio *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className="textarea"
                      placeholder="Raccontaci del tuo progetto..."
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
                      Messaggio inviato con successo! Ti risponderemo al più presto.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-800 rounded-lg"
                    >
                      Si è verificato un errore. Riprova più tardi.
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
                      Invia Messaggio
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 text-center mb-12">
              Domande <span className="gradient-text">Frequenti</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Quanto costa sviluppare un videogioco?',
                  a: 'Il costo dipende dalla complessità del progetto. Offriamo preventivi personalizzati dopo una prima consulenza gratuita.'
                },
                {
                  q: 'Quanto tempo richiede lo sviluppo?',
                  a: 'I tempi variano da 3 mesi per progetti semplici fino a 12+ mesi per giochi complessi multipiattaforma.'
                },
                {
                  q: 'Offrite supporto post-lancio?',
                  a: 'Sì, offriamo pacchetti di manutenzione e aggiornamento personalizzati per tutti i nostri progetti.'
                },
                {
                  q: 'Posso seguire un corso senza esperienza?',
                  a: 'Certamente! Abbiamo corsi per tutti i livelli, dai principianti agli sviluppatori esperti.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}