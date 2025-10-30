import { Shield, Ticket, Zap } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const CardSec = () => {
    return (
        <div>
            {/* Features Section */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-shadow">
                        <CardContent className="p-8">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                                <Ticket className="w-7 h-7 text-sky-600" />
                            </div>
                            <h3 className="mb-4">Easy Ticket Management</h3>
                            <p className="text-muted-foreground">
                                Create, track, and resolve tickets with an intuitive interface designed for speed and efficiency.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-shadow">
                        <CardContent className="p-8">
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="mb-4">Real-time Updates</h3>
                            <p className="text-muted-foreground">
                                Stay informed with instant notifications and live status updates across your entire team.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-shadow">
                        <CardContent className="p-8">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="mb-4">Secure & Reliable</h3>
                            <p className="text-muted-foreground">
                                Enterprise-grade security ensures your data is protected with industry-standard encryption.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CardSec