import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="flex-1 space-y-6 lg:max-w-[50%]">
      <h1 className="text-4xl md:text-6xl font-bold text-white font-outfit">
        Master{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
          Fullstack Application
        </span>
        <br />
        Development{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
          Programme
        </span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl">
        Transform your career with our comprehensive fullstack development program. Learn by building real-world applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-600/90 text-white px-8 py-6 text-lg rounded-xl"
        >
          Start Learning →
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-6 text-lg rounded-xl border-2 border-orange-500"
        >
          View Curriculum →
        </Button>
      </div>
    </div>
  )
}
