export default function MapSection() {
  return (
    <section className="w-full">
      <div className="py-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Visit HOKO Innovation for Disability Empowerment and Development Office
        </h2>
      </div>
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5511076593!2d38.75145837486825!3d9.011661891772204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNDIuMCJOIDM4wrA0NScxNC41IkU!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HOKO Innovation Location"
        ></iframe>
      </div>
    </section>
  )
}
