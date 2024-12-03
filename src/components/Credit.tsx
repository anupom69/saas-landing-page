const DeveloperCredit = () => {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm rounded-full border border-white/10 text-sm">
          <span className="text-white/50">Developed by</span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
            Dipannita Roy
          </span>
        </div>
      </div>
    );
  };
  
  export default DeveloperCredit;