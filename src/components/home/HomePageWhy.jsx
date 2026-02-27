export default function HomePageWhy() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Why Drafft Exists</h2>
        <p className="mt-6 text-lg/8 text-gray-300">
          Drafft was built to address a structural gap in how interactive systems are edited.
        </p>
        <div className="mt-6">
          <a
            className="inline-block rounded-md bg-primary-color-darkest px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary-color-darker"
            href="/why"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
