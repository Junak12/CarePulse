import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const {
    _id,
    title,
    image,
    shortDescription,
    pricePerHour,
    rating,
    category,
  } = service;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          loading="eager"
          fill
          unoptimized
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-red-500
              text-white
              font-semibold
              backdrop-blur-sm
              border
            "
            style={{
              borderColor: "var(--border)",
            }}
          >
            {category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4">
          <span
            className="
              px-3
              py-1
              rounded-full
              text-sm
              font-semibold
              backdrop-blur-sm
              bg-cyan-500
              text-white
              border
            "
            style={{
              borderColor: "var(--border)",
            }}
          >
            ⭐ {rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold leading-snug line-clamp-2">{title}</h3>

        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            line-clamp-3
          "
          style={{
            color: "var(--muted)",
          }}
        >
          {shortDescription}
        </p>

        {/* Divider */}
        <div
          className="my-5 h-px"
          style={{
            backgroundColor: "var(--border)",
          }}
        />

        {/* Footer */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p
              className="text-xs uppercase tracking-wider"
              style={{
                color: "var(--muted)",
              }}
            >
              Starting From
            </p>

            <h4
              className="mt-1 text-2xl font-bold"
              style={{
                color: "var(--primary)",
              }}
            >
              ৳{pricePerHour}
              <span
                className="ml-1 text-sm font-medium"
                style={{
                  color: "var(--muted)",
                }}
              >
                /hr
              </span>
            </h4>
          </div>

          <Link
            href={`/service/${_id}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              px-4
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
            style={{
              borderColor: "var(--border)",
            }}
          >
            View Details
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
