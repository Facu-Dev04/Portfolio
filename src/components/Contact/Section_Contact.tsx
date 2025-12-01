'use client'
import { Mail, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      form.reset();

      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');

      // Resetear el mensaje de error después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full max-w-6xl mx-auto px-4 pt-10 md:pt-5 md:px-4 md:mt-24'>
      <h1 className="font-bold  font-inter text-5xl text-center z-10 mb-16">Formulario de Contacto</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='bg-white/3 p-8 rounded-2xl backdrop-blur-sm border border-white/10'>
          <form className='flex flex-col gap-y-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor="name" className='text-sm font-medium text-gray-300'>Nombre</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ej: Juan"
                  className='outline-none p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 transition-colors text-white placeholder-gray-500'
                  name="name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <div className='flex flex-col gap-y-2'>
                  <label htmlFor="lastname" className='text-sm font-medium text-gray-300'>Apellido</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Ej: Pérez"
                    className='outline-none p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 transition-colors text-white placeholder-gray-500'
                    name="lastname"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor="email" className='text-sm font-medium text-gray-300'>Email *</label>
              <input
                type="email"
                id="email"
                placeholder="ej: juan@email.com"
                className='outline-none p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 transition-colors text-white placeholder-gray-500'
                name="email"
                required
                disabled={isSubmitting}
              />
            </div>



            <div className='flex flex-col gap-y-2'>
              <label htmlFor="message" className='text-sm font-medium text-gray-300'>Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                rows={4}
                className='outline-none p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 transition-colors text-white placeholder-gray-500 resize-none'
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className='p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm'>
                ¡Mensaje enviado exitosamente! Te contactaré pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className='p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm'>
                Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
              </div>
            )}

            <button
              className='mt-2 bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed'
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Contactar'}
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className='flex flex-col gap-6 justify-start backdrop-blur-sm'>

          <div className='p-6 rounded-xl border border-white/10 flex items-start gap-4 transition-colors'>
            <div className='p-3 bg-blue-500/20 rounded-lg text-blue-400'>
              <Mail size={24} />
            </div>
            <div>
              <h3 className='font-semibold text-gray-300 text-lg mb-1'>Email</h3>
              <p className='text-gray-300'>petterssonfacundo@gmail.com</p>
            </div>
          </div>

          <div className='p-6 rounded-xl border border-white/10 flex items-start gap-4 transition-colors'>
            <div className='p-3 bg-green-500/20 rounded-lg text-green-400'>
              <Phone size={24} />
            </div>
            <div>
              <h3 className='font-semibold text-gray-300 text-lg mb-1'>Teléfono</h3>
              <p className='text-gray-300'>+54 11 5579 5134</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}


