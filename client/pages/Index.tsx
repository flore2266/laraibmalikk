export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-32 right-24 w-24 h-24 bg-cyan-200 rounded-full blur-lg opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full blur-md opacity-40 animate-pulse delay-500"></div>

      {/* Main content */}
      <div className="text-center relative z-10 px-6">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Hi
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-md mx-auto leading-relaxed">
          Welcome to a beautiful beginning
        </p>

        {/* Subtle animation indicator */}
        <div className="mt-12 flex justify-center">
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce mx-1 delay-100"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Grid overlay for modern tech aesthetic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}
