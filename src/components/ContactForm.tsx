export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/npakmax@gmail.com"
      method="POST"
      className="grid gap-4 rounded-2xl border border-white/10 bg-card/70 p-6"
    >
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-slate-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-accent"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-slate-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-accent"
          placeholder="name@email.com"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="details" className="text-sm text-slate-300">
          Project details
        </label>
        <textarea
          id="details"
          name="message"
          rows={5}
          required
          className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-accent"
          placeholder="Describe the deck, roofing, or outdoor structure you have in mind"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:shadow-[0_20px_40px_rgba(34,211,238,0.35)]"
      >
        Send request
      </button>
    </form>
  );
}
