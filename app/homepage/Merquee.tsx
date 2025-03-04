
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";

const reviews = [
  {
    name: "Cybercrime Financial Loss in Karnataka",
    number: 2047.2,
    unit: "Crore",
  },
  {
    name: "Cybercrime Cases Reported in Karnataka",
    number: 20875,
    unit: "",
  },
  {
    name: "Industry Impact in Karnataka",
    number: 6.84,
    unit: "Million",
  },
  {
    name: "Daily Cybercrime Cases Registered in Karnataka",
    number: 63,
    unit: "",
  },
];

const ReviewCard = ({
  name,
  number,
  unit,
}: {
  name: string;
  number: number;
  unit: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-full md:w-[45%] cursor-pointer overflow-hidden rounded-lg border p-3 flex flex-col justify-between items-center text-center",
        "shadow-md transition-all hover:bg-gray-100"
      )}
    >
    
      <figcaption
        className="text-xl font-bold min-h-[50px] flex items-center"
        style={{ color: "var(--primary-blue)" }}
      >
        {name}
      </figcaption>

   
      <blockquote className="text-2xl font-bold flex items-center">
        <NumberTicker
          value={number}
          decimalPlaces={unit ? 2 : 0}
          className="text-4xl"
          style={{ color: "var(--primary-orange)" }}
        />
        {unit && (
          <span
            className="text-2xl font-semibold ml-1"
            style={{ color: "var(--primary-orange)" }}
          >
            {unit}
          </span>
        )}
        <span
          className="text-2xl font-bold"
          style={{ color: "var(--primary-orange)" }}
        >
          +
        </span>
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white py-10 px-10">
      <div
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight"
        style={{ color: "var(--primary-blue)" }}
      >
        Cybercrimes in Karnataka Rising Rapidly,  
        <br />
        Threatening Lives & Finances!
      </div>

      <Marquee pauseOnHover className="[--duration:20s] flex w-full gap-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </div>
  );
}
