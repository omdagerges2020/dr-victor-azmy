import T from "../translate/T";

export default function DoctorsHeader() {
  return (
    <div className="text-center max-w-xl mx-auto mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        <T k="doctors.title"/>
      </h1>

      <p className="text-muted-foreground text-sm md:text-base">
        <T k="doctors.description"/>
      </p>
    </div>
  );
}