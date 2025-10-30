import { Card, CardContent } from "@/components/ui/card";
import { useAppContext } from "@/context/appContext";
import { Ticket, CheckCircle2, Clock, XCircle } from "lucide-react";



export function Dashboard() {
    const { tickets, navigate } = useAppContext()
    const total = tickets.length
    const open = tickets.filter(t => t.status === "open").length;
    const progress = tickets.filter(t => t.status === "in-progress").length;
    const closed = tickets.filter(t => t.status === "closed").length;


    return (
        <div className="min-h-screen bg-background">
            <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
                <div className="mb-12">
                    <h1 className="mb-2">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Overview of your ticket management system
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Tickets */}
                    <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                                    <Ticket className="w-6 h-6 text-gray-700" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl">{total}</div>
                                </div>
                            </div>
                            <h4 className="text-gray-700">Total Tickets</h4>
                            <p className="text-sm text-gray-600 mt-1">All time</p>
                        </CardContent>
                    </Card>

                    {/* Open Tickets */}
                    <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-sky-50 to-sky-100">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-sky-200 rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-sky-700" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl">{open}</div>
                                </div>
                            </div>
                            <h4 className="text-sky-700">Open Tickets</h4>
                            <p className="text-sm text-sky-600 mt-1">Awaiting response</p>
                        </CardContent>
                    </Card>

                    {/* In Progress Tickets */}
                    <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-amber-50 to-amber-100">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-amber-700" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl">{progress}</div>
                                </div>
                            </div>
                            <h4 className="text-amber-700">In Progress</h4>
                            <p className="text-sm text-amber-600 mt-1">Being worked on</p>
                        </CardContent>
                    </Card>

                    {/* Closed Tickets */}
                    <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-slate-50 to-slate-100">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                                    <XCircle className="w-6 h-6 text-slate-700" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl">{closed}</div>
                                </div>
                            </div>
                            <h4 className="text-slate-700">Closed Tickets</h4>
                            <p className="text-sm text-slate-600 mt-1">Resolved</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Additional Info Section */}
                <div className="mt-12 p-8 bg-gradient-to-br from-sky-50 to-amber-50 rounded-2xl">
                    <h3 className="mb-4">Quick Actions</h3>
                    <p className="text-muted-foreground mb-6">
                        Navigate to the Tickets page to create, edit, or manage your support tickets.
                    </p>
                    <button
                        onClick={() => navigate("tickets")}
                        className="px-6 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors"
                    >
                        Go to Tickets
                    </button>
                </div>
            </main>
        </div>
    );
}
