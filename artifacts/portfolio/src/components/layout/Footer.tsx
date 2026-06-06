export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 py-12 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xs">
            H
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-white/80">Haris.</span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          &copy; {year} Haris. All rights reserved. Built with precision.
        </p>
      </div>
    </footer>
  );
}
