import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background py-20 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 justify-items-center text-center">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">about</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">brand</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">integrations</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">docs</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">privacy policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">terms of service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">cookie policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 Kainite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

