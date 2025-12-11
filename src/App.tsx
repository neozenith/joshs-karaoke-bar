import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo-final.png`}
              alt="Josh's Karaoke Bar"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <h1 className="text-2xl md:text-3xl text-primary tracking-wide">Josh's Karaoke Bar</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Rooms</Button>
            <Button variant="ghost" className="hidden md:inline-flex">Menu</Button>
            <Button variant="ghost" className="hidden md:inline-flex">Events</Button>
            <Button>Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 -z-10" />
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img
              src={`${import.meta.env.BASE_URL}logo-final.png`}
              alt="Josh's Karaoke Bar Logo"
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain animate-in fade-in zoom-in duration-500 logo-spin"
            />
          </div>
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-4 py-2">
            Melbourne's Authentic Japanese Karaoke Experience
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-foreground max-w-4xl mx-auto leading-tight">
            Sing Your Heart Out in Melbourne's Laneways
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-4 font-semibold italic">
            "Everyone is your friend you haven't met yet."
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
            8 private karaoke rooms, authentic Japanese street food, and state-of-the-art equipment in the heart of Melbourne CBD
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Book a Room
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary/10">
              View Menu
            </Button>
          </div>
          <div className="mt-8 text-muted-foreground">
            <p className="font-semibold">13 Swift Lane, Melbourne 3000</p>
            <p>Open 4pm - 2am Daily</p>
          </div>
        </div>
      </section>

      {/* Promo Image Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl mb-4">The Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From our grungy Melbourne laneway entrance to the electric atmosphere inside
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <img
              src={`${import.meta.env.BASE_URL}Gemini_Generated_Image_d2o0gd2o0gd2o0gd.png`}
              alt="Josh's Karaoke Bar - Melbourne laneway exterior and vibrant interior with people enjoying Japanese food and karaoke"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-center">
            <div className="p-6 bg-card/50 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-2 text-primary">Iconic Laneway Location</h3>
              <p className="text-muted-foreground">
                Find us in Melbourne's famous laneway culture with authentic Japanese neon signage
              </p>
            </div>
            <div className="p-6 bg-card/50 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-semibold mb-2 text-secondary">Vibrant Atmosphere</h3>
              <p className="text-muted-foreground">
                Join the fun in our bustling main bar area with great food, drinks, and karaoke
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose Josh's?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where Tokyo's karaoke culture meets Melbourne's urban energy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🎤</div>
                <CardTitle className="text-2xl">8 Private Rooms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fully equipped karaoke rooms for groups of all sizes. Perfect for parties, celebrations, or just a fun night out.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🎵</div>
                <CardTitle className="text-2xl">Main Bar Karaoke</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Queue up songs for free in our vibrant main bar area. Show off your talent to the crowd using our state-of-the-art panels.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🍜</div>
                <CardTitle className="text-2xl">Japanese Street Food</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Authentic Japanese street food menu featuring takoyaki, yakitori, ramen, and more. Fuel up for your performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🍹</div>
                <CardTitle className="text-2xl">Craft Cocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Creative cocktail menu and premium drinks on tap. Our happy hour deals are legendary in the CBD.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🎉</div>
                <CardTitle className="text-2xl">Perfect for Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Birthday parties, corporate events, hens/bucks nights, retirement celebrations - we host them all.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">📍</div>
                <CardTitle className="text-2xl">CBD Laneway Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Located in Melbourne's iconic laneway culture. Grungy, authentic, and right in the heart of the action.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Occasions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Perfect for Any Occasion</h2>
            <p className="text-muted-foreground text-lg">
              Whether it's a celebration or just because
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Birthday Parties', 'Corporate Events', 'Hens Nights', 'Bucks Nights', 'Retirement Parties', 'Team Building', 'Date Night', 'Happy Hour', 'Just Because', 'Karaoke Battles'].map((event, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors"
              >
                <p className="font-semibold">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary-foreground">Ready to Rock the Mic?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book one of our private rooms or just drop in to the main bar. Your next unforgettable night starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Book a Private Room
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Check Happy Hour Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl mb-6">Find Us</h2>
              <div className="space-y-4 text-lg">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    13 Swift Lane<br />
                    Melbourne VIC 3000<br />
                    Australia
                  </p>
                  <Button variant="link" className="px-0 text-secondary hover:text-secondary/80">
                    Get Directions →
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Open Daily<br />
                    4:00 PM - 2:00 AM
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: (03) 1234 5678<br />
                    Email: sing@joshskaraoke.com.au
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg flex items-center justify-center min-h-[400px]">
              <p className="text-muted-foreground text-center">
                [Map Integration Placeholder]<br />
                <span className="text-sm">Google Maps embed would go here</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}logo-final.png`}
                  alt="Josh's Karaoke Bar"
                  className="h-12 w-12 object-contain"
                />
                <h3 className="text-2xl text-primary">Josh's Karaoke Bar</h3>
              </div>
              <p className="text-muted-foreground">
                Melbourne's authentic Japanese karaoke experience in the heart of the CBD.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Book a Room</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">View Menu</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Happy Hour</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Events & Parties</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TikTok</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Josh's Karaoke Bar. All rights reserved. | ABN: XX XXX XXX XXX</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
