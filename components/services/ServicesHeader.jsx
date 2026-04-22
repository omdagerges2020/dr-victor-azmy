import T from "../translate/T";

export default function ServicesHeader() {
  return (
    <section className="py-12 text-center">
      <div className="container space-y-3">
        <h1 className="text-[2rem] font-bold"><T k="services.title"/></h1>

        <p className="text-md text-muted-foreground max-w-lg mx-auto">
          <T k="services.description"/>
        </p>
      </div>
    </section>
  );
}
