import React from 'react'

const ServiceSkeleton = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center">
        <div className="h-10 w-72 bg-gray-200 dark:bg-gray-800 animate-pulse mx-auto rounded" />
        <div className="h-4 w-96 bg-gray-200 dark:bg-gray-800 animate-pulse mx-auto mt-4 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl"
          />
        ))}
      </div>

      <div className="flex justify-center py-4">
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
      </div>
    </section>
  );
}

export default ServiceSkeleton